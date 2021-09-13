import {
    Component,
    DoCheck,
    EventEmitter,
    Input,
    IterableDiffers,
    KeyValueDiffer,
    KeyValueDiffers,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';

import {
    add,
    areIntervalsOverlapping,
    endOfDay,
    getHours,
    getMinutes,
    intervalToDuration,
    isSameDay,
    startOfDay,
    startOfWeek
} from 'date-fns';

import { CalendarDay, WeekView } from '../../models/Calendar';
import { CalendarEvent, CalendarEventGrid } from '../../models/CalendarEvent';

import { v4 as uuidv4 } from 'uuid';
import { Times } from '../../models/Times';
import { interval } from 'rxjs';
import { FormattingService } from '../../services/formatting.service';
import { CalendarOptions } from '../../models/CalendarOptions';

@Component({
    selector: 'week-view',
    templateUrl: './week-view.component.html',
    styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit, DoCheck, OnDestroy {
    @Input() events: CalendarEvent[] = [];
    private differEvents: IterableDiffers;

    public selectedDate!: Date;
    @Input() get date(): Date {
        return this.selectedDate;
    }
    set date(value: Date) {
        this.selectedDate = value;
        this.initWeekView();
    }

    @Input() options: CalendarOptions = new CalendarOptions();
    private differOptions: KeyValueDiffer<any, any>;

    @Output() eventClick: EventEmitter<CalendarEvent> = new EventEmitter();

    times = Times;
    pixelsPerHour = 0;
    markerSubscription: any;
    markerPosition = 0;
    weekview = {} as WeekView;
    iterableDiffer = [];

    constructor(
        private formattingService: FormattingService,
        private iterableDiffers: IterableDiffers,
        private keyValueDiffers: KeyValueDiffers
    ) {
        this.differEvents = iterableDiffers;
        this.differOptions = keyValueDiffers.find(CalendarOptions).create();
    }

    ngOnInit(): void {
        this.initWeekView();

        this.markerSubscription = interval(this.options.markerInterval).subscribe(() => {
            this.markerPosition = this.calculateMarkerPosition();
        });
    }

    ngDoCheck(): void {
        const eventChanges = this.differEvents.find(this.events);

        if (eventChanges) {
            this.generateWeekView();
        }

        const optionsChanges = this.differOptions.diff(this.options);

        if (optionsChanges) {
            this.initWeekView();
        }
    }

    initWeekView(): void {
        if (this.options && this.events) {
            this.pixelsPerHour = this.options.getPixelsPerMinute * 60;

            this.generateWeekView();
            this.markerPosition = this.calculateMarkerPosition();
        }
    }

    generateWeekView(): void {
        if (this.selectedDate) {
            this.weekview = {
                days: [],
            };

            const emptyDays = this.generateDays();
            this.populateWeekView(emptyDays);
        }
    }

    populateWeekView(emptyDays: CalendarDay[]): void {
        const populatedDays: CalendarDay[] = emptyDays;

        populatedDays.forEach(day => {
            day.events = this.events.filter((event: CalendarEvent) => {
                return isSameDay(new Date(day.date), new Date(event.startTime)) ||
                    isSameDay(new Date(day.date), new Date(event.endTime));
            }).map((event: CalendarEvent) => {
                return this.populateEvents(event, day);
            }).sort((a: CalendarEvent, b: CalendarEvent) => {
                return a.startTime.getTime() - b.startTime.getTime();
            });

            day = this.createEventGroups(day);
        });

        this.weekview.days = populatedDays;
    }

    populateEvents(event: CalendarEvent, day: CalendarDay): CalendarEvent {
        const populatedEvent = new CalendarEvent({
            ...event,
            grid: this.calculatePixelsOffsetForEvent(event, day)
        });

        return populatedEvent;
    }

    createEventGroups(day: CalendarDay): CalendarDay {
        day.events.map((event: CalendarEvent) => {
            const uuid = this.generateUniqueId();
            let eventGroup: CalendarEvent[] = [];

            if (event.grid) {
                eventGroup = this.getOverlappingEvents(event, day.events, event.grid.eventGroups);

                eventGroup.map((overlapEvent: CalendarEvent) => {
                    if (overlapEvent.grid) {
                        overlapEvent.grid.eventGroups.push(uuid);
                        overlapEvent.grid.eventsInGroup = eventGroup.length;
                    }

                    if (!day.eventGroups.includes(uuid)) {
                        day.eventGroups.push(uuid);
                    }
                });
            }
        });

        this.setEventSizes(day);

        return day;
    }

    setEventSizes(day: CalendarDay): void {
        day.eventGroups.forEach(eventGroup => {
            const eventGroupEvents = day.events.filter((event: CalendarEvent) => {
                return event.grid?.eventGroups.includes(eventGroup);
            });

            let index = 0;
            eventGroupEvents.forEach((event: CalendarEvent) => {
                if (event.grid) {
                    event.grid.width = 100 / (eventGroupEvents.length);
                    event.grid.offsetLeft = event.grid.width * index;
                }

                // check if already has a width/offsetLeft to determine if it's in eventgroup A or B

                index++;
            });
        });
    }

    getOverlappingEvents(event: CalendarEvent, events: CalendarEvent[], eventGroups: string[]): CalendarEvent[] {
        return events.filter((compareEvent: CalendarEvent) => {
            const eventsDoOverlap = areIntervalsOverlapping(
                { start: event.startTime, end: event.endTime },
                { start: compareEvent.startTime, end: compareEvent.endTime },
                { inclusive: true }
            );

            let isAlreadyInEventGroup = false;
            if (compareEvent.grid) {
                isAlreadyInEventGroup = compareEvent.grid.eventGroups.some((eventGroup: string) => {
                    return eventGroups.includes(eventGroup);
                });
            }

            return eventsDoOverlap && !isAlreadyInEventGroup;
        });
    }

    generateUniqueId(): string {
        return uuidv4();
    }

    generateDays(): CalendarDay[] {
        const selectedWeekStart = startOfWeek(this.selectedDate, { weekStartsOn: 1 });
        const days = [];

        for (let i = 0; i < 7; i++) {
            let date = new Date(selectedWeekStart);
            date = add(date, { days: i });

            const day: CalendarDay = {
                date,
                eventGroups: [],
                events: []
            };

            days.push(day);
        }

        return days;
    }

    calculatePixelsOffsetForEvent(event: CalendarEvent, day: CalendarDay): CalendarEventGrid {
        let grid = new CalendarEventGrid();

        const startTime = event.startTime;
        const endTime = isSameDay(event.startTime, event.endTime) ?
            event.endTime :
            endOfDay(event.startTime);

        const eventDurationFromStartTime = intervalToDuration({
            start: startTime,
            end: endTime
        });

        const eventDurationFromMidnight = intervalToDuration({
            start: startOfDay(day.date),
            end: event.endTime
        });

        eventDurationFromStartTime.hours = eventDurationFromStartTime.hours || 0;
        eventDurationFromStartTime.minutes = eventDurationFromStartTime.minutes || 0;
        eventDurationFromMidnight.hours = eventDurationFromMidnight.hours || 0;
        eventDurationFromMidnight.minutes = eventDurationFromMidnight.minutes || 0;

        const offsetInMinutes = !isSameDay(event.startTime, event.endTime) && isSameDay(event.endTime, day.date) ?
            0 : Math.abs(getHours(startTime)) * 60 + getMinutes(startTime);

        const durationOffset = !isSameDay(event.startTime, event.endTime) && isSameDay(event.endTime, day.date) ?
            eventDurationFromMidnight.hours * 60 + eventDurationFromMidnight.minutes :
            eventDurationFromStartTime.hours * 60 + eventDurationFromStartTime.minutes;

        grid = {
            ...grid,
            offsetTop: offsetInMinutes * this.options.getPixelsPerMinute,
            durationOffset: durationOffset * this.options.getPixelsPerMinute
        };

        return grid;
    }

    calculateGrid(): any {
        const grid = {
            height: 24 * this.pixelsPerHour
        };

        return grid;
    }

    calculateMarkerPosition(): number {
        const now = new Date();
        const offsetTop = (getHours(now) * 60 + getMinutes(now)) * this.options.getPixelsPerMinute;

        return offsetTop;
    }

    isToday(date: Date): boolean {
        return this.formattingService.isToday(date);
    }

    getDayName(date: Date): string {
        return this.formattingService.getDayName(date);
    }

    getDayNumber(date: Date): string {
        return this.formattingService.getDayNumber(date);
    }

    getTime(date: Date): string {
        return this.formattingService.getTime(date);
    }

    getCellHeight(time: any): number {
        if (time.isEnd) {
            return 20;
        }

        return this.pixelsPerHour;
    }

    onEventClick(event: CalendarEvent): void {
        this.eventClick.emit(event);
    }

    ngOnDestroy(): void {
        this.markerSubscription.unsubscribe();
    }
}

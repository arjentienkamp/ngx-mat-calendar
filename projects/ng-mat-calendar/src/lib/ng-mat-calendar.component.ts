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
    Output,
    ViewChild
} from '@angular/core';

import {
    format,
    add,
    isSameDay,
    startOfWeek,
    isToday,
    endOfDay,
    intervalToDuration,
    getHours,
    getMinutes,
    toDate,
    startOfDay,
    areIntervalsOverlapping
} from 'date-fns';

import { v4 as uuidv4 } from 'uuid';
import { FormattingService } from './services/formatting.service';
import { DateAdapter } from '@angular/material/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatMenuTrigger } from '@angular/material/menu';
import { interval } from 'rxjs';

import Calendar, { CalendarDay } from './models/Calendar';
import { CalendarOptions } from './models/CalendarOptions';
import { CalendarEvent, CalendarEventGrid } from './models/CalendarEvent';

import { Times } from './models/Times';
import { Views } from './models/Views';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ng-mat-calendar',
    templateUrl: './ng-mat-calendar.component.html',
    styleUrls: ['./ng-mat-calendar.component.scss']
})
export class NgMatCalendarComponent implements OnInit, OnDestroy, DoCheck {
    @Input() events: CalendarEvent[] = [];
    private differEvents: IterableDiffers;

    private setOptions!: CalendarOptions;
    @Input() get options(): CalendarOptions {
        return this.setOptions;
    }
    set options(value: CalendarOptions) {
        this.setOptions = value;
    }
    private differOptions: KeyValueDiffer<any, any>;


    private selectedDate!: Date;
    @Input() get date(): Date {
        return this.selectedDate;
    }
    set date(value: Date) {
        this.selectedDate = value;
        this.dateChange.emit(this.selectedDate);
    }
    @Output() dateChange: EventEmitter<Date> = new EventEmitter();
    @Output() eventClick: EventEmitter<CalendarEvent> = new EventEmitter();

    @ViewChild(MatMenuTrigger) datePickerMenu!: MatMenuTrigger;

    views: any[];
    selectedView = 'Week';
    times = Times;
    pixelsPerHour = 0;
    enableDatePickerButton!: boolean;
    dateFormat!: string;
    markerSubscription: any;
    markerPosition = 0;
    markerInterval = 600000;
    calendar = {} as Calendar;
    iterableDiffer = [];

    constructor(
        private formattingService: FormattingService,
        private dateAdapter: DateAdapter<Date>,
        private iterableDiffers: IterableDiffers,
        private keyValueDiffers: KeyValueDiffers
    ) {
        this.differEvents = iterableDiffers;
        this.differOptions = keyValueDiffers.find(CalendarOptions).create();
        this.views = Views;
    }

    ngOnInit(): void {
        this.initCalendar();

        this.markerSubscription = interval(this.markerInterval).subscribe(() => {
            this.markerPosition = this.calculateMarkerPosition();
        });
    }

    initCalendar(): void {
        if (this.setOptions && this.events) {
            this.pixelsPerHour = this.setOptions.getPixelsPerMinute * 60;
            this.enableDatePickerButton = this.setOptions.enableDatePickerButton;
            this.dateFormat = this.setOptions.dateFormat;

            this.dateAdapter.setLocale(this.setOptions.locale);

            this.generateCalendarView();
            this.markerPosition = this.calculateMarkerPosition();
        }
    }

    ngDoCheck(): void {
        const eventChanges = this.differEvents.find(this.events);

        if (eventChanges) {
            this.generateCalendarView();
        }

        const optionsChanges = this.differOptions.diff(this.setOptions);

        if (optionsChanges) {
            this.initCalendar();
        }
    }

    generateCalendarView(): void {
        if (this.selectedDate) {
            this.calendar = {
                days: [],
                monthAndYear: format(this.selectedDate, 'MMMM yyyy'),
                weeknumber: format(this.selectedDate, 'I')
            };

            const emptyDays = this.generateDays();
            this.populateDays(emptyDays);

            console.log(this.calendar);
        }
    }

    populateDays(emptyDays: any): void {
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

        this.calendar.days = populatedDays;
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
        const selectedWeekStart = startOfWeek(this.selectedDate, { weekStartsOn: 1});
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
        return isToday(date);
    }

    setCalendarToday(): void {
        this.selectedDate = new Date();

        this.handleCalendarSet();
    }

    setCalendar(offset?: number, date?: Date): void {
        if (offset) {
            this.selectedDate = add(this.selectedDate, { days: offset });
        } else if (date) {
            this.selectedDate = date;
        }

        this.handleCalendarSet();
    }

    handleCalendarSet(): void {
        this.generateCalendarView();
        this.dateChange.emit(this.selectedDate);
    }

    getDayName(date: Date): string {
        return format(date, 'E');
    }

    getDayNumber(date: Date): string {
        return format(date, 'd');
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

    onViewChange(view: any): void {
        this.selectedView = view;
    }

    onEventClick(event: CalendarEvent): void {
        this.eventClick.emit(event);
    }

    dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
        if (view === 'month') {
            return isSameDay(cellDate, this.selectedDate) ? 'datepicker--today' : '';
        }

        return '';
    }

    onDatePickerChange(date: any): void {
        this.setCalendar(undefined, toDate(date));
        this.datePickerMenu.closeMenu();
    }

    ngOnDestroy(): void {
        this.markerSubscription.unsubscribe();
    }
}

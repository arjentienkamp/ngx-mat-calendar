import {
    Component,
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
    areIntervalsOverlapping,
    endOfDay,
    getHours,
    getMinutes,
    intervalToDuration,
    isSameDay,
    startOfDay
} from 'date-fns';

import { CalendarDay } from '../../../models/Calendar';
import { CalendarEvent, CalendarEventGrid } from '../../../models/CalendarEvent';
import { v4 as uuidv4 } from 'uuid';
import { CalendarOptions } from '../../../models/CalendarOptions';

import { hoursOfDay } from '../../../models/Times';
import { FormattingService } from '../../../services/formatting.service';
import { interval, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
    template: ''
})
export abstract class BaseViewComponent implements OnInit, OnDestroy {
    @Input() options$: Observable<CalendarOptions>;
    @Input() events: CalendarEvent[] = [];

    public differEvents: IterableDiffers;

    public selectedDate: Date;
    @Input() get date(): Date {
        return this.selectedDate;
    }
    set date(value: Date) {
        this.selectedDate = value;
        // this.initView();
    }

    @Output() eventClick: EventEmitter<CalendarEvent> = new EventEmitter();
    @Output() changeToDayView: EventEmitter<Date> = new EventEmitter();

    protected subscriptions$: Subscription = new Subscription();

    options: CalendarOptions = new CalendarOptions();
    hoursOfDay = hoursOfDay;
    pixelsPerHour = 0;
    markerPosition = 0;
    markerSubscription: any;

    protected constructor(
        protected formattingService: FormattingService,
        protected iterableDiffers: IterableDiffers,
        protected keyValueDiffers: KeyValueDiffers
    ) {
        this.differEvents = iterableDiffers;
    }

    ngOnInit(): void {
        this.markerPosition = this.calculateMarkerPosition();

        this.subscriptions$.add(
            this.options$.pipe(
                tap((options) => {
                    this.options = options;
                    console.log('base', options);
                })
            ).subscribe()
        );

        this.subscriptions$.add(
            interval(60000).pipe(
                tap(() => {
                    this.markerPosition = this.calculateMarkerPosition();
                })
            ).subscribe()
        );
    }

    public createEventGroups(day: CalendarDay): CalendarDay {
        day.events.map((event: CalendarEvent) => {
            const uuid = uuidv4();
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

    public populateEvents(event: CalendarEvent, day: CalendarDay): CalendarEvent {
        const populatedEvent = new CalendarEvent({
            ...event,
            grid: this.calculatePixelsOffsetForEvent(event, day)
        });

        return populatedEvent;
    }

    private getOverlappingEvents(event: CalendarEvent, events: CalendarEvent[], eventGroups: string[]): CalendarEvent[] {
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

    private setEventSizes(day: CalendarDay): void {
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

    private calculatePixelsOffsetForEvent(event: CalendarEvent, day: CalendarDay): CalendarEventGrid {
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

    public getCellHeight(time: any): number {
        if (time.isEnd) {
            return 20;
        }

        return this.pixelsPerHour;
    }

    public calculateMarkerPosition(): number {
        const now = new Date();
        const offsetTop = (getHours(now) * 60 + getMinutes(now)) * this.options.getPixelsPerMinute;

        return offsetTop;
    }

    public isToday(date: Date): boolean {
        return this.formattingService.isToday(date);
    }

    public getDayName(date: Date): string {
        return this.formattingService.getDayName(date);
    }

    public getDayNumber(date: Date): string {
        return this.formattingService.getDayNumber(date);
    }

    public getTime(date: Date): string {
        return this.formattingService.getTime(date);
    }

    public onEventClick(event: CalendarEvent): void {
        this.eventClick.emit(event);
    }

    public navigateToDayView(date: Date): void {
        this.changeToDayView.emit(date);
    }

    ngOnDestroy(): void {
       this.subscriptions$.unsubscribe();
    }
}

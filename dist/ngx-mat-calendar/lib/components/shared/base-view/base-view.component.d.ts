import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { CalendarDay } from '../../../models/CalendarDay';
import { CalendarEvent } from '../../../models/CalendarEvent';
import { CalendarOptions } from '../../../models/CalendarOptions';
import { FormattingService } from '../../../services/formatting.service';
import { Observable, Subscription } from 'rxjs';
export declare abstract class BaseViewComponent implements OnInit, OnDestroy {
    protected formattingService: FormattingService;
    options$: Observable<CalendarOptions>;
    selectedDate$: Observable<Date>;
    events$: Observable<CalendarEvent[]>;
    eventClick: EventEmitter<CalendarEvent>;
    changeToDayView: EventEmitter<Date>;
    protected subscriptions$: Subscription;
    markerPosition: number;
    options: CalendarOptions;
    hoursOfDay: ({
        title: string;
        isEnd?: undefined;
    } | {
        title: string;
        isEnd: boolean;
    })[];
    pixelsPerHour: number;
    selectedDate: Date;
    events: CalendarEvent[];
    protected constructor(formattingService: FormattingService);
    ngOnInit(): void;
    protected createEventGroups(day: CalendarDay): CalendarDay;
    protected populateEvents(event: CalendarEvent, day: CalendarDay): CalendarEvent;
    private getOverlappingEvents;
    private setEventSizes;
    private calculatePixelsOffsetForEvent;
    getCellHeight(time: any): number;
    protected calculateMarkerPosition(): number;
    isToday(date: Date): boolean;
    getDayName(date: Date): string;
    getDayNumber(date: Date): string;
    getTime(date: Date): string;
    onEventClick(event: CalendarEvent): void;
    navigateToDayView(date: Date): void;
    protected sortByTime(a: CalendarEvent, b: CalendarEvent): number;
    protected sortByAllDay(event: CalendarEvent): number;
    protected isSameDay(date: Date, startTime: Date, endTime: Date): boolean;
    ngOnDestroy(): void;
}

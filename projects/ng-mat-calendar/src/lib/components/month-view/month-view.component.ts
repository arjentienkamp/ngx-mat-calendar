import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { add, eachWeekOfInterval, endOfMonth, getWeek, isSameDay, isSameMonth, startOfMonth, sub } from 'date-fns';
import { fromEvent, interval, Subject } from 'rxjs';
import { takeUntil, tap, throttle } from 'rxjs/operators';
import { CalendarDay, MonthView } from '../../models/Calendar';
import { CalendarEvent } from '../../models/CalendarEvent';
import { NEXT, PREVIOUS } from '../../models/Directions';
import { daysOfWeek } from '../../models/Times';
import { FormattingService } from '../../services/formatting.service';
import { BaseViewComponent } from '../shared/base-view/base-view.component';

@Component({
    selector: 'month-view',
    templateUrl: './month-view.component.html',
    styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent extends BaseViewComponent implements OnInit, OnDestroy {
    @Output() setCalendarOffset: EventEmitter<string> = new EventEmitter();

    monthView = {} as MonthView;
    daysOfWeek = daysOfWeek;
    calendarDayHeight = 0;
    weekNumbers: number[] = [];

    scrollListener = new Subject();
    scrollListener$ = this.scrollListener.asObservable();

    constructor(
        formattingService: FormattingService
    ) {
        super(formattingService);

        fromEvent(window, 'wheel')
            .pipe(
                takeUntil(this.scrollListener$),
                throttle(e => interval(1000))
            )
            .subscribe((e: any) => this.handleScroll(e));
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.generateView();

        this.subscriptions$.add(
            this.events$.pipe(
                tap(events => {
                    this.events = events;
                    this.generateView();
                })
            ).subscribe()
        );
    }

    generateView(): void {
        if (this.selectedDate) {
            this.monthView = {
                days: [],
            };

            const emptyDays = this.generateDays();
            this.populateMonthView(emptyDays);
            this.getWeekNumbers();
        }
    }

    getWeekNumbers(): void {
        const weeksOfMonth = eachWeekOfInterval({
            start: startOfMonth(this.selectedDate),
            end: endOfMonth(this.selectedDate)
        });

        this.weekNumbers = [];
        weeksOfMonth.forEach(week => {
            this.weekNumbers.push(getWeek(week, { weekStartsOn: 1 }));
        });
    }

    populateMonthView(emptyDays: CalendarDay[]): void {
        const populatedDays: CalendarDay[] = emptyDays;

        populatedDays.forEach(day => {
            day.events = this.events.filter((event: CalendarEvent) => {
                return this.isSameDay(day.date, event.startTime, event.endTime);
            }).map((event: CalendarEvent) => {
                return this.populateEvents(event, day);
            }).sort((a: CalendarEvent, b: CalendarEvent) => {
                return this.sortByTime(a, b);
            }).sort(event => {
                return this.sortByAllDay(event);
            });

            day = this.createEventGroups(day);
        });

        this.monthView.days = populatedDays;
    }

    generateDays(): CalendarDay[] {
        const dayOfWeek = add(startOfMonth(this.selectedDate), { days: 7 }).getDay();
        const selectedMonthStart = sub(startOfMonth(this.selectedDate), { days: dayOfWeek - 1 });
        const days = [];

        for (let i = 0; i < 35; i++) {
            let date = new Date(selectedMonthStart);
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

    isCurrentMonth(date: Date): boolean {
        return isSameMonth(date, this.selectedDate);
    }

    handleScroll(e: WheelEvent): void {
        e.deltaY > 0 ? this.setCalendarOffset.emit(NEXT) : this.setCalendarOffset.emit(PREVIOUS);
    }

    ngOnDestroy(): void {
        this.scrollListener.next();
    }
}

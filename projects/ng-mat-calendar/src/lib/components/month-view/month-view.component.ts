import { Component, OnInit } from '@angular/core';
import { add, eachWeekOfInterval, endOfMonth, getWeek, isSameDay, isSameMonth, startOfMonth, startOfWeek, sub, subWeeks } from 'date-fns';
import { tap } from 'rxjs/operators';
import { CalendarDay, MonthView } from '../../models/Calendar';
import { CalendarEvent } from '../../models/CalendarEvent';
import { daysOfWeek } from '../../models/Times';
import { FormattingService } from '../../services/formatting.service';
import { BaseViewComponent } from '../shared/base-view/base-view.component';

@Component({
    selector: 'month-view',
    templateUrl: './month-view.component.html',
    styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent extends BaseViewComponent implements OnInit {
    monthView = {} as MonthView;
    daysOfWeek = daysOfWeek;
    calendarDayHeight = 0;
    weekNumbers: number[] = [];

    constructor(
        formattingService: FormattingService
    ) {
        super(formattingService);
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
                return isSameDay(new Date(day.date), new Date(event.startTime)) ||
                    isSameDay(new Date(day.date), new Date(event.endTime));
            }).map((event: CalendarEvent) => {
                return this.populateEvents(event, day);
            }).sort((a: CalendarEvent, b: CalendarEvent) => {
                return a.startTime.getTime() - b.startTime.getTime();
            }).sort(event => {
                return event.allDay ? -1 : 1;
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
}

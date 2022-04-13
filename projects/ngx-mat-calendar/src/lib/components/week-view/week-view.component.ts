import { Component, OnInit } from '@angular/core';
import { add, startOfWeek } from 'date-fns';
import { ViewBaseComponent } from '../shared/view-base/view-base.component';
import { WeekView } from '../../models/Calendar';
import { CalendarEvent } from '../../models/CalendarEvent';
import { FormattingService } from '../../services/formatting.service';
import { tap } from 'rxjs/operators';
import { CalendarDay } from '../../models/CalendarDay';

@Component({
    selector: 'week-view',
    templateUrl: './week-view.component.html',
    styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent extends ViewBaseComponent implements OnInit {
    weekView = {} as WeekView;

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
            const emptyDays = this.generateDays();
            this.populateWeekView(emptyDays);
        }
    }

    populateWeekView(emptyDays: CalendarDay[]): void {
        const populatedDays: CalendarDay[] = emptyDays;

        populatedDays.forEach(day => {
            day.events = this.events.filter((event: CalendarEvent) => {
                return this.isSameDay(day.date, event.startTime, event.endTime);
            }).map((event: CalendarEvent) => {
                return this.populateEvents(event, day);
            }).sort((a: CalendarEvent, b: CalendarEvent) => {
                return this.sortByTime(a, b);
            });

            day = this.createEventGroups(day);
        });

        this.weekView.days = populatedDays;
    }

    generateDays(): CalendarDay[] {
        const selectedWeekStart = startOfWeek(this.selectedDate, { weekStartsOn: 1 });
        const days = [];

        for (let i = 0; i < 7; i++) {
            let date = new Date(selectedWeekStart);
            date = add(date, { days: i });

            const day = new CalendarDay({
                date,
                eventGroups: [],
                events: []
            });

            days.push(day);
        }

        return days;
    }
}

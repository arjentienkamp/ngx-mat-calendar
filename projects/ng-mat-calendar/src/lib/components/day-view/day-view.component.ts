import { Component, OnInit } from '@angular/core';
import { BaseViewComponent } from '../shared/base-view/base-view.component';
import { DayView } from '../../models/Calendar';
import { CalendarEvent } from '../../models/CalendarEvent';
import { FormattingService } from '../../services/formatting.service';
import { tap } from 'rxjs/operators';
import { CalendarDay } from '../../models/CalendarDay';

@Component({
    selector: 'day-view',
    templateUrl: './day-view.component.html',
    styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent extends BaseViewComponent implements OnInit {
    dayView = {} as DayView;

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
            const date = new Date(this.selectedDate);

            this.dayView = new CalendarDay({
                date,
                eventGroups: [],
                events: [],
            });

            const emptyDay = this.generateDays();
            this.populateDayView(emptyDay);
        }
    }

    populateDayView(emptyDay: CalendarDay): void {
        const populatedDay: CalendarDay = emptyDay;

        const events = this.events.filter((event: CalendarEvent) => {
            return this.isSameDay(populatedDay.date, event.startTime, event.endTime);
            }).map((event: CalendarEvent) => {
                return this.populateEvents(event, populatedDay);
            }).sort((a: CalendarEvent, b: CalendarEvent) => {
                return this.sortByTime(a, b);
            });

        populatedDay.events = events;

        this.dayView = this.createEventGroups(populatedDay);
    }

    generateDays(): CalendarDay {
        const date = new Date(this.selectedDate);

        const day: CalendarDay = new CalendarDay({
            date,
            eventGroups: [],
            events: [],
            eventCount: 0
        });

        return day;
    }
}

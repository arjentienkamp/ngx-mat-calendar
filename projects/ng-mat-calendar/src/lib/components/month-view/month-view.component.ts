import {
    Component,
    DoCheck,
    IterableDiffers,
    KeyValueDiffers,
    OnInit
} from '@angular/core';

import {
    add,
    isSameDay,
    isSameMonth,
    startOfMonth,
    sub
} from 'date-fns';
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

    constructor(
        formattingService: FormattingService
    ) {
        super(formattingService);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.initView();

        this.subscriptions$.add(
            this.events$.pipe(
                tap(events => {
                    this.events = events;
                    this.generateView();
                })
            ).subscribe()
        );
    }

    initView(): void {
        if (this.options && this.events) {
            this.generateView();
        }
    }

    generateView(): void {
        if (this.selectedDate) {
            this.monthView = {
                days: [],
            };

            const emptyDays = this.generateDays();
            this.populateMonthView(emptyDays);
        }
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

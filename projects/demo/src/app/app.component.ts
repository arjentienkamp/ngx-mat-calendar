import { Component, OnInit } from '@angular/core';
import { add } from 'date-fns';
import { CalendarEvent } from 'projects/ng-mat-calendar/src/lib/models/CalendarEvent';
import { CalendarOptions } from 'projects/ng-mat-calendar/src/lib/models/CalendarOptions';
import { Views } from 'projects/ng-mat-calendar/src/lib/models/Views';
import { EventRenderTestComponent } from './component/event-render-test/event-render-test.component';
import { EventService } from './services/event.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    events: CalendarEvent[] = [];
    calendarOptions!: CalendarOptions;
    date = new Date();
    compact = false;

    constructor(
        private eventService: EventService
    ) {}

    ngOnInit(): void {
        this.initCalendar();
    }

    initCalendar(): void {
        this.calendarOptions = new CalendarOptions({
            compact: this.compact,
            // locale: 'es',
            // pixelsPerMinute: 2,
            // enableDatePickerButton: false,
            // enableTooltip: false,
            // renderComponent: EventRenderTestComponent,
            // view: Views.month
        });

        this.getEvents(this.date);
        console.log(this.calendarOptions);
    }

    getEvents(date: Date): void {
        this.eventService.getEvents(date).subscribe((events: CalendarEvent[]) => {
            this.events = events;
        });
    }

    changeDateFromParent(): void {
        this.date = add(this.date, { days: 25});
    }

    onCompactChange(): void {
        this.compact = !this.compact;
        this.initCalendar();
    }

    handleDateChange(): void {
        this.getEvents(this.date);
    }

    handleEventClick(event: CalendarEvent): void {
        console.log(event);
    }
}

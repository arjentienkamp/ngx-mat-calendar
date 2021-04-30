import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarEvent } from 'projects/ng-mat-calendar/src/lib/models/Calendar';
import { CalendarOptions } from 'projects/ng-mat-calendar/src/lib/models/CalendarOptions';
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

    constructor(
        private eventService: EventService
    ) {}

    ngOnInit(): void {
        this.calendarOptions = new CalendarOptions({
            // locale: 'es',
            // pixelsPerMinute: 2,
            // enableDatePickerButton: false,
            // enableTooltip: false,
            // renderComponent: EventRenderTestComponent
        });

        this.getEvents(this.date);

        console.log(this.calendarOptions);
    }

    getEvents(date: Date): void {
        this.eventService.getEvents(date).subscribe((events: CalendarEvent[]) => {
            this.events = events;

            console.log(events);
        });
    }

    handleDateChange(): void {
        this.getEvents(this.date);
    }

    handleEventClick(event: CalendarEvent): void {
        console.log(event);
    }
}

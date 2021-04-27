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
    date = moment().add(0, 'days').format();

    constructor(
        private eventService: EventService
    )
    {
        this.eventService.getEvents().subscribe((events: CalendarEvent[]) => {
            this.events = events;
        });
    }

    ngOnInit(): void {
        this.calendarOptions = new CalendarOptions({
            // locale: 'es',
            // pixelsPerMinute: 2,
            // showSettings: false,
            // enableTooltip: false,
            // renderComponent: EventRenderTestComponent
        });

        console.log(this.calendarOptions);
    }

    handleEventClick(event: CalendarEvent): void {
        console.log(event);
    }
}

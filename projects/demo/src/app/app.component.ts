import { Component } from '@angular/core';
import * as moment from 'moment';
import { CalendarEvent } from 'projects/ng-mat-calendar/src/lib/models/Calendar';
import { CalendarOptions } from 'projects/ng-mat-calendar/src/lib/models/CalendarOptions';
import { EventService } from './services/event.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    events: CalendarEvent[] = [];
    calendarOptions: CalendarOptions;
    date = moment().add(0, 'days').format();

    constructor(
        private eventService: EventService
    )
    {
        this.eventService.getEvents().subscribe((events: CalendarEvent[]) => {
            this.events = events;
        });

        this.calendarOptions = new CalendarOptions();

        // this.calendarOptions = new CalendarOptions({
        //     pixelsPerMinute: 5,
        //     showSettings: false,
        //     // renderComponent: EventRenderTestComponent
        // });
    }
}

import { Component, OnInit } from '@angular/core';
import { add } from 'date-fns';
import { CalendarEvent } from 'projects/ng-mat-calendar/src/lib/models/CalendarEvent';
import { CalendarOptions } from 'projects/ng-mat-calendar/src/lib/models/CalendarOptions';
import { Views } from 'projects/ng-mat-calendar/src/lib/models/Views';
import { Observable, Subject } from 'rxjs';
import { EventRenderTestComponent } from './component/event-render-test/event-render-test.component';
import { EventService } from './services/event.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    events$ = new Subject<CalendarEvent[]>();
    calendarOptions$ = new Subject<CalendarOptions>();
    date = new Date();
    compact = false;
    addButton = true;

    constructor(
        private eventService: EventService
    ) {}

    ngOnInit(): void {
        this.initCalendar();
    }

    initCalendar(): void {
        const calendarOptions = new CalendarOptions({
            compact: this.compact,
            enableAddEventButton: this.addButton,
            // locale: 'es',
            // pixelsPerMinute: 2,
            // enableDatePickerButton: false,
            // enableTooltip: false,
            // renderComponent: EventRenderTestComponent,
            // view: Views.month
        });

        setTimeout(() => {
            this.calendarOptions$.next(calendarOptions);
        }, 100);

        this.getEvents(this.date);
    }

    getEvents(date: Date): void {
        this.eventService.getEvents(date).subscribe((events: CalendarEvent[]) => {
            setTimeout(() => {
                this.events$.next(events);
            }, 100);
        });
    }

    changeDateFromParent(): void {
        this.date = add(this.date, { days: 25});
    }

    onCompactChange(): void {
        this.compact = !this.compact;
        this.initCalendar();
    }

    onAddButtonChange(): void {
        this.addButton = !this.addButton;
        this.initCalendar();
    }

    handleDateChange(): void {
        this.getEvents(this.date);
    }

    handleEventClick(event: CalendarEvent): void {
        console.log(event);
    }

    handleAddButtonClick(): void {
        console.log('Add button clicked!');
    }
}

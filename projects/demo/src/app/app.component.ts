import { Component, OnDestroy, OnInit } from '@angular/core';
import { add } from 'date-fns';
import { CalendarEvent } from 'projects/ng-mat-calendar/src/lib/models/CalendarEvent';
import { CalendarOptions } from 'projects/ng-mat-calendar/src/lib/models/CalendarOptions';
import { WEEK } from 'projects/ng-mat-calendar/src/lib/models/Views';
import { BehaviorSubject, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
// import { EventRenderTestComponent } from './component/event-render-test/event-render-test.component';
import { EventService } from './services/event.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    events$: BehaviorSubject<CalendarEvent[]> = new BehaviorSubject<CalendarEvent[]>([]);
    calendarOptions$: BehaviorSubject<CalendarOptions> = new BehaviorSubject<CalendarOptions>(new CalendarOptions());
    date$: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());
    date = new Date();
    compact = false;
    addButton = true;
    viewToggle = true;
    enableDatePickerButton = true;
    subscriptions: Subscription = new Subscription();

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
            enableViewToggle: this.viewToggle,
            enableDatePickerButton: this.enableDatePickerButton,
            // enableKeyboardShortcutDialog: false,
            // locale: 'es',
            // pixelsPerMinute: 2,
            // enableDatePickerButton: false,
            // enableTooltip: false,
            // renderComponent: EventRenderTestComponent,
            // view: WEEK
        });

        this.calendarOptions$.next(calendarOptions);
        this.date$.next(this.date);

        this.subscriptions.add(
            this.date$.pipe(
                // switchMap((date) => this.eventService.getEvents(date)),
                switchMap((date) => this.eventService.getEventsFromMockService()),
                tap((events) => this.events$.next(events))
            ).subscribe()
        );
    }

    changeDateFromParent(): void {
        this.date$.next(add(this.date, { days: 25 }));
    }

    onCompactChange(): void {
        this.compact = !this.compact;
        this.initCalendar();
    }

    onAddButtonChange(): void {
        this.addButton = !this.addButton;
        this.initCalendar();
    }

    onViewToggleChange(): void {
        this.viewToggle = !this.viewToggle;
        this.initCalendar();
    }

    onDatePickerButtonChange(): void {
        this.enableDatePickerButton = !this.enableDatePickerButton;
        this.initCalendar();
    }

    handleDateChange(date: Date): void {
        // make sure the date service is not random for the preferred effect
        this.date$.next(date);
    }

    handleEventClick(event: CalendarEvent): void {
        console.log(event);
    }

    handleAddButtonClick(): void {
        console.log('Add button clicked!');
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}

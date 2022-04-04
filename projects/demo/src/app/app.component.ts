import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { add } from 'date-fns';
import { CalendarEvent } from 'projects/ngx-mat-calendar/src/lib/models/CalendarEvent';
import { CalendarOptions } from 'projects/ngx-mat-calendar/src/lib/models/CalendarOptions';
import { Themes } from './models/Themes';
import { EventService } from './services/event.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    events: CalendarEvent[];
    calendarOptions = new CalendarOptions();
    date = new Date();

    selectedTheme: Themes = 'theme-blue-grey';
    compact = false;
    addButton = true;
    viewToggle = true;
    enableDatePickerButton = true;

    constructor(
        private eventService: EventService,
        private renderer: Renderer2
    ) {}

    ngOnInit(): void {
        this.initCalendar();
    }

    initCalendar(): void {
        this.calendarOptions = new CalendarOptions({
            compact: this.compact,
            enableAddEventButton: this.addButton,
            enableViewToggle: this.viewToggle,
            enableDatePickerButton: this.enableDatePickerButton
        });

        this.getEvents(this.date);
    }

    getEvents(date: Date): void {
        this.eventService.getEvents(date).subscribe(events => {
            this.events = events;
        });
    }

    changeDateFromParent(): void {
        this.date = add(this.date, { months: 1 });
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

    onThemeChange(theme: Themes): void {
        if (this.selectedTheme) {
            this.renderer.removeClass(document.body, this.selectedTheme);
        }

        this.renderer.addClass(document.body, theme);
        this.selectedTheme = theme;
    }

    handleDateChange(date: Date): void {
        this.date = date;
        this.getEvents(date); console.log(date)
    }

    handleEventClick(event: CalendarEvent): void {
        console.log(event);
    }

    handleAddButtonClick(): void {
        console.log('Add button clicked!');
    }
}

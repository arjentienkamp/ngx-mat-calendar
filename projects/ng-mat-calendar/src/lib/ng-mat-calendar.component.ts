import {
    Component,
    DoCheck,
    EventEmitter,
    Input,
    IterableDiffers,
    OnInit,
    Output,
} from '@angular/core';

import {
    format,
    add,
    isSameDay,
    startOfWeek,
    isToday,
    endOfDay,
    intervalToDuration,
    getHours,
    getMinutes,
    toDate
} from 'date-fns';

import { FormBuilder, FormGroup } from '@angular/forms';
import Calendar, { CalendarDay, CalendarEvent, CalendarEventOffset } from './models/Calendar';
import { Times } from './models/Times';
import { CalendarOptions } from './models/CalendarOptions';
import { FormattingService } from './services/formatting.service';
import { DateAdapter } from '@angular/material/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ng-mat-calendar',
    templateUrl: './ng-mat-calendar.component.html',
    styleUrls: ['./ng-mat-calendar.component.scss']
})
export class NgMatCalendarComponent implements OnInit, DoCheck {
    @Input() events: CalendarEvent[] = [];
    private differ: IterableDiffers;

    private setOptions!: CalendarOptions;
    @Input() get options(): CalendarOptions {
        return this.setOptions;
    }
    set options(value: CalendarOptions) {
        this.setOptions = value;
    }

    private selectedDate!: Date;
    @Input() get date(): Date {
        return new Date(this.selectedDate);
    }
    set date(value: Date) {
        this.selectedDate = new Date(value);
        this.dateChange.emit(this.selectedDate);
    }
    @Output() dateChange: EventEmitter<Date> = new EventEmitter();
    @Output() eventClick: EventEmitter<CalendarEvent> = new EventEmitter();

    times = Times;
    pixelsPerHour = 0;
    enableDatePickerButton!: boolean;
    showDatePicker = false;
    dateFormat!: string;
    datePickerForm: FormGroup;
    calendar = {} as Calendar;
    iterableDiffer = [];

    constructor(
        private formattingService: FormattingService,
        private formBuilder: FormBuilder,
        private dateAdapter: DateAdapter<Date>,
        private iterableDiffers: IterableDiffers
    ) {
        this.datePickerForm = this.formBuilder.group({
            date: [''],
        });

        this.differ = iterableDiffers;
    }

    ngOnInit(): void {
        if (this.setOptions && this.events) {
            this.pixelsPerHour = this.setOptions.pixelsPerMinute * 60;
            this.enableDatePickerButton = this.setOptions.enableDatePickerButton;
            this.dateFormat = this.setOptions.dateFormat;

            this.dateAdapter.setLocale(this.setOptions.locale);

            this.generateCalendarView();
            this.handleDatepickerChanges();
        }
    }

    ngDoCheck(): void {
        const changes = this.differ.find(this.events);

        if (changes) {
            this.generateCalendarView();
        }
    }

    generateCalendarView(): void {
        if (this.selectedDate) {
            this.calendar = {
                days: [],
                monthAndYear: format(this.selectedDate, 'MMMM yyyy'),
                weeknumber: format(this.selectedDate, 'I')
            };

            const emptyDays = this.generateDays();
            this.populateDays(emptyDays);

            console.log(this.calendar);
        }
    }

    populateDays(emptyDays: any): void {
        const populatedDays: CalendarDay[] = emptyDays;

        populatedDays.forEach(day => {
            day.events = this.events.filter((event: CalendarEvent) => {
                return isSameDay(new Date(day.date), new Date(event.startTime)) ||
                    isSameDay(new Date(day.date), new Date(event.endTime));
            }).map((event: CalendarEvent) => {
                return this.populateEvents(event, day);
            });
        });

        this.calendar.days = populatedDays;
    }

    populateEvents(event: CalendarEvent, day: CalendarDay): CalendarEvent {
        const populatedEvent = {
            ...event,
            offset: this.calculatePixelsOffsetForEvent(event, day)
        };

        return populatedEvent;
    }

    getNextDayKey(eventsGroupedByDate: any, key: string): string {
        const keys = Object.keys(eventsGroupedByDate).sort();
        const index = keys.indexOf(key);

        return keys[index + 1];
    }

    getPreviousEvent(eventsGroupedByDate: any[], index: number): any {
        if (eventsGroupedByDate[index - 1] !== undefined) {
            return eventsGroupedByDate[index - 1];
        }
    }

    generateDays(): CalendarDay[] {
        const selectedWeekStart = startOfWeek(this.selectedDate, { weekStartsOn: 1});
        const days = [];

        for (let i = 0; i < 7; i++) {
            let date = new Date(selectedWeekStart);
            date = add(date, { days: i });

            const day: CalendarDay = {
                date,
                events: []
            };

            days.push(day);
        }

        return days;
    }

    calculatePixelsOffsetForEvent(event: CalendarEvent, day: CalendarDay): CalendarEventOffset {
        let offset: CalendarEventOffset = { offsetTop: 0, durationOffset: 0 };

        const startTime = event.startTime;
        const endTime = isSameDay(event.startTime, event.endTime) ?
            event.endTime :
            endOfDay(event.startTime);

        const eventDuration = intervalToDuration({
            start: startTime,
            end: endTime
        });

        eventDuration.hours = eventDuration.hours || 0;
        eventDuration.minutes = eventDuration.minutes || 0;

        const offsetInMinutes = !isSameDay(event.startTime, event.endTime) && isSameDay(event.endTime, day.date) ?
            0 : Math.abs(getHours(startTime)) * 60 + getMinutes(startTime);

        offset =  {
            offsetTop: offsetInMinutes * this.options.pixelsPerMinute,
            durationOffset: (eventDuration.hours * 60 + eventDuration.minutes) * this.options.pixelsPerMinute
        };

        return offset;
    }

    calculateGrid(): any {
        const grid = {
            height: 24 * this.pixelsPerHour
        };

        return grid;
    }

    calculateSpy(): any {
        const now = new Date();

        return (getHours(now) * 60 + getMinutes(now)) * this.options.pixelsPerMinute;
    }

    isToday(date: Date): boolean {
        return isToday(date);
    }

    setCalendarToday(): void {
        this.selectedDate = new Date();
        this.generateCalendarView();
        this.dateChange.emit(this.selectedDate);
        this.showDatePicker = false;
    }

    setCalendar(offset?: number, date?: Date): void {
        if (offset) {
            this.selectedDate = add(this.selectedDate, { days: offset });
        } else {
            this.selectedDate = date || new Date();
        }

        this.generateCalendarView();
        this.dateChange.emit(this.selectedDate);
        this.showDatePicker = false;
    }

    getDayName(date: Date): string {
        return format(date, 'E');
    }

    getDayNumber(date: Date): string {
        return format(date, 'd');
    }

    getTime(date: Date): string {
        return this.formattingService.getTime(date);
    }

    onEventClick(event: CalendarEvent): void {
        this.eventClick.emit(event);
    }

    toggleDatepicker(): void {
        this.showDatePicker = !this.showDatePicker;
    }

    handleDatepickerChanges(): void {
        const date = this.datePickerForm.get('date');

        date?.valueChanges.subscribe((dateValue) => {
            this.setCalendar(undefined, toDate(dateValue));
        });
    }
}

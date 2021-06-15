import {
    Component,
    DoCheck,
    EventEmitter,
    HostListener,
    Input,
    KeyValueDiffer,
    KeyValueDiffers,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';

import {
    format,
    add,
    isToday,
    toDate,
} from 'date-fns';

import { DateAdapter } from '@angular/material/core';
import { MatMenuTrigger } from '@angular/material/menu';

import Calendar from './models/Calendar';
import { CalendarOptions } from './models/CalendarOptions';
import { CalendarEvent } from './models/CalendarEvent';

import { Views } from './models/Views';
import { Periods } from './models/Times';

@Component({
    selector: 'ng-mat-calendar',
    templateUrl: './ng-mat-calendar.component.html',
    styleUrls: ['./ng-mat-calendar.component.scss']
})
export class NgMatCalendarComponent implements OnInit, DoCheck {
    @Input() events: CalendarEvent[] = [];

    @Input() options: CalendarOptions = new CalendarOptions();
    private differOptions: KeyValueDiffer<any, any>;

    public selectedDate!: Date;
    @Input() get date(): Date {
        return this.selectedDate;
    }
    set date(value: Date) {
        this.selectedDate = value;
        this.initCalendar();
        this.dateChange.emit(this.selectedDate);
    }

    @Output() dateChange: EventEmitter<Date> = new EventEmitter();
    @Output() eventClick: EventEmitter<CalendarEvent> = new EventEmitter();

    @ViewChild(MatMenuTrigger) datePickerMenu!: MatMenuTrigger;

    differ: any;
    views = Views;
    selectedView = this.options.view;
    enableDatePickerButton!: boolean;
    calendar = {} as Calendar;
    today = format(new Date(), 'EEEE, d MMMM');

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        this.handleKeyboardEvents(event);
    }

    constructor(
        private dateAdapter: DateAdapter<Date>,
        private keyValueDiffers: KeyValueDiffers
    ) {
        this.differOptions = keyValueDiffers.find(CalendarOptions).create();
    }

    ngOnInit(): void {
        this.initCalendar();
    }

    ngDoCheck(): void {
        const optionsChanges = this.differOptions.diff(this.options);

        if (optionsChanges) {
            this.initCalendar();
        }
    }

    initCalendar(): void {
        if (this.options && this.events) {
            this.enableDatePickerButton = this.options.enableDatePickerButton;

            this.dateAdapter.setLocale(this.options.locale);

            this.generateCalendar();
        }
    }

    generateCalendar(): void {
        if (this.selectedDate) {
            this.calendar = { // @TODO: new class instance
                monthAndYear: format(this.selectedDate, 'MMMM yyyy'),
                weeknumber: format(this.selectedDate, 'I')
            };
        }
    }

    isToday(date: Date): boolean {
        return isToday(date);
    }

    setCalendarToday(): void {
        this.selectedDate = new Date();
        this.handleCalendarSet();
    }

    setCalendarOffset(direction: string): void {
        const offset = Periods[this.selectedView];

        this.selectedDate = add(this.selectedDate, {
            [offset]: direction === 'prev' ? -1 : 1
        });

        this.handleCalendarSet();
    }

    setCalendar(date: Date): void {
        if (date) {
            this.selectedDate = date;
            this.handleCalendarSet();
        }
    }

    handleCalendarSet(): void {
        this.generateCalendar();
        this.dateChange.emit(this.selectedDate);
    }

    onViewChange(view: any): void {
        this.selectedView = view;
    }

    onEventClick(event: CalendarEvent): void {
        this.eventClick.emit(event);
    }

    onDatePickerChange(date: any): void {
        this.setCalendar(toDate(date));
        this.datePickerMenu.closeMenu();
    }

    handleKeyboardEvents(event: KeyboardEvent): void {
        switch (event.key) {
            case 'd':
                this.selectedView = Views.day;
                break;

            case 'w':
                this.selectedView = Views.week;
                break;

            case 'm':
                this.selectedView = Views.month;
                break;

            case 't':
                this.setCalendarToday();
                break;

            default:
                break;
        }
    }
}

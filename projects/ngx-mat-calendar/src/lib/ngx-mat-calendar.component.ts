import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { format, add, isToday, toDate } from 'date-fns';
import { DateAdapter } from '@angular/material/core';
import { MatMenuTrigger } from '@angular/material/menu';
import Calendar from './models/Calendar';
import { CalendarOptions } from './models/CalendarOptions';
import { CalendarEvent } from './models/CalendarEvent';
import { DAY, WEEK, MONTH, Views } from './models/Views';
import { Periods } from './models/Times';
import { BehaviorSubject } from 'rxjs';
import { PREVIOUS } from './models/Directions';
import { MatDialog } from '@angular/material/dialog';
import { KeyboardShortcutDialogComponent } from './components/dialogs/keyboard-shortcut-dialog/keyboard-shortcut-dialog.component';
import { colors } from './models/Colors';

@Component({
    selector: 'ngx-mat-calendar',
    templateUrl: './ngx-mat-calendar.component.html',
    styleUrls: ['./ngx-mat-calendar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NgxMatCalendarComponent implements OnInit {
    options$ = new BehaviorSubject<CalendarOptions>(new CalendarOptions());
    events$ = new BehaviorSubject<CalendarEvent[]>([]);
    selectedDate$ = new BehaviorSubject<Date>(new Date());

    @Input()
    set options(value: CalendarOptions) {
        this.selectedView = value.view;
        this.initCalendar();
        this.options$.next(value);
    }

    get options(): CalendarOptions {
        return this.options$.getValue();
    }

    @Input()
    set events(value: CalendarEvent[]) {
        this.parseEvents(value);
    }

    get events(): CalendarEvent[] {
        return this.events$.getValue();
    }

    @Input()
    set selectedDate(value: Date) {
        this.initCalendar();

        if (this.selectedDate$.getValue() !== value) {
            this.dateChange.emit(value);
        }

        this.selectedDate$.next(value);
    }

    get selectedDate(): Date {
        return this.selectedDate$.getValue();
    }

    @Output() dateChange: EventEmitter<Date> = new EventEmitter();
    @Output() eventClick: EventEmitter<CalendarEvent> = new EventEmitter();
    @Output() addButtonClick: EventEmitter<any> = new EventEmitter();

    @ViewChild(MatMenuTrigger) datePickerMenu: MatMenuTrigger;

    differ: any;
    views: Views;
    selectedView: Views;
    enableDatePickerButton: boolean;
    enableViewToggle: boolean;
    enableKeyboardShortcutDialog: boolean;
    calendar = {} as Calendar;
    today = format(new Date(), 'EEEE, d MMMM');

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        this.handleKeyboardEvents(event);
    }

    constructor(
        private dateAdapter: DateAdapter<Date>,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {}

    initCalendar(): void {
        if (this.options) {
            this.enableDatePickerButton = this.options.enableDatePickerButton;
            this.enableViewToggle = this.options.enableViewToggle;
            this.enableKeyboardShortcutDialog = this.options.enableKeyboardShortcutDialog;
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

    parseEvents(events: CalendarEvent[]): void {
        this.events$.next(events.map((event: CalendarEvent) => {
             event.date = new Date(event.date);
             event.startTime = new Date(event.startTime);
             event.endTime = new Date(event.endTime);
             event.color = event.color || colors.grey;

             return event;
        }));
    }

    isToday(date: Date): boolean {
        return isToday(date);
    }

    setCalendarToday(): void {
        this.selectedDate = new Date();
        this.selectedDate$.next(this.selectedDate);
        this.handleCalendarSet();
    }

    setCalendarOffset(direction: string): void {
        const offset = Periods[this.selectedView];

        this.selectedDate = add(this.selectedDate, {
            [offset]: direction === PREVIOUS ? -1 : 1
        });

        this.selectedDate$.next(this.selectedDate);
        this.handleCalendarSet();
    }

    setCalendar(date: Date): void {
        if (date) {
            this.selectedDate = date;
            this.selectedDate$.next(date);
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

    changeToDayView(date: Date): void {
        this.selectedView = DAY;
        this.setCalendar(date);
    }

    getSelectedView(view: Views): boolean {
        return this.selectedView === view;
    }

    onEventClick(event: CalendarEvent): void {
        this.eventClick.emit(event);
    }

    onAddButtonClick(): void {
        this.addButtonClick.emit();
    }

    onDatePickerChange(date: any): void {
        this.setCalendar(toDate(date));
        this.datePickerMenu.closeMenu();
    }

    showKeyboardShortcutDialog(): void {
        const dialogRef = this.dialog.open(KeyboardShortcutDialogComponent, {
            data: this.options
        });
    }

    handleKeyboardEvents(event: KeyboardEvent): void {
        switch (event.key) {
            case 'd':
                this.selectedView = DAY;
                break;

            case 'w':
                this.selectedView = WEEK;
                break;

            case 'm':
                this.selectedView = MONTH;
                break;

            case 't':
                this.setCalendarToday();
                break;

            case 'n':
                this.addButtonClick.emit();
                break;

            default:
                break;
        }
    }
}

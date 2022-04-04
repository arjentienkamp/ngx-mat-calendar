import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { format, add, isToday, toDate } from 'date-fns';
import { DateAdapter } from '@angular/material/core';
import { MatMenuTrigger } from '@angular/material/menu';
import Calendar from './models/Calendar';
import { CalendarOptions } from './models/CalendarOptions';
import { CalendarEvent } from './models/CalendarEvent';
import { DAY, WEEK, MONTH, Views } from './models/Views';
import { Periods } from './models/Times';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
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
export class NgxMatCalendarComponent implements OnInit, OnDestroy {
    options$ = new BehaviorSubject<CalendarOptions>(new CalendarOptions());
    events$ = new BehaviorSubject<CalendarEvent[]>([]);
    selectedDate$ = new BehaviorSubject<Date>(new Date());

    @Input()
    set options(options: CalendarOptions) {
        this.selectedView = options.view;
        this.dateAdapter.setLocale(options.locale);
        this.options$.next(options);
    }

    get options(): CalendarOptions {
        return this.options$.getValue();
    }

    @Input()
    set events(events: CalendarEvent[]) {
        this.parseEvents(events);
    }

    get events(): CalendarEvent[] {
        return this.events$.getValue();
    }

    @Input()
    set selectedDate(selectedDate: Date) {
        this.generateCalendar(selectedDate);
        this.selectedDate$.next(selectedDate);
    }

    get selectedDate(): Date {
        return this.selectedDate$.getValue();
    }

    @Output() dateChange: EventEmitter<Date> = new EventEmitter();
    @Output() eventClick: EventEmitter<CalendarEvent> = new EventEmitter();
    @Output() addButtonClick: EventEmitter<any> = new EventEmitter();

    @ViewChild(MatMenuTrigger) datePickerMenu: MatMenuTrigger;

    views: Views;
    selectedView: Views;
    calendar = {} as Calendar;
    today = format(new Date(), 'EEEE, d MMMM');

    private subscriptions$ = new Subscription();

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        this.handleKeyboardEvents(event);
    }

    constructor(
        private dateAdapter: DateAdapter<Date>,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.subscriptions$.add(
            this.selectedDate$.pipe(
                tap((selectedDate) => {
                    this.generateCalendar(selectedDate);
                    this.dateChange.emit(selectedDate);
                })
            ).subscribe()
        );
    }

    generateCalendar(selectedDate: Date): void {
        if (selectedDate) {
            this.calendar = {
                monthAndYear: format(selectedDate, 'MMMM yyyy'),
                weeknumber: format(selectedDate, 'I')
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
        this.selectedDate$.next(new Date());
    }

    setCalendarOffset(direction: string): void {
        const offset = Periods[this.selectedView];

        this.selectedDate$.next(add(this.selectedDate$.getValue(), {
            [offset]: direction === PREVIOUS ? -1 : 1
        }));
    }

    setCalendar(date: Date): void {
        this.selectedDate$.next(date);
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

    ngOnDestroy(): void {
        this.subscriptions$.unsubscribe();
    }
}

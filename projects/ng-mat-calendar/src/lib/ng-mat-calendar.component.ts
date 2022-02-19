import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { format, add, isToday, toDate } from 'date-fns';
import { DateAdapter } from '@angular/material/core';
import { MatMenuTrigger } from '@angular/material/menu';
import Calendar from './models/Calendar';
import { CalendarOptions } from './models/CalendarOptions';
import { CalendarEvent } from './models/CalendarEvent';
import { DAY, WEEK, MONTH, Views } from './models/Views';
import { Periods } from './models/Times';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PREVIOUS } from './models/Directions';

@Component({
    selector: 'ng-mat-calendar',
    templateUrl: './ng-mat-calendar.component.html',
    styleUrls: ['./ng-mat-calendar.component.scss']
})
export class NgMatCalendarComponent implements OnInit, OnDestroy {
    @Input() options$: Observable<CalendarOptions>;
    @Input() events$: Observable<CalendarEvent[]>;
    @Input() selectedDate$: BehaviorSubject<Date>;

    @Output() dateChange: EventEmitter<Date> = new EventEmitter();
    @Output() eventClick: EventEmitter<CalendarEvent> = new EventEmitter();
    @Output() addButtonClick: EventEmitter<any> = new EventEmitter();

    @ViewChild(MatMenuTrigger) datePickerMenu: MatMenuTrigger;

    private subscriptions$: Subscription = new Subscription();

    differ: any;
    views: Views;
    options: CalendarOptions;
    events: CalendarEvent[];
    selectedView: Views;
    selectedDate: Date;
    enableDatePickerButton: boolean;
    enableViewToggle: boolean;
    calendar = {} as Calendar;
    today = format(new Date(), 'EEEE, d MMMM');

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event: KeyboardEvent): void {
        this.handleKeyboardEvents(event);
    }

    constructor(
        private dateAdapter: DateAdapter<Date>
    ) {}

    ngOnInit(): void {
        this.subscriptions$.add(
            this.options$.pipe(
                tap((options) => {
                    this.options = options;
                    this.selectedView = options.view;
                    console.log('options changed');
                    this.initCalendar();
                })
            ).subscribe()
        );

        this.subscriptions$.add(
            this.events$.pipe(
                tap((events) => {
                    this.events = events;
                    console.log('events changed');
                })
            ).subscribe()
        );

        this.subscriptions$.add(
            this.selectedDate$.pipe(
                tap(selectedDate => {
                    this.selectedDate = selectedDate;
                    this.initCalendar();

                    if (this.selectedDate !== selectedDate) {
                        this.dateChange.emit(this.selectedDate);
                    }
                })
            ).subscribe()
        );
    }

    initCalendar(): void {
        if (this.options) {
            this.enableDatePickerButton = this.options.enableDatePickerButton;
            this.enableViewToggle = this.options.enableViewToggle;
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

            default:
                break;
        }
    }

    ngOnDestroy(): void {
        this.subscriptions$.unsubscribe();
    }
}

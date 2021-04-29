import {
    Component,
    DoCheck,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
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

    private setOptions!: CalendarOptions;
    @Input() get options(): CalendarOptions {
        return this.setOptions;
    }
    set options(value: CalendarOptions) {
        this.setOptions = value;
    }

    private selectedDate!: string;
    @Input() get date(): string {
        return this.selectedDate;
    }
    set date(value: string) {
        this.selectedDate = value;
        this.dateChange.emit(this.selectedDate);
    }
    @Output() dateChange: EventEmitter<string> = new EventEmitter();
    @Output() eventClick: EventEmitter<CalendarEvent> = new EventEmitter();

    times = Times;
    pixelsPerHour = 0;
    enableDatePickerButton!: boolean;
    enableTooltip!: boolean;
    showDatePicker = false;
    dateFormat!: string;
    datePickerForm: FormGroup;
    calendar = {} as Calendar;

    constructor(
        private formattingService: FormattingService,
        private formBuilder: FormBuilder,
        private dateAdapter: DateAdapter<Date>
    ) {
        this.datePickerForm = this.formBuilder.group({
            date: [''],
        });
    }

    ngOnInit(): void {
        if (this.setOptions && this.events) {
            this.pixelsPerHour = this.setOptions.pixelsPerMinute * 60;
            this.enableDatePickerButton = this.setOptions.enableDatePickerButton;
            this.enableTooltip = this.setOptions.enableTooltip;
            this.dateFormat = this.setOptions.dateFormat;

            this.dateAdapter.setLocale(this.setOptions.locale);

            this.generateCalendarView();
            this.handleDatepickerChanges();
        }
    }

    ngDoCheck(): void {
        const changes = this.events;

        if (changes) {
            this.generateCalendarView();
        }
    }

    generateCalendarView(): void {
        if (this.selectedDate) {
            const eventsGroupedByDate = this.groupEventsByDate();
            const emptyDays = this.generateDays();
            const populatedEvents = this.populateEvents(eventsGroupedByDate);
            const populatedDays = this.populateDays(emptyDays, populatedEvents);

            this.calendar = {
                days: populatedDays,
                monthAndYear: moment(this.selectedDate).format('MMMM YYYY'),
                weeknumber: moment(this.selectedDate).week()
            };
        }
    }

    groupEventsByDate(): CalendarEvent[] {
        const groupedEvents = this.events.reduce((accumulator, item) => {
            accumulator[moment(item.date).format(this.dateFormat)] =
            accumulator[moment(item.date).format(this.dateFormat)] || [];
            accumulator[moment(item.date).format(this.dateFormat)].push(item);

            return accumulator;
        }, Object.create(null));

        return groupedEvents;
    }

    populateEvents(eventsGroupedByDate: any): CalendarEvent[] {
        const nextDayEvents = { key: '', events: [] as CalendarEvent[] };

        Object.keys(eventsGroupedByDate).forEach((key: any) => {
            if (nextDayEvents.key !== key) {
                 nextDayEvents.key = '';
                 nextDayEvents.events = [];
            } else {
                eventsGroupedByDate[key].unshift(nextDayEvents.events[0]);
            }

            eventsGroupedByDate[key] = eventsGroupedByDate[key].map((item: any, index: number) => {
                const previousEvent = this.getPreviousEvent(eventsGroupedByDate[key], index);

                const event: CalendarEvent = {
                    ...item,
                    offset: this.calculatePixelsOffsetForEvent(item, previousEvent)
                };

                if (!this.isSameDay(item)) {
                    const nextDayEvent: CalendarEvent = {
                        ...item,
                        startTime: moment(item.startTime).add(1, 'days').startOf('day').format(),
                        offset: { offsetTop: 0, durationOffset: 0 },
                    };

                    nextDayEvents.key = this.getNextDayKey(eventsGroupedByDate, key);
                    nextDayEvents.events.push(nextDayEvent);
                }

                return event;
            });
        });

        return eventsGroupedByDate;
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
        const selectedWeekStart = moment(this.selectedDate).startOf('isoWeek').isoWeekday(1);
        const days = [];

        for (let i = 0; i < 7; i++) {
            let date = selectedWeekStart;
            date = date.clone().add(i, 'days');

            const day: CalendarDay = {
                date: date.format(this.dateFormat),
                events: []
            };

            days.push(day);
        }

        return days;
    }

    populateDays(emptyDays: any, eventsGroupedByDate: any): CalendarDay[] {
        const populatedDays: CalendarDay[] = emptyDays;

        Object.keys(eventsGroupedByDate).forEach((key: any) => {
            const getDayByKey = populatedDays.find((day: CalendarDay) => day.date === key);

            if (getDayByKey) {
                getDayByKey.events = eventsGroupedByDate[key];
            }
        });

        return populatedDays;
    }

    isDateBetween(date: moment.Moment, start: moment.Moment, end: moment.Moment): boolean {
        return date.isBetween(start, end, 'day', '[]');
    }

    isSameDay(event: CalendarEvent): boolean {
        const startTime = event.startTime;
        const endTime = event.endTime;

        return moment(startTime).isSame(endTime, 'day');
    }

    // @TODO : use previouseventoffset so event can be relative positioned
    calculatePixelsOffsetForEvent(event: any, previousEvent: any): CalendarEventOffset {
        let offset: CalendarEventOffset = { offsetTop: 0, durationOffset: 0 };
        let previousEventOffset = 0;
        let timeBetweenEvents = 0;

        const startTime = moment(event.startTime);
        const endTime = this.isSameDay(event) ?
            moment(event.endTime) :
            moment(event.endTime).subtract(1, 'days').endOf('day');

        const eventDuration = moment.duration(endTime.diff(startTime)).asMinutes();

        if (previousEvent !== undefined) {
            const endTimePreviousEvent = moment(previousEvent.endTime);

            timeBetweenEvents = moment.duration(endTimePreviousEvent.diff(startTime)).asMinutes();
            previousEventOffset = Math.abs(endTimePreviousEvent.hour() * 60 + endTimePreviousEvent.minute());
        }

        const offsetInMinutes = Math.abs(startTime.hour() * 60 + startTime.minute());

        offset =  {
            offsetTop: offsetInMinutes * this.options.pixelsPerMinute,
            durationOffset: eventDuration * this.options.pixelsPerMinute
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
        const now = moment();

        return (now.hour() * 60 + now.minute()) * this.options.pixelsPerMinute;
    }

    isToday(date: string): boolean {
        const today = moment().startOf('day');
        const momentDate = moment(date, this.dateFormat);

        return momentDate.isSame(today, 'd');
    }

    setCalendarToday(): void {
        this.selectedDate = moment().format();
        this.generateCalendarView();
        this.dateChange.emit(this.selectedDate);
        this.showDatePicker = false;
    }

    setCalendar(offset?: number, date?: string): void {
        let setDate = '';

        if (offset) {
            setDate = moment(this.selectedDate)
            .add(offset, 'days')
            .format();
        } else {
            setDate = moment(date).format();
        }

        this.selectedDate = setDate;
        this.generateCalendarView();
        this.dateChange.emit(setDate);
        this.showDatePicker = false;
    }

    getDayName(date: string): string {
        return moment(date, this.dateFormat).format('ddd');
    }

    getDayNumber(date: string): string {
        return moment(date, this.dateFormat).format('D');
    }

    getTime(date: string): string {
        return this.formattingService.getTime(date);
    }

    getTooltip(event: CalendarEvent): string{
        const location = event.location ? `@ ${event.location}` : '';

        return `${event.title} (${this.getTime(event.startTime)} - ${this.getTime(event.endTime)}) ${location}`;
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
            this.setCalendar(undefined, moment(dateValue, this.dateFormat).format());
        });
    }
}

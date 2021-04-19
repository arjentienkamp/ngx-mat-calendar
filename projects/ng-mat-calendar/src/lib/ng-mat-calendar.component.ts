import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';

import * as moment from 'moment';
import ICalendar, { Day, CalendarEvent, IOffset } from './models/Calendar';
import { Times } from './models/Times';
import { CalendarOptions } from './models/CalendarOptions';
import { FormattingService } from './services/formatting.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ng-mat-calendar',
    templateUrl: './ng-mat-calendar.component.html',
    styleUrls: ['./ng-mat-calendar.component.scss']
})
export class NgMatCalendarComponent implements OnInit {
    @Input() options: CalendarOptions = new CalendarOptions();
    @Input() events: CalendarEvent[] = [];

    private selectedDate!: string;
    @Input() get date(): string {
        return this.selectedDate;
    }
    set date(value: string) {
        this.selectedDate = value;
        this.dateChange.emit(this.selectedDate);
    }
    @Output() dateChange: EventEmitter<string> = new EventEmitter();

    pixelsPerHour = this.options.pixelsPerMinute * 60;
    times = Times;
    dateFormat = this.options.dateFormat;
    selectedMonthAndYear = '';
    calendar = {} as ICalendar;

    constructor(
        private formattingService: FormattingService
    ) {}

    ngOnInit(): void {
        this.generateDayLanesForActiveWeek();
    }

    generateDayLanesForActiveWeek(): void {
        if (this.selectedDate) {
            this.selectedMonthAndYear = moment(this.selectedDate).format('MMMM YYYY');
        }

        const eventsGroupedByDate = this.groupEventsByDate();
        const emptyDayLanes = this.generateDayLanes();
        const populatedEvents = this.populateEvents(eventsGroupedByDate);
        const populatedDayLanes = this.populateDayLanes(emptyDayLanes, populatedEvents);

        this.calendar = {
            activeDayLanes: populatedDayLanes
        };
    }

    groupEventsByDate(): any {
        const groupedEvents = this.events.reduce((accumulator, item) => {
            accumulator[moment(item.date).format(this.dateFormat)] =
            accumulator[moment(item.date).format(this.dateFormat)] || [];
            accumulator[moment(item.date).format(this.dateFormat)].push(item);

            return accumulator;
        }, Object.create(null));

        return groupedEvents;
    }

    populateEvents(eventsGroupedByDate: any): any {
        Object.keys(eventsGroupedByDate).forEach((key: any) => {
            eventsGroupedByDate[key] = eventsGroupedByDate[key].map((item: any, index: number) => {
                const previousEvent = this.getPreviousEvent(eventsGroupedByDate[key], index);

                const dayLaneEvent: CalendarEvent = {
                    ...item,
                    offset: this.calculatePixelsOffsetForEvent(item, previousEvent),
                };

                return dayLaneEvent;
            });
        });

        return eventsGroupedByDate;
    }

    getPreviousEvent(eventsGroupedByDate: any, index: number): any {
        if (eventsGroupedByDate[index - 1] !== undefined) {
            return eventsGroupedByDate[index - 1];
        }
    }

    generateDayLanes(): Day[] {
        const selectedWeekStart = moment(this.selectedDate).startOf('isoWeek').isoWeekday(1);
        const dayLanes = [];

        for (let i = 0; i < 7; i++) {
            let date = selectedWeekStart;
            date = date.clone().add(i, 'days');

            const lane: Day = {
                date: date.format(this.dateFormat),
                events: []
            };

            dayLanes.push(lane);
        }

        return dayLanes;
    }

    populateDayLanes(emptyDayLanes: any, eventsGroupedByDate: any): Day[] {
        const populatedDayLanes: Day[] = emptyDayLanes;

        Object.keys(eventsGroupedByDate).forEach((key: any) => {
            const getLaneByKey = populatedDayLanes.find((dayLane: Day) => dayLane.date === key);

            if (getLaneByKey) {
                getLaneByKey.events = eventsGroupedByDate[key];
            }
        });

        return populatedDayLanes;
    }

    isDateBetween(date: moment.Moment, start: moment.Moment, end: moment.Moment): boolean {
        return date.isBetween(start, end, 'day', '[]');
    }

    // @TODO : use previouseventoffset so event can be relative positioned
    calculatePixelsOffsetForEvent(event: any, previousEvent: any): IOffset {
        let offset: IOffset = { offsetTop: 0, durationOffset: 0};
        let previousEventOffset = 0;
        let timeBetweenEvents = 0;

        const startTime = moment(event.startTime);
        const endTime = moment(event.endTime);
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
            height: 25 * 60 * this.options.pixelsPerMinute
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
        this.generateDayLanesForActiveWeek();
        this.dateChange.emit(this.selectedDate);
    }

    setCalendar($offset: number): void {
        const setDate = moment(this.selectedDate)
            .add($offset, 'days')
            .format();

        this.selectedDate = setDate;
        this.generateDayLanesForActiveWeek();
        this.dateChange.emit(setDate);
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

    eventClick(event: CalendarEvent): void {
        //
    }
}

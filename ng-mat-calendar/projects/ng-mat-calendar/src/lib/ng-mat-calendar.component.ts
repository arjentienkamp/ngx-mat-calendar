import {
    AfterViewInit,
    Component,
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    Input,
    OnDestroy,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren,
    ViewContainerRef
} from '@angular/core';

import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import ICalendar, { IDayLane, IDayLaneEvent, IOffset } from './models/Calendar';
import { Days } from 'src/app/shared/models/Days';
import { Times } from 'src/app/shared/models/Times';
import { EventItem } from 'src/app/shared/store/models/calendar.model';
import { selectEvents } from 'src/app/shared/store/selectors/calendar.selectors';
import AppState from '../../app.state';
import { selectDate } from 'src/app/shared/store/selectors/ui.selectors';
import { ButtonType } from 'src/app/shared/components/button/ButtonType';
import { Color } from 'src/app/shared/models/Color';
import { SetUiDateAction } from 'src/app/shared/store/actions/ui.actions';
import { CalendarOptions } from './models/CalendarOptions';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ng-mat-calendar',
    templateUrl: './ng-mat-calendar.component.html',
    styleUrls: ['./ng-mat-calendar.component.scss']
})
export class NgMatCalendarComponent implements OnInit {
    @Input() options: CalendarOptions = new CalendarOptions();

    pixelsPerHour = 0;

    events: EventItem[] = [];
    days = Days;
    times = Times;
    dateFormat = 'DD-MM-YYYY';
    today = moment().format(this.dateFormat);
    selectedDate = '';
    selectedMonthAndYear = '';
    calendar = {} as ICalendar;

    buttonTodayType = ButtonType.matStrokedButton;
    buttonNavigationType = ButtonType.matIconButton;
    buttonTodayColor = Color.accent;
    buttonNavigationColor = Color.accent;

    // @ViewChildren('eventContainer', { read: ViewContainerRef }) eventContainer!: ViewContainerRef;
    // componentRef!: ComponentRef<Component>;

    // activatedViewContainerRef!: ViewContainerRef;
    // @ViewChildren('eventContainers', { read: ViewContainerRef}) eventContainerHosts!: QueryList<ViewContainerRef>;

    constructor(
        private store: Store<AppState>,
        private resolver: ComponentFactoryResolver
    ) {
        this.store.pipe(select(selectEvents)).subscribe(events => {
            this.events = events;
            this.generateDayLanesForActiveWeek();
        });

        this.store.pipe(select(selectDate)).subscribe(selectedDate => {
            this.selectedDate = moment(selectedDate).format('DD-MM-YYYY');
            this.selectedMonthAndYear = moment(selectedDate).format('MMMM YYYY');
        });
    }

    ngOnInit(): void {
        this.pixelsPerHour = this.options.pixelsPerMinute * 60;
    }

    generateDayLanesForActiveWeek(): void {
        const eventsGroupedByDate = this.groupEventsByDate();
        const emptyDayLanes = this.generateDayLanes(this.selectedDate);
        const populatedEvents = this.populateEvents(eventsGroupedByDate);
        const populatedDayLanes = this.populateDayLanes(emptyDayLanes, populatedEvents);

        this.calendar = {
            activeDayLanes: populatedDayLanes
        };

        console.log(this.calendar);
    }

    groupEventsByDate(): any {
        const groupedEvents = this.events.reduce((accumulator, item) => {
            if (!item.start.date) {
                accumulator[moment(item.start.dateTime).format(this.dateFormat)] =
                accumulator[moment(item.start.dateTime).format(this.dateFormat)] || [];
                accumulator[moment(item.start.dateTime).format(this.dateFormat)].push(item);
            }
            return accumulator;
        }, Object.create(null));

        return groupedEvents;
    }

    // @TODO model for Gcal event format
    populateEvents(eventsGroupedByDate: any): any {
        Object.keys(eventsGroupedByDate).forEach((key: any) => {
            eventsGroupedByDate[key] = eventsGroupedByDate[key].map((item: any, index: number) => {
                const previousEvent = this.getPreviousEvent(eventsGroupedByDate[key], index);

                const dayLaneEvent: IDayLaneEvent = {
                    title: item.summary,
                    date: moment(item.start.dateTime).format(this.dateFormat),
                    offset: this.calculatePixelsOffsetForEvent(item, previousEvent),
                    startTime: moment(item.start.dateTime).format('HH:mm'),
                    endTime: moment(item.end.dateTime).format('HH:mm')
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

    generateDayLanes(selectedDate: string): IDayLane[] {
        const selectedWeekStart = moment(selectedDate, this.dateFormat).startOf('week').isoWeekday(1);
        const dayLanes = [];

        for (let i = 0; i < 7; i++) {
            let date = selectedWeekStart;
            date = date.clone().add(i, 'days');

            const lane: IDayLane = {
                date: date.format(this.dateFormat),
                events: []
            };

            dayLanes.push(lane);
        }

        return dayLanes;
    }

    populateDayLanes(emptyDayLanes: any, eventsGroupedByDate: any): IDayLane[] {
        const populatedDayLanes: IDayLane[] = emptyDayLanes;

        Object.keys(eventsGroupedByDate).forEach((key: any) => {
            const getLaneByKey = populatedDayLanes.find((dayLane: IDayLane) => dayLane.date === key);

            if (getLaneByKey) {
                getLaneByKey.events = eventsGroupedByDate[key];
            }
        });

        return populatedDayLanes;
    }

    isDateBetween(date: moment.Moment, start: moment.Moment, end: moment.Moment): boolean {
        return date.isBetween(start, end, 'day', '[]');
    }

    calculatePixelsOffsetForEvent(event: any, previousEvent: any): IOffset {
        let offset: IOffset = { offsetTop: 0, durationOffset: 0};
        let previousEventOffset = 0;
        let timeBetweenEvents = 0;

        const startTime = moment(event.start.dateTime);
        const endTime = moment(event.end.dateTime);
        const eventDuration = moment.duration(endTime.diff(startTime)).asMinutes();

        if (previousEvent !== undefined) {
            const endTimePreviousEvent = moment(previousEvent.end.dateTime);
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
        this.store.dispatch(new SetUiDateAction(this.today));
    }

    setCalendar($offset: number): void {
        const setDate = moment(this.selectedDate, this.dateFormat)
            .add($offset, 'days')
            .format(this.dateFormat);

        this.store.dispatch(new SetUiDateAction(setDate));
    }

    getDayName(date: string): string {
        return moment(date, this.dateFormat).format('ddd');
    }

    getDayNumber(date: string): string {
        return moment(date, this.dateFormat).format('D');
    }

    eventClick(event: IDayLaneEvent): void {
        //
    }
}

import {
    Component,
    DoCheck,
    EventEmitter,
    Input,
    IterableDiffers,
    KeyValueDiffer,
    KeyValueDiffers,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';

import { DayView } from '../../models/Calendar';
import { CalendarEvent } from '../../models/CalendarEvent';

import { Times } from '../../models/Times';
import { FormattingService } from '../../services/formatting.service';
import { CalendarOptions } from '../../models/CalendarOptions';
import { getHours, getMinutes } from 'date-fns';
import { interval } from 'rxjs';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'day-view',
    templateUrl: './day-view.component.html',
    styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit, DoCheck, OnDestroy {
    @Input() events: CalendarEvent[] = [];
    private differEvents: IterableDiffers;

    public selectedDate!: Date;
    @Input() get date(): Date {
        return this.selectedDate;
    }
    set date(value: Date) {
        this.selectedDate = value;
        this.initDayView();
    }

    @Input() options: CalendarOptions = new CalendarOptions();
    private differOptions: KeyValueDiffer<any, any>;

    @Output() eventClick: EventEmitter<CalendarEvent> = new EventEmitter();

    times = Times;
    pixelsPerHour = 0;
    markerPosition = 0;
    markerSubscription: any;
    dayview = {} as DayView;

    constructor(
        private formattingService: FormattingService,
        private iterableDiffers: IterableDiffers,
        private keyValueDiffers: KeyValueDiffers
    ) {
        this.differEvents = iterableDiffers;
        this.differOptions = keyValueDiffers.find(CalendarOptions).create();
    }

    ngOnInit(): void {
        this.initDayView();

        this.markerSubscription = interval(this.options.markerInterval).subscribe(() => {
            this.markerPosition = this.calculateMarkerPosition();
        });
    }

    ngDoCheck(): void {
        const eventChanges = this.differEvents.find(this.events);

        if (eventChanges) {
            this.generateDayView();
        }

        const optionsChanges = this.differOptions.diff(this.options);

        if (optionsChanges) {
            this.initDayView();
        }
    }

    initDayView(): void {
        if (this.options && this.events) {
            this.pixelsPerHour = this.options.getPixelsPerMinute * 60;
        }
    }

    generateDayView(): void {
        if (this.selectedDate) {
            this.dayview = { // @TODO: new class instance
                events: [],
            };

            this.populateDayView();

            console.log(this.dayview);
        }
    }

    populateDayView(): void {

    }

    getCellHeight(time: any): number {
        if (time.isEnd) {
            return 20;
        }

        return this.pixelsPerHour;
    }

    calculateMarkerPosition(): number {
        const now = new Date();
        const offsetTop = (getHours(now) * 60 + getMinutes(now)) * this.options.getPixelsPerMinute;

        return offsetTop;
    }

    isToday(date: Date): boolean {
        return this.formattingService.isToday(date);
    }

    getDayName(date: Date): string {
        return this.formattingService.getDayName(date);
    }

    getDayNumber(date: Date): string {
        return this.formattingService.getDayNumber(date);
    }

    getTime(date: Date): string {
        return this.formattingService.getTime(date);
    }

    onEventClick(event: CalendarEvent): void {
        this.eventClick.emit(event);
    }

    ngOnDestroy(): void {
        this.markerSubscription.unsubscribe();
    }
}

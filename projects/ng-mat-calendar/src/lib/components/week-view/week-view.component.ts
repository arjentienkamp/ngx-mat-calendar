import {
    Component,
    DoCheck,
    EventEmitter,
    IterableDiffers,
    KeyValueDiffers,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';

import {
    add,
    isSameDay,
    startOfWeek
} from 'date-fns';

import { interval } from 'rxjs';
import { BaseViewComponent } from '../shared/base-view/base-view.component';
import { CalendarDay, WeekView } from '../../models/Calendar';
import { CalendarEvent } from '../../models/CalendarEvent';
import { FormattingService } from '../../services/formatting.service';

@Component({
    selector: 'week-view',
    templateUrl: './week-view.component.html',
    styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent extends BaseViewComponent implements OnInit, DoCheck {
    @Output() changeToDayView: EventEmitter<Date> = new EventEmitter();

    weekView = {} as WeekView;

    constructor(
        formattingService: FormattingService,
        iterableDiffers: IterableDiffers,
        keyValueDiffers: KeyValueDiffers
    ) {
        super(formattingService, iterableDiffers, keyValueDiffers);
    }

    ngOnInit(): void {
        this.initView();

        this.markerSubscription = interval(this.options.markerInterval).subscribe(() => {
            this.markerPosition = this.calculateMarkerPosition();
        });
    }

    ngDoCheck(): void {
        const eventChanges = this.differEvents.find(this.events);

        if (eventChanges) {
            this.generateView();
        }

        const optionsChanges = this.differOptions.diff(this.options);

        if (optionsChanges) {
            this.initView();
        }
    }

    initView(): void {
        if (this.options && this.events) {
            this.pixelsPerHour = this.options.getPixelsPerMinute * 60;

            this.generateView();
            this.markerPosition = this.calculateMarkerPosition();
        }
    }

    generateView(): void {
        if (this.selectedDate) {
            this.weekView = {
                days: [],
            };

            const emptyDays = this.generateDays();
            this.populateWeekView(emptyDays);
        }
    }

    populateWeekView(emptyDays: CalendarDay[]): void {
        const populatedDays: CalendarDay[] = emptyDays;

        populatedDays.forEach(day => {
            day.events = this.events.filter((event: CalendarEvent) => {
                return isSameDay(new Date(day.date), new Date(event.startTime)) ||
                    isSameDay(new Date(day.date), new Date(event.endTime));
            }).map((event: CalendarEvent) => {
                return this.populateEvents(event, day);
            }).sort((a: CalendarEvent, b: CalendarEvent) => {
                return a.startTime.getTime() - b.startTime.getTime();
            });

            day = this.createEventGroups(day);
        });

        this.weekView.days = populatedDays;
    }

    generateDays(): CalendarDay[] {
        const selectedWeekStart = startOfWeek(this.selectedDate, { weekStartsOn: 1 });
        const days = [];

        for (let i = 0; i < 7; i++) {
            let date = new Date(selectedWeekStart);
            date = add(date, { days: i });

            const day: CalendarDay = {
                date,
                eventGroups: [],
                events: []
            };

            days.push(day);
        }

        return days;
    }

    navigateToDayView(date: Date): void {
        this.changeToDayView.emit(date);
    }
}

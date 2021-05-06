import {
    Component,
    DoCheck,
    OnDestroy,
    OnInit
} from '@angular/core';

import { CalendarDay, WeekView } from '../../models/Calendar';
import { CalendarEvent, CalendarEventGrid } from '../../models/CalendarEvent';

import { v4 as uuidv4 } from 'uuid';
import { Times } from '../../models/Times';
import { interval } from 'rxjs';
import { FormattingService } from '../../services/formatting.service';
import { CalendarOptions } from '../../models/CalendarOptions';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'day-view',
    templateUrl: './day-view.component.html',
    styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit, DoCheck, OnDestroy {
    constructor() {}

    ngOnInit(): void {
        this.initDayView();
    }

    ngDoCheck(): void {}

    initDayView(): void {}

    generateDayView(): void {}

    onEventClick(event: CalendarEvent): void {
        // this.eventClick.emit(event);
    }

    ngOnDestroy(): void {
        // this.markerSubscription.unsubscribe();
    }
}

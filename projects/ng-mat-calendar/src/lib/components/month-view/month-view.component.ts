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
    selector: 'month-view',
    templateUrl: './month-view.component.html',
    styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent implements OnInit, DoCheck, OnDestroy {
    constructor() {}

    ngOnInit(): void {
        this.initMonthView();
    }

    ngDoCheck(): void {}

    initMonthView(): void {}

    generateMonthView(): void {}

    onEventClick(event: CalendarEvent): void {
        // this.eventClick.emit(event);
    }

    ngOnDestroy(): void {
        // this.markerSubscription.unsubscribe();
    }
}

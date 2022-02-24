import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { MonthView } from '../../models/Calendar';
import { CalendarDay } from '../../models/CalendarDay';
import { FormattingService } from '../../services/formatting.service';
import { BaseViewComponent } from '../shared/base-view/base-view.component';
import * as i0 from "@angular/core";
export declare class MonthViewComponent extends BaseViewComponent implements OnInit, OnDestroy {
    setCalendarOffset: EventEmitter<string>;
    monthView: MonthView;
    daysOfWeek: {
        title: string;
    }[];
    dayBlockHeight: number;
    weekNumbers: number[];
    showHiddenEvents: boolean;
    hiddenEventsTriggerOrigin: any;
    hiddenEventsDay: CalendarDay;
    maxEventsVisible: number;
    observer: MutationObserver;
    scrollListener: Subject<unknown>;
    scrollListener$: import("rxjs").Observable<unknown>;
    calendarDayElement: ElementRef;
    onResize(): void;
    constructor(formattingService: FormattingService);
    ngOnInit(): void;
    listenToCalendarViewportChanges(): void;
    generateView(): void;
    getWeekNumbers(): void;
    populateMonthView(emptyDays: CalendarDay[]): void;
    generateDays(): CalendarDay[];
    isCurrentMonth(date: Date): boolean;
    handleScroll(e: WheelEvent): void;
    toggleHiddenEvents(hiddenEventsTriggerOrigin: any, day: CalendarDay): void;
    closeHiddenEvents(): void;
    getHiddenEventsHeight(): number;
    calculateMaxEventsPerDay(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<MonthViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MonthViewComponent, "month-view", never, {}, { "setCalendarOffset": "setCalendarOffset"; }, never, never>;
}
//# sourceMappingURL=month-view.component.d.ts.map
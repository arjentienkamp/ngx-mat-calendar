import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { add, eachWeekOfInterval, endOfMonth, getWeek, isSameMonth, startOfMonth, sub } from 'date-fns';
import { fromEvent, interval, Subject } from 'rxjs';
import { takeUntil, tap, throttle } from 'rxjs/operators';
import { CalendarDay } from '../../models/CalendarDay';
import { NEXT, PREVIOUS } from '../../models/Directions';
import { daysOfWeek } from '../../models/Times';
import { BaseViewComponent } from '../shared/base-view/base-view.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatting.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/cdk/overlay";
import * as i4 from "../shared/event-display/event-display.component";
import * as i5 from "../../pipes/limit.pipe";
const _c0 = ["calendarDayElement"];
function MonthViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r5 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(day_r5.title);
} }
function MonthViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const weekNumber_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", weekNumber_r6, " ");
} }
function MonthViewComponent_div_7_event_display_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "event-display", 19);
    i0.ɵɵlistener("click", function MonthViewComponent_div_7_event_display_5_Template_event_display_click_0_listener() { i0.ɵɵrestoreView(_r12); const event_r10 = ctx.$implicit; const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onEventClick(event_r10); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const day_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("component", ctx_r8.options.renderComponent.month)("event", event_r10)("date", day_r7.date);
} }
function MonthViewComponent_div_7_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "div", 20, 21);
    i0.ɵɵlistener("click", function MonthViewComponent_div_7_span_7_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r16); const _r14 = i0.ɵɵreference(2); const day_r7 = i0.ɵɵnextContext().$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.toggleHiddenEvents(_r14, day_r7); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", day_r7.eventCount - ctx_r9.maxEventsVisible + 1, " more ");
} }
function MonthViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵelementStart(2, "span", 15);
    i0.ɵɵlistener("click", function MonthViewComponent_div_7_Template_span_click_2_listener() { i0.ɵɵrestoreView(_r20); const day_r7 = ctx.$implicit; const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.navigateToDayView(day_r7.date); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 16);
    i0.ɵɵtemplate(5, MonthViewComponent_div_7_event_display_5_Template, 1, 3, "event-display", 17);
    i0.ɵɵpipe(6, "limitPipe");
    i0.ɵɵtemplate(7, MonthViewComponent_div_7_span_7_Template, 4, 1, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-today", ctx_r3.isToday(day_r7.date));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("not-current-month", !ctx_r3.isCurrentMonth(day_r7.date));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.getDayNumber(day_r7.date));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(6, 7, day_r7.events, ctx_r3.maxEventsVisible - 1));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", day_r7.eventCount && ctx_r3.maxEventsVisible > 0 && day_r7.eventCount >= ctx_r3.maxEventsVisible);
} }
function MonthViewComponent_ng_template_8_event_display_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "event-display", 19);
    i0.ɵɵlistener("click", function MonthViewComponent_ng_template_8_event_display_3_Template_event_display_click_0_listener() { i0.ɵɵrestoreView(_r24); const event_r22 = ctx.$implicit; const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onEventClick(event_r22); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r22 = ctx.$implicit;
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("component", ctx_r21.options.renderComponent.month)("event", event_r22)("date", ctx_r21.hiddenEventsDay.date);
} }
function MonthViewComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelementStart(1, "span", 23);
    i0.ɵɵlistener("click", function MonthViewComponent_ng_template_8_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.navigateToDayView(ctx_r25.hiddenEventsDay.date); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, MonthViewComponent_ng_template_8_event_display_3_Template, 1, 3, "event-display", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r4.getHiddenEventsHeight(), "px");
    i0.ɵɵclassProp("is-today", ctx_r4.isToday(ctx_r4.hiddenEventsDay.date));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.getDayNumber(ctx_r4.hiddenEventsDay.date), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.hiddenEventsDay.events);
} }
export class MonthViewComponent extends BaseViewComponent {
    constructor(formattingService) {
        super(formattingService);
        this.setCalendarOffset = new EventEmitter();
        this.monthView = {};
        this.daysOfWeek = daysOfWeek;
        this.dayBlockHeight = 0;
        this.weekNumbers = [];
        this.showHiddenEvents = false;
        this.maxEventsVisible = 0;
        this.scrollListener = new Subject();
        this.scrollListener$ = this.scrollListener.asObservable();
        fromEvent(window, 'wheel')
            .pipe(takeUntil(this.scrollListener$), throttle(e => interval(1000)))
            .subscribe((e) => this.handleScroll(e));
        this.hiddenEventsDay = new CalendarDay();
    }
    onResize() {
        this.calculateMaxEventsPerDay();
    }
    ngOnInit() {
        super.ngOnInit();
        this.generateView();
        this.listenToCalendarViewportChanges();
        this.subscriptions$.add(this.events$.pipe(tap(events => {
            this.events = events;
            this.generateView();
        })).subscribe());
        this.subscriptions$.add(this.selectedDate$.pipe(tap(() => {
            this.closeHiddenEvents();
        })).subscribe());
    }
    listenToCalendarViewportChanges() {
        this.observer = new MutationObserver(list => {
            this.calculateMaxEventsPerDay();
        });
        this.observer.observe(this.calendarDayElement.nativeElement, { childList: true });
    }
    generateView() {
        if (this.selectedDate) {
            const emptyDays = this.generateDays();
            this.populateMonthView(emptyDays);
            this.getWeekNumbers();
            this.calculateMaxEventsPerDay();
        }
    }
    getWeekNumbers() {
        const weeksOfMonth = eachWeekOfInterval({
            start: startOfMonth(this.selectedDate),
            end: endOfMonth(this.selectedDate)
        });
        this.weekNumbers = [];
        weeksOfMonth.forEach(week => {
            this.weekNumbers.push(getWeek(week, { weekStartsOn: 1 }));
        });
    }
    populateMonthView(emptyDays) {
        const populatedDays = emptyDays;
        populatedDays.forEach(day => {
            day.events = this.events.filter((event) => {
                return this.isSameDay(day.date, event.startTime, event.endTime);
            }).map((event) => {
                return this.populateEvents(event, day);
            }).sort((a, b) => {
                return this.sortByTime(a, b);
            }).sort(event => {
                return this.sortByAllDay(event);
            });
            day = this.createEventGroups(day);
            day.eventCount = day.events.length;
        });
        this.monthView.days = populatedDays;
    }
    generateDays() {
        const dayOfWeek = add(startOfMonth(this.selectedDate), { days: 7 }).getDay();
        const selectedMonthStart = sub(startOfMonth(this.selectedDate), { days: dayOfWeek - 1 });
        const days = [];
        for (let i = 0; i < 35; i++) {
            let date = new Date(selectedMonthStart);
            date = add(date, { days: i });
            const day = {
                date,
                eventGroups: [],
                events: [],
                eventCount: 0
            };
            days.push(day);
        }
        return days;
    }
    isCurrentMonth(date) {
        return isSameMonth(date, this.selectedDate);
    }
    handleScroll(e) {
        e.deltaY > 0 ? this.setCalendarOffset.emit(NEXT) : this.setCalendarOffset.emit(PREVIOUS);
    }
    toggleHiddenEvents(hiddenEventsTriggerOrigin, day) {
        this.hiddenEventsTriggerOrigin = hiddenEventsTriggerOrigin;
        this.hiddenEventsDay = day;
        this.showHiddenEvents = !this.showHiddenEvents;
    }
    closeHiddenEvents() {
        this.showHiddenEvents = false;
    }
    getHiddenEventsHeight() {
        return (this.hiddenEventsDay.eventCount * 30) + 85;
    }
    calculateMaxEventsPerDay() {
        var _a;
        const dayBlockHeight = (_a = this.calendarDayElement.nativeElement.children[0]) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height;
        this.maxEventsVisible = Math.floor((dayBlockHeight - 25) / 30);
    }
    ngOnDestroy() {
        this.scrollListener.next();
        this.observer.disconnect();
    }
}
MonthViewComponent.ɵfac = function MonthViewComponent_Factory(t) { return new (t || MonthViewComponent)(i0.ɵɵdirectiveInject(i1.FormattingService)); };
MonthViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MonthViewComponent, selectors: [["month-view"]], viewQuery: function MonthViewComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.calendarDayElement = _t.first);
    } }, hostBindings: function MonthViewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function MonthViewComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
    } }, outputs: { setCalendarOffset: "setCalendarOffset" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 7, consts: [[1, "calendar__days"], ["class", "calendar__day", 4, "ngFor", "ngForOf"], [1, "calendar__weeknumbers"], ["class", "week-number-cell", 4, "ngFor", "ngForOf"], [1, "calendar__content"], [1, "calendar__blocks"], ["calendarDayElement", ""], ["class", "day__block", 3, "is-today", 4, "ngFor", "ngForOf"], ["cdkConnectedOverlay", "", "cdkConnectedOverlayPanelClass", "hidden-events-overlay", 3, "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "overlayOutsideClick"], [1, "calendar__day"], [1, "day__header"], [1, "day-name"], [1, "week-number-cell"], [1, "day__block"], [1, "day__block-content"], [1, "day__block-date", 3, "click"], [1, "day__events"], ["class", "calendar__item", 3, "component", "event", "date", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "calendar__item", 3, "component", "event", "date", "click"], ["cdkOverlayOrigin", "", 1, "hidden-events-trigger", 3, "click"], ["trigger", "cdkOverlayOrigin"], [1, "event-container"], [1, "event-container__date", 3, "click"]], template: function MonthViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, MonthViewComponent_div_1_Template, 4, 1, "div", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtemplate(3, MonthViewComponent_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelementStart(5, "div", 5, 6);
        i0.ɵɵtemplate(7, MonthViewComponent_div_7_Template, 8, 10, "div", 7);
        i0.ɵɵtemplate(8, MonthViewComponent_ng_template_8_Template, 4, 6, "ng-template", 8);
        i0.ɵɵlistener("overlayOutsideClick", function MonthViewComponent_Template_ng_template_overlayOutsideClick_8_listener() { return ctx.closeHiddenEvents(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.daysOfWeek);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.weekNumbers);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.monthView.days);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkConnectedOverlayOffsetY", -100)("cdkConnectedOverlayOffsetX", -35)("cdkConnectedOverlayOrigin", ctx.hiddenEventsTriggerOrigin)("cdkConnectedOverlayOpen", ctx.showHiddenEvents);
    } }, directives: [i2.NgForOf, i3.CdkConnectedOverlay, i2.NgIf, i4.EventDisplayComponent, i3.CdkOverlayOrigin], pipes: [i5.LimitPipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__content[_ngcontent-%COMP%]{display:flex;margin-left:4px;margin-top:15px;border-left:1px solid #efefef}.calendar__days[_ngcontent-%COMP%]{height:1.5rem;margin-left:38px}.calendar__days[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{flex:1}.calendar__weeknumbers[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;padding-top:1.5rem;text-align:center;width:22px;margin-right:12px}.calendar__weeknumbers[_ngcontent-%COMP%]   .week-number-cell[_ngcontent-%COMP%]{color:#c8c8c8}.calendar__blocks[_ngcontent-%COMP%]{display:flex;flex:1;flex-wrap:wrap;flex-direction:row;padding-top:.5rem}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;width:calc(100% / 7);padding-top:.5rem;overflow:hidden;border-right:1px solid #efefef;border-bottom:1px solid #efefef}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .day__block-content[_ngcontent-%COMP%]{justify-content:center;display:flex}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .day__block-date[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;width:25px;height:25px;color:#2a2a2a;font-size:.75rem}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .day__block-date[_ngcontent-%COMP%]:hover{cursor:pointer}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .day__events[_ngcontent-%COMP%]{position:absolute;overflow:hidden;top:2rem;width:100%}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .not-current-month[_ngcontent-%COMP%]{opacity:.25}.calendar__blocks[_ngcontent-%COMP%]   .day__block.is-today[_ngcontent-%COMP%]{background-color:#eef7fb}.calendar__blocks[_ngcontent-%COMP%]   .day__block.is-today[_ngcontent-%COMP%]   .day__block-date[_ngcontent-%COMP%]{border-radius:100%;background:#2a2a2a;color:#fff}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative;padding:0 2px}.hidden-events-trigger[_ngcontent-%COMP%]{font-size:12px;padding:0 .5rem;font-weight:600}.hidden-events-trigger[_ngcontent-%COMP%]:hover{cursor:pointer;opacity:.7}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthViewComponent, [{
        type: Component,
        args: [{
                selector: 'month-view',
                templateUrl: './month-view.component.html',
                styleUrls: ['./month-view.component.scss']
            }]
    }], function () { return [{ type: i1.FormattingService }]; }, { setCalendarOffset: [{
            type: Output
        }], calendarDayElement: [{
            type: ViewChild,
            args: ['calendarDayElement', { read: ElementRef, static: true }]
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvY29tcG9uZW50cy9tb250aC12aWV3L21vbnRoLXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL2NvbXBvbmVudHMvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFDbkMsWUFBWSxFQUFxQixNQUFNLEVBQWEsU0FBUyxFQUNoRSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDeEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7O0lDWnhFLDhCQUEyRDtJQUN2RCwrQkFBeUI7SUFDckIsZ0NBQXVCO0lBQUEsWUFBZTtJQUFBLGlCQUFPO0lBQ2pELGlCQUFNO0lBQ1YsaUJBQU07OztJQUZ5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aUI7UUFBakIsNENBQWlCO1FBZ0NqQyxlQUFtQztRQUFuQyxpREFBbUMsbUNBQUEsNERBQUEsaURBQUE7O3VGRDdCbEMsa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDN0M7b0VBRWEsaUJBQWlCO2tCQUExQixNQUFNO1lBZTRELGtCQUFrQjtrQkFBcEYsU0FBUzttQkFBQyxvQkFBb0IsRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztZQUN0QixRQUFRO2tCQUFsRCxZQUFZO21CQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsXG4gICAgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYWRkLCBlYWNoV2Vla09mSW50ZXJ2YWwsIGVuZE9mTW9udGgsIGdldFdlZWssIGlzU2FtZU1vbnRoLCBzdGFydE9mTW9udGgsIHN1YiB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IGZyb21FdmVudCwgaW50ZXJ2YWwsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCwgdGFwLCB0aHJvdHRsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1vbnRoVmlldyB9IGZyb20gJy4uLy4uL21vZGVscy9DYWxlbmRhcic7XG5pbXBvcnQgeyBDYWxlbmRhckRheSB9IGZyb20gJy4uLy4uL21vZGVscy9DYWxlbmRhckRheSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL0NhbGVuZGFyRXZlbnQnO1xuaW1wb3J0IHsgTkVYVCwgUFJFVklPVVMgfSBmcm9tICcuLi8uLi9tb2RlbHMvRGlyZWN0aW9ucyc7XG5pbXBvcnQgeyBkYXlzT2ZXZWVrIH0gZnJvbSAnLi4vLi4vbW9kZWxzL1RpbWVzJztcbmltcG9ydCB7IEZvcm1hdHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybWF0dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2Utdmlldy9iYXNlLXZpZXcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtb250aC12aWV3JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbW9udGgtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbW9udGgtdmlldy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1vbnRoVmlld0NvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBPdXRwdXQoKSBzZXRDYWxlbmRhck9mZnNldDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBtb250aFZpZXcgPSB7fSBhcyBNb250aFZpZXc7XG4gICAgZGF5c09mV2VlayA9IGRheXNPZldlZWs7XG4gICAgZGF5QmxvY2tIZWlnaHQgPSAwO1xuICAgIHdlZWtOdW1iZXJzOiBudW1iZXJbXSA9IFtdO1xuICAgIHNob3dIaWRkZW5FdmVudHMgPSBmYWxzZTtcbiAgICBoaWRkZW5FdmVudHNUcmlnZ2VyT3JpZ2luOiBhbnk7XG4gICAgaGlkZGVuRXZlbnRzRGF5OiBDYWxlbmRhckRheTtcbiAgICBtYXhFdmVudHNWaXNpYmxlID0gMDtcbiAgICBvYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcblxuICAgIHNjcm9sbExpc3RlbmVyID0gbmV3IFN1YmplY3QoKTtcbiAgICBzY3JvbGxMaXN0ZW5lciQgPSB0aGlzLnNjcm9sbExpc3RlbmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgQFZpZXdDaGlsZCgnY2FsZW5kYXJEYXlFbGVtZW50Jywge3JlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZX0pIGNhbGVuZGFyRGF5RWxlbWVudDogRWxlbWVudFJlZjtcbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSkgb25SZXNpemUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlTWF4RXZlbnRzUGVyRGF5KCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGZvcm1hdHRpbmdTZXJ2aWNlOiBGb3JtYXR0aW5nU2VydmljZVxuICAgICkge1xuICAgICAgICBzdXBlcihmb3JtYXR0aW5nU2VydmljZSk7XG5cbiAgICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3doZWVsJylcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLnNjcm9sbExpc3RlbmVyJCksXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoZSA9PiBpbnRlcnZhbCgxMDAwKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IGFueSkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoZSkpO1xuXG4gICAgICAgIHRoaXMuaGlkZGVuRXZlbnRzRGF5ID0gbmV3IENhbGVuZGFyRGF5KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVWaWV3KCk7XG4gICAgICAgIHRoaXMubGlzdGVuVG9DYWxlbmRhclZpZXdwb3J0Q2hhbmdlcygpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyQuYWRkKFxuICAgICAgICAgICAgdGhpcy5ldmVudHMkLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKGV2ZW50cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlVmlldygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnN1YnNjcmliZSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zJC5hZGQoXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSQucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlSGlkZGVuRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBsaXN0ZW5Ub0NhbGVuZGFyVmlld3BvcnRDaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoIGxpc3QgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVNYXhFdmVudHNQZXJEYXkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuY2FsZW5kYXJEYXlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHsgY2hpbGRMaXN0OiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGdlbmVyYXRlVmlldygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBlbXB0eURheXMgPSB0aGlzLmdlbmVyYXRlRGF5cygpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZU1vbnRoVmlldyhlbXB0eURheXMpO1xuICAgICAgICAgICAgdGhpcy5nZXRXZWVrTnVtYmVycygpO1xuXG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZU1heEV2ZW50c1BlckRheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0V2Vla051bWJlcnMoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHdlZWtzT2ZNb250aCA9IGVhY2hXZWVrT2ZJbnRlcnZhbCh7XG4gICAgICAgICAgICBzdGFydDogc3RhcnRPZk1vbnRoKHRoaXMuc2VsZWN0ZWREYXRlKSxcbiAgICAgICAgICAgIGVuZDogZW5kT2ZNb250aCh0aGlzLnNlbGVjdGVkRGF0ZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy53ZWVrTnVtYmVycyA9IFtdO1xuICAgICAgICB3ZWVrc09mTW9udGguZm9yRWFjaCh3ZWVrID0+IHtcbiAgICAgICAgICAgIHRoaXMud2Vla051bWJlcnMucHVzaChnZXRXZWVrKHdlZWssIHsgd2Vla1N0YXJ0c09uOiAxIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVNb250aFZpZXcoZW1wdHlEYXlzOiBDYWxlbmRhckRheVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvcHVsYXRlZERheXM6IENhbGVuZGFyRGF5W10gPSBlbXB0eURheXM7XG5cbiAgICAgICAgcG9wdWxhdGVkRGF5cy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgICAgICBkYXkuZXZlbnRzID0gdGhpcy5ldmVudHMuZmlsdGVyKChldmVudDogQ2FsZW5kYXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzU2FtZURheShkYXkuZGF0ZSwgZXZlbnQuc3RhcnRUaW1lLCBldmVudC5lbmRUaW1lKTtcbiAgICAgICAgICAgIH0pLm1hcCgoZXZlbnQ6IENhbGVuZGFyRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wb3B1bGF0ZUV2ZW50cyhldmVudCwgZGF5KTtcbiAgICAgICAgICAgIH0pLnNvcnQoKGE6IENhbGVuZGFyRXZlbnQsIGI6IENhbGVuZGFyRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0QnlUaW1lKGEsIGIpO1xuICAgICAgICAgICAgfSkuc29ydChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEJ5QWxsRGF5KGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkYXkgPSB0aGlzLmNyZWF0ZUV2ZW50R3JvdXBzKGRheSk7XG4gICAgICAgICAgICBkYXkuZXZlbnRDb3VudCA9IGRheS5ldmVudHMubGVuZ3RoO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vbnRoVmlldy5kYXlzID0gcG9wdWxhdGVkRGF5cztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURheXMoKTogQ2FsZW5kYXJEYXlbXSB7XG4gICAgICAgIGNvbnN0IGRheU9mV2VlayA9IGFkZChzdGFydE9mTW9udGgodGhpcy5zZWxlY3RlZERhdGUpLCB7IGRheXM6IDcgfSkuZ2V0RGF5KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTW9udGhTdGFydCA9IHN1YihzdGFydE9mTW9udGgodGhpcy5zZWxlY3RlZERhdGUpLCB7IGRheXM6IGRheU9mV2VlayAtIDEgfSk7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM1OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoc2VsZWN0ZWRNb250aFN0YXJ0KTtcbiAgICAgICAgICAgIGRhdGUgPSBhZGQoZGF0ZSwgeyBkYXlzOiBpIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXk6IENhbGVuZGFyRGF5ID0ge1xuICAgICAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICAgICAgZXZlbnRHcm91cHM6IFtdLFxuICAgICAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICAgICAgZXZlbnRDb3VudDogMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZGF5cy5wdXNoKGRheSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF5cztcbiAgICB9XG5cbiAgICBpc0N1cnJlbnRNb250aChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpc1NhbWVNb250aChkYXRlLCB0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlU2Nyb2xsKGU6IFdoZWVsRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZS5kZWx0YVkgPiAwID8gdGhpcy5zZXRDYWxlbmRhck9mZnNldC5lbWl0KE5FWFQpIDogdGhpcy5zZXRDYWxlbmRhck9mZnNldC5lbWl0KFBSRVZJT1VTKTtcbiAgICB9XG5cbiAgICB0b2dnbGVIaWRkZW5FdmVudHMoaGlkZGVuRXZlbnRzVHJpZ2dlck9yaWdpbjogYW55LCBkYXk6IENhbGVuZGFyRGF5KTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGlkZGVuRXZlbnRzVHJpZ2dlck9yaWdpbiA9IGhpZGRlbkV2ZW50c1RyaWdnZXJPcmlnaW47XG4gICAgICAgIHRoaXMuaGlkZGVuRXZlbnRzRGF5ID0gZGF5O1xuICAgICAgICB0aGlzLnNob3dIaWRkZW5FdmVudHMgPSAhdGhpcy5zaG93SGlkZGVuRXZlbnRzO1xuICAgIH1cblxuICAgIGNsb3NlSGlkZGVuRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNob3dIaWRkZW5FdmVudHMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRIaWRkZW5FdmVudHNIZWlnaHQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmhpZGRlbkV2ZW50c0RheS5ldmVudENvdW50ICogMzApICsgODU7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlTWF4RXZlbnRzUGVyRGF5KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkYXlCbG9ja0hlaWdodCA9IHRoaXMuY2FsZW5kYXJEYXlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgdGhpcy5tYXhFdmVudHNWaXNpYmxlID0gTWF0aC5mbG9vcigoZGF5QmxvY2tIZWlnaHQgLSAyNSkgLyAzMCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Nyb2xsTGlzdGVuZXIubmV4dCgpO1xuICAgICAgICB0aGlzLm9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FsZW5kYXJfX2RheXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJfX2RheVwiICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5c09mV2VlaztcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheV9faGVhZGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheS1uYW1lXCI+e3sgZGF5LnRpdGxlIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiY2FsZW5kYXJfX3dlZWtudW1iZXJzXCI+XG4gICAgPGRpdiBjbGFzcz1cIndlZWstbnVtYmVyLWNlbGxcIiAqbmdGb3I9XCJsZXQgd2Vla051bWJlciBvZiB3ZWVrTnVtYmVycztcIj5cbiAgICAgICAge3sgd2Vla051bWJlciB9fVxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjYWxlbmRhcl9fY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhcl9fYmxvY2tzXCIgI2NhbGVuZGFyRGF5RWxlbWVudD5cbiAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2YgbW9udGhWaWV3LmRheXNcIiBcbiAgICAgICAgICAgIGNsYXNzPVwiZGF5X19ibG9ja1wiXG4gICAgICAgICAgICBbY2xhc3MuaXMtdG9kYXldPVwiaXNUb2RheShkYXkuZGF0ZSlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXlfX2Jsb2NrLWNvbnRlbnRcIiBbY2xhc3Mubm90LWN1cnJlbnQtbW9udGhdPVwiIWlzQ3VycmVudE1vbnRoKGRheS5kYXRlKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5X19ibG9jay1kYXRlXCIgKGNsaWNrKT1cIm5hdmlnYXRlVG9EYXlWaWV3KGRheS5kYXRlKVwiPnt7IGdldERheU51bWJlcihkYXkuZGF0ZSkgfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRheV9fZXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgPGV2ZW50LWRpc3BsYXlcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGV2ZW50IG9mIGRheS5ldmVudHMgfCBsaW1pdFBpcGU6IG1heEV2ZW50c1Zpc2libGUgLSAxXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYWxlbmRhcl9faXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRdPVwib3B0aW9ucy5yZW5kZXJDb21wb25lbnQubW9udGhcIlxuICAgICAgICAgICAgICAgICAgICBbZXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICAgICAgICAgICAgICBbZGF0ZV09XCJkYXkuZGF0ZVwiICAgICAgXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkV2ZW50Q2xpY2soZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgPC9ldmVudC1kaXNwbGF5PlxuXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJkYXkuZXZlbnRDb3VudCAmJiBtYXhFdmVudHNWaXNpYmxlID4gMCAmJiBkYXkuZXZlbnRDb3VudCA+PSBtYXhFdmVudHNWaXNpYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGlkZGVuLWV2ZW50cy10cmlnZ2VyXCIgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVIaWRkZW5FdmVudHModHJpZ2dlciwgZGF5KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjZGtPdmVybGF5T3JpZ2luXG4gICAgICAgICAgICAgICAgICAgICAgICAjdHJpZ2dlcj1cImNka092ZXJsYXlPcmlnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGRheS5ldmVudENvdW50IC0gbWF4RXZlbnRzVmlzaWJsZSArIDEgfX0gbW9yZVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+ICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgICAgIGNka0Nvbm5lY3RlZE92ZXJsYXlcbiAgICAgICAgICAgIChvdmVybGF5T3V0c2lkZUNsaWNrKT1cImNsb3NlSGlkZGVuRXZlbnRzKClcIlxuICAgICAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPZmZzZXRZXT1cIi0xMDBcIlxuICAgICAgICAgICAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPZmZzZXRYXT1cIi0zNVwiXG4gICAgICAgICAgICBjZGtDb25uZWN0ZWRPdmVybGF5UGFuZWxDbGFzcz1cImhpZGRlbi1ldmVudHMtb3ZlcmxheVwiXG4gICAgICAgICAgICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJoaWRkZW5FdmVudHNUcmlnZ2VyT3JpZ2luXCJcbiAgICAgICAgICAgIFtjZGtDb25uZWN0ZWRPdmVybGF5T3Blbl09XCJzaG93SGlkZGVuRXZlbnRzXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJldmVudC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIFtjbGFzcy5pcy10b2RheV09XCJpc1RvZGF5KGhpZGRlbkV2ZW50c0RheS5kYXRlKVwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJnZXRIaWRkZW5FdmVudHNIZWlnaHQoKVwiPlxuXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJldmVudC1jb250YWluZXJfX2RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibmF2aWdhdGVUb0RheVZpZXcoaGlkZGVuRXZlbnRzRGF5LmRhdGUpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGdldERheU51bWJlcihoaWRkZW5FdmVudHNEYXkuZGF0ZSkgfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8ZXZlbnQtZGlzcGxheVxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZXZlbnQgb2YgaGlkZGVuRXZlbnRzRGF5LmV2ZW50c1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FsZW5kYXJfX2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50XT1cIm9wdGlvbnMucmVuZGVyQ29tcG9uZW50Lm1vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgW2V2ZW50XT1cImV2ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgW2RhdGVdPVwiaGlkZGVuRXZlbnRzRGF5LmRhdGVcIiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FdmVudENsaWNrKGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIDwvZXZlbnQtZGlzcGxheT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPiAgICAgICAgICBcbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19
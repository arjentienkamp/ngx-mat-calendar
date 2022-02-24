import { Component } from '@angular/core';
import { add, startOfWeek } from 'date-fns';
import { BaseViewComponent } from '../shared/base-view/base-view.component';
import { tap } from 'rxjs/operators';
import { CalendarDay } from '../../models/CalendarDay';
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatting.service";
import * as i2 from "@angular/common";
import * as i3 from "../shared/event-display/event-display.component";
import * as i4 from "../../pipes/all-day-event.pipe";
const _c0 = function (a0) { return { "day__header--today ": a0 }; };
function WeekViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 12);
    i0.ɵɵlistener("click", function WeekViewComponent_div_1_Template_span_click_4_listener() { i0.ɵɵrestoreView(_r6); const day_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.navigateToDayView(day_r4.date); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r0.isToday(day_r4.date)));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.getDayName(day_r4.date));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.getDayNumber(day_r4.date));
} }
function WeekViewComponent_div_4_event_display_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "event-display", 15);
    i0.ɵɵlistener("click", function WeekViewComponent_div_4_event_display_1_Template_event_display_click_0_listener() { i0.ɵɵrestoreView(_r11); const event_r9 = ctx.$implicit; const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onEventClick(event_r9); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r9 = ctx.$implicit;
    const day_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("component", ctx_r8.options.renderComponent.week)("event", event_r9)("date", day_r7.date);
} }
function WeekViewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, WeekViewComponent_div_4_event_display_1_Template, 1, 3, "event-display", 14);
    i0.ɵɵpipe(2, "allDayEventPipe");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 1, day_r7.events, true));
} }
function WeekViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r13 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r2.getCellHeight(hour_r13), "px");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", hour_r13.title, " ");
} }
function WeekViewComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 22);
} if (rf & 2) {
    const hour_r18 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("height", ctx_r15.getCellHeight(hour_r18), "px");
} }
function WeekViewComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 23);
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("margin-top", ctx_r16.markerPosition, "px");
} }
function WeekViewComponent_div_8_event_display_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "event-display", 15);
    i0.ɵɵlistener("click", function WeekViewComponent_div_8_event_display_4_Template_event_display_click_0_listener() { i0.ɵɵrestoreView(_r21); const event_r19 = ctx.$implicit; const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.onEventClick(event_r19); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r19 = ctx.$implicit;
    const day_r14 = i0.ɵɵnextContext().$implicit;
    const ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", event_r19.grid == null ? null : event_r19.grid.width, "%")("margin-left", event_r19.grid == null ? null : event_r19.grid.offsetLeft, "%")("margin-top", event_r19.grid == null ? null : event_r19.grid.offsetTop, "px")("height", event_r19.grid == null ? null : event_r19.grid.durationOffset, "px");
    i0.ɵɵproperty("component", ctx_r17.options.renderComponent.week)("event", event_r19)("date", day_r14.date);
} }
const _c1 = function (a0) { return { "day__lane--today": a0 }; };
function WeekViewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵtemplate(2, WeekViewComponent_div_8_div_2_Template, 1, 2, "div", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, WeekViewComponent_div_8_div_3_Template, 1, 2, "div", 20);
    i0.ɵɵtemplate(4, WeekViewComponent_div_8_event_display_4_Template, 1, 11, "event-display", 21);
    i0.ɵɵpipe(5, "allDayEventPipe");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r14 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1, ctx_r3.isToday(day_r14.date)));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.hoursOfDay);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.isToday(day_r14.date));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(5, 4, day_r14.events, false));
} }
export class WeekViewComponent extends BaseViewComponent {
    constructor(formattingService) {
        super(formattingService);
        this.weekView = {};
    }
    ngOnInit() {
        super.ngOnInit();
        this.generateView();
        this.subscriptions$.add(this.events$.pipe(tap(events => {
            this.events = events;
            this.generateView();
        })).subscribe());
    }
    generateView() {
        if (this.selectedDate) {
            const emptyDays = this.generateDays();
            this.populateWeekView(emptyDays);
        }
    }
    populateWeekView(emptyDays) {
        const populatedDays = emptyDays;
        populatedDays.forEach(day => {
            day.events = this.events.filter((event) => {
                return this.isSameDay(day.date, event.startTime, event.endTime);
            }).map((event) => {
                return this.populateEvents(event, day);
            }).sort((a, b) => {
                return this.sortByTime(a, b);
            });
            day = this.createEventGroups(day);
        });
        this.weekView.days = populatedDays;
    }
    generateDays() {
        const selectedWeekStart = startOfWeek(this.selectedDate, { weekStartsOn: 1 });
        const days = [];
        for (let i = 0; i < 7; i++) {
            let date = new Date(selectedWeekStart);
            date = add(date, { days: i });
            const day = new CalendarDay({
                date,
                eventGroups: [],
                events: []
            });
            days.push(day);
        }
        return days;
    }
}
WeekViewComponent.ɵfac = function WeekViewComponent_Factory(t) { return new (t || WeekViewComponent)(i0.ɵɵdirectiveInject(i1.FormattingService)); };
WeekViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WeekViewComponent, selectors: [["week-view"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 4, consts: [[1, "calendar__days"], ["class", "calendar__day", 4, "ngFor", "ngForOf"], [1, "calendar__content"], [1, "calendar__day-events"], ["class", "day__lane", 4, "ngFor", "ngForOf"], [1, "calendar__lanes"], [1, "calendar__times"], ["class", "time-cell", 3, "height", 4, "ngFor", "ngForOf"], ["class", "day__lane", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "calendar__day"], [1, "day__header", 3, "ngClass"], [1, "day-name"], [1, "day-number", 3, "click"], [1, "day__lane"], ["class", "calendar__item", 3, "component", "event", "date", "click", 4, "ngFor", "ngForOf"], [1, "calendar__item", 3, "component", "event", "date", "click"], [1, "time-cell"], [1, "day__lane", 3, "ngClass"], [1, "time-grid"], ["class", "time-grid__cell", 3, "height", 4, "ngFor", "ngForOf"], ["class", "calendar__marker", 3, "marginTop", 4, "ngIf"], ["class", "calendar__item", 3, "component", "event", "date", "width", "marginLeft", "marginTop", "height", "click", 4, "ngFor", "ngForOf"], [1, "time-grid__cell"], [1, "calendar__marker"]], template: function WeekViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, WeekViewComponent_div_1_Template, 6, 5, "div", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, WeekViewComponent_div_4_Template, 3, 4, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵtemplate(7, WeekViewComponent_div_7_Template, 2, 3, "div", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, WeekViewComponent_div_8_Template, 6, 9, "div", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.weekView.days);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.weekView.days);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.hoursOfDay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.weekView.days);
    } }, directives: [i2.NgForOf, i2.NgClass, i3.EventDisplayComponent, i2.NgIf], pipes: [i4.AllDayEventPipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__lanes[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:row;padding-top:10px}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;flex:1;padding:0 .5rem;border-right:1px solid #efefef;transition:.25s}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]:hover{background-color:#f4f4f4}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]:hover   .time-grid__cell[_ngcontent-%COMP%]{border-top-color:#dbdbdb}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .time-grid[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .time-grid__cell[_ngcontent-%COMP%]{border-top:1px dotted #efefef;width:100%}.calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%], .calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%]:hover{background-color:#eef7fb}.calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%]   .time-grid__cell[_ngcontent-%COMP%]{border-top-color:#c5e3f1}.calendar__day[_ngcontent-%COMP%]{justify-content:center}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]:hover   .day-number[_ngcontent-%COMP%]{cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WeekViewComponent, [{
        type: Component,
        args: [{
                selector: 'week-view',
                templateUrl: './week-view.component.html',
                styleUrls: ['./week-view.component.scss']
            }]
    }], function () { return [{ type: i1.FormattingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1tYXQtY2FsZW5kYXIvc3JjL2xpYi9jb21wb25lbnRzL3dlZWstdmlldy93ZWVrLXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL2NvbXBvbmVudHMvd2Vlay12aWV3L3dlZWstdmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBSTVFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztJQ05uRCw4QkFBOEQ7SUFDMUQsK0JBQWtGO0lBQzlFLGdDQUF1QjtJQUFBLFlBQTBCO0lBQUEsaUJBQU87SUFDeEQsZ0NBQStEO0lBQXRDLG1PQUFxQztJQUFDLFlBQTRCO0lBQUEsaUJBQU87SUFDdEcsaUJBQU07SUFDVixpQkFBTTs7OztJQUp1QixlQUF3RDtJQUF4RCxpRkFBd0Q7SUFDdEQsZUFBMEI7SUFBMUIsb0RBQTBCO0lBQ2MsZUFBNEI7SUFBNUIsc0RBQTRCOzs7O0lBUTNGLHlDQU1rQztJQUE5QiwwUEFBNkI7SUFDakMsaUJBQWdCOzs7OztJQUpaLCtEQUEwQyxtQkFBQSxxQkFBQTs7O0lBSmxELCtCQUF5RDtJQUNyRCw2RkFPZ0I7O0lBQ3BCLGlCQUFNOzs7SUFQb0IsZUFBcUM7SUFBckMsbUVBQXFDOzs7SUFZM0QsK0JBQWdHO0lBQzVGLFlBQ0o7SUFB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LElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFOUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUM7Z0JBQ3hCLElBQUk7Z0JBQ0osV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsTUFBTSxFQUFFLEVBQUU7YUFDYixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7a0ZBbEVRLGlCQUFpQjtzREFBakIsaUJBQWlCO1FDZDlCLDhCQUE0QjtRQUN4QixrRUFLTTtRQUNWLGlCQUFNO1FBRU4sOEJBQStCO1FBQzNCLDhCQUFrQztRQUM5QixrRUFTTTtRQUNWLGlCQUFNO1FBRU4sOEJBQTZCO1FBQ3pCLDhCQUE2QjtRQUN6QixrRUFFTTtRQUNWLGlCQUFNO1FBRU4sa0VBc0JNO1FBQ1YsaUJBQU07UUFDVixpQkFBTTs7UUFyRHlDLGVBQWlCO1FBQWpCLDJDQUFpQjtRQVVqQixlQUFnQjtRQUFoQiwyQ0FBZ0I7UUFjWCxlQUFjO1FBQWQsd0NBQWM7UUFNdEMsZUFBZ0I7UUFBaEIsMkNBQWdCOzt1RkRqQi9CLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFkZCwgc3RhcnRPZldlZWsgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBCYXNlVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9iYXNlLXZpZXcvYmFzZS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXZWVrVmlldyB9IGZyb20gJy4uLy4uL21vZGVscy9DYWxlbmRhcic7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL0NhbGVuZGFyRXZlbnQnO1xuaW1wb3J0IHsgRm9ybWF0dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtYXR0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXkgfSBmcm9tICcuLi8uLi9tb2RlbHMvQ2FsZW5kYXJEYXknO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3dlZWstdmlldycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dlZWstdmlldy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vd2Vlay12aWV3LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV2Vla1ZpZXdDb21wb25lbnQgZXh0ZW5kcyBCYXNlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgd2Vla1ZpZXcgPSB7fSBhcyBXZWVrVmlldztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBmb3JtYXR0aW5nU2VydmljZTogRm9ybWF0dGluZ1NlcnZpY2VcbiAgICApIHtcbiAgICAgICAgc3VwZXIoZm9ybWF0dGluZ1NlcnZpY2UpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlVmlldygpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyQuYWRkKFxuICAgICAgICAgICAgdGhpcy5ldmVudHMkLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKGV2ZW50cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlVmlldygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnN1YnNjcmliZSgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVWaWV3KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5RGF5cyA9IHRoaXMuZ2VuZXJhdGVEYXlzKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlV2Vla1ZpZXcoZW1wdHlEYXlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvcHVsYXRlV2Vla1ZpZXcoZW1wdHlEYXlzOiBDYWxlbmRhckRheVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvcHVsYXRlZERheXM6IENhbGVuZGFyRGF5W10gPSBlbXB0eURheXM7XG5cbiAgICAgICAgcG9wdWxhdGVkRGF5cy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgICAgICBkYXkuZXZlbnRzID0gdGhpcy5ldmVudHMuZmlsdGVyKChldmVudDogQ2FsZW5kYXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzU2FtZURheShkYXkuZGF0ZSwgZXZlbnQuc3RhcnRUaW1lLCBldmVudC5lbmRUaW1lKTtcbiAgICAgICAgICAgIH0pLm1hcCgoZXZlbnQ6IENhbGVuZGFyRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wb3B1bGF0ZUV2ZW50cyhldmVudCwgZGF5KTtcbiAgICAgICAgICAgIH0pLnNvcnQoKGE6IENhbGVuZGFyRXZlbnQsIGI6IENhbGVuZGFyRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0QnlUaW1lKGEsIGIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRheSA9IHRoaXMuY3JlYXRlRXZlbnRHcm91cHMoZGF5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy53ZWVrVmlldy5kYXlzID0gcG9wdWxhdGVkRGF5cztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURheXMoKTogQ2FsZW5kYXJEYXlbXSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkV2Vla1N0YXJ0ID0gc3RhcnRPZldlZWsodGhpcy5zZWxlY3RlZERhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xuICAgICAgICBjb25zdCBkYXlzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoc2VsZWN0ZWRXZWVrU3RhcnQpO1xuICAgICAgICAgICAgZGF0ZSA9IGFkZChkYXRlLCB7IGRheXM6IGkgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRheSA9IG5ldyBDYWxlbmRhckRheSh7XG4gICAgICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICAgICBldmVudEdyb3VwczogW10sXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBbXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRheXMucHVzaChkYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNhbGVuZGFyX19kYXlzXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyX19kYXlcIiAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtWaWV3LmRheXM7XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXlfX2hlYWRlclwiIFtuZ0NsYXNzXT1cInsgJ2RheV9faGVhZGVyLS10b2RheSAnOiBpc1RvZGF5KGRheS5kYXRlKSB9XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheS1uYW1lXCI+e3sgZ2V0RGF5TmFtZShkYXkuZGF0ZSkgfX08L3NwYW4+IFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXktbnVtYmVyXCIgKGNsaWNrKT1cIm5hdmlnYXRlVG9EYXlWaWV3KGRheS5kYXRlKVwiPnt7IGdldERheU51bWJlcihkYXkuZGF0ZSkgfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+IFxuXG48ZGl2IGNsYXNzPVwiY2FsZW5kYXJfX2NvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJfX2RheS1ldmVudHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheV9fbGFuZVwiICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vla1ZpZXcuZGF5c1wiPlxuICAgICAgICAgICAgPGV2ZW50LWRpc3BsYXlcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZXZlbnQgb2YgZGF5LmV2ZW50cyB8IGFsbERheUV2ZW50UGlwZTogdHJ1ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYWxlbmRhcl9faXRlbVwiXG4gICAgICAgICAgICAgICAgW2NvbXBvbmVudF09XCJvcHRpb25zLnJlbmRlckNvbXBvbmVudC53ZWVrXCJcbiAgICAgICAgICAgICAgICBbZXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICAgICAgICAgIFtkYXRlXT1cImRheS5kYXRlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25FdmVudENsaWNrKGV2ZW50KVwiPlxuICAgICAgICAgICAgPC9ldmVudC1kaXNwbGF5PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhcl9fbGFuZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyX190aW1lc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWUtY2VsbFwiICpuZ0Zvcj1cImxldCBob3VyIG9mIGhvdXJzT2ZEYXk7XCIgW3N0eWxlLmhlaWdodC5weF09XCJnZXRDZWxsSGVpZ2h0KGhvdXIpXCI+XG4gICAgICAgICAgICAgICAge3sgaG91ci50aXRsZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXlfX2xhbmVcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrVmlldy5kYXlzXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2RheV9fbGFuZS0tdG9kYXknOiBpc1RvZGF5KGRheS5kYXRlKSB9XCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWdyaWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1ncmlkX19jZWxsXCIgKm5nRm9yPVwibGV0IGhvdXIgb2YgaG91cnNPZkRheTtcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImdldENlbGxIZWlnaHQoaG91cilcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiBcblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyX19tYXJrZXJcIiAqbmdJZj1cImlzVG9kYXkoZGF5LmRhdGUpXCIgW3N0eWxlLm1hcmdpblRvcC5weF09XCJtYXJrZXJQb3NpdGlvblwiPjwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZXZlbnQtZGlzcGxheVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBldmVudCBvZiBkYXkuZXZlbnRzIHwgYWxsRGF5RXZlbnRQaXBlOiBmYWxzZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYWxlbmRhcl9faXRlbVwiXG4gICAgICAgICAgICAgICAgW2NvbXBvbmVudF09XCJvcHRpb25zLnJlbmRlckNvbXBvbmVudC53ZWVrXCJcbiAgICAgICAgICAgICAgICBbZXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICAgICAgICAgIFtkYXRlXT1cImRheS5kYXRlXCIgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLiVdPVwiZXZlbnQuZ3JpZD8ud2lkdGhcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5MZWZ0LiVdPVwiZXZlbnQuZ3JpZD8ub2Zmc2V0TGVmdFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLm1hcmdpblRvcC5weF09XCJldmVudC5ncmlkPy5vZmZzZXRUb3BcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiZXZlbnQuZ3JpZD8uZHVyYXRpb25PZmZzZXRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkV2ZW50Q2xpY2soZXZlbnQpXCI+XG4gICAgICAgICAgICA8L2V2ZW50LWRpc3BsYXk+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19
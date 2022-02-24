import { Component } from '@angular/core';
import { BaseViewComponent } from '../shared/base-view/base-view.component';
import { tap } from 'rxjs/operators';
import { CalendarDay } from '../../models/CalendarDay';
import * as i0 from "@angular/core";
import * as i1 from "../../services/formatting.service";
import * as i2 from "@angular/common";
import * as i3 from "../shared/event-display/event-display.component";
import * as i4 from "../../pipes/all-day-event.pipe";
function DayViewComponent_event_display_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "event-display", 17);
    i0.ɵɵlistener("click", function DayViewComponent_event_display_10_Template_event_display_click_0_listener() { i0.ɵɵrestoreView(_r7); const event_r5 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onEventClick(event_r5); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("component", ctx_r0.options.renderComponent.day)("event", event_r5)("date", ctx_r0.selectedDate);
} }
function DayViewComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r1.getCellHeight(hour_r8), "px");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", hour_r8.title, " ");
} }
function DayViewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 19);
} if (rf & 2) {
    const hour_r9 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r2.getCellHeight(hour_r9), "px");
} }
function DayViewComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 20);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("margin-top", ctx_r3.markerPosition, "px");
} }
function DayViewComponent_event_display_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "event-display", 17);
    i0.ɵɵlistener("click", function DayViewComponent_event_display_19_Template_event_display_click_0_listener() { i0.ɵɵrestoreView(_r12); const event_r10 = ctx.$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onEventClick(event_r10); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", event_r10.grid == null ? null : event_r10.grid.width, "%")("margin-left", event_r10.grid == null ? null : event_r10.grid.offsetLeft, "%")("margin-top", event_r10.grid == null ? null : event_r10.grid.offsetTop, "px")("height", event_r10.grid == null ? null : event_r10.grid.durationOffset, "px");
    i0.ɵɵproperty("component", ctx_r4.options.renderComponent.day)("event", event_r10)("date", ctx_r4.selectedDate);
} }
const _c0 = function (a0) { return { "day__header--today ": a0 }; };
const _c1 = function (a0) { return { "day__lane--today": a0 }; };
export class DayViewComponent extends BaseViewComponent {
    constructor(formattingService) {
        super(formattingService);
        this.dayView = {};
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
            const emptyDay = this.generateDays();
            this.populateDayView(emptyDay);
        }
    }
    populateDayView(emptyDay) {
        const populatedDay = emptyDay;
        const events = this.events.filter((event) => {
            return this.isSameDay(populatedDay.date, event.startTime, event.endTime);
        }).map((event) => {
            return this.populateEvents(event, populatedDay);
        }).sort((a, b) => {
            return this.sortByTime(a, b);
        });
        populatedDay.events = events;
        this.dayView = this.createEventGroups(populatedDay);
    }
    generateDays() {
        const date = new Date(this.selectedDate);
        const day = new CalendarDay({
            date,
            eventGroups: [],
            events: [],
            eventCount: 0
        });
        return day;
    }
}
DayViewComponent.ɵfac = function DayViewComponent_Factory(t) { return new (t || DayViewComponent)(i0.ɵɵdirectiveInject(i1.FormattingService)); };
DayViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DayViewComponent, selectors: [["day-view"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 21, vars: 19, consts: [[1, "calendar__days"], [1, "calendar__day"], [1, "day__header", 3, "ngClass"], [1, "day-name"], [1, "day-number"], [1, "calendar__content"], [1, "calendar__day-events"], [1, "day__lane"], ["class", "calendar__item", 3, "component", "event", "date", "click", 4, "ngFor", "ngForOf"], [1, "calendar__lanes"], [1, "calendar__times"], ["class", "time-cell", 3, "height", 4, "ngFor", "ngForOf"], [1, "day__lane", 3, "ngClass"], [1, "time-grid"], ["class", "time-grid__cell", 3, "height", 4, "ngFor", "ngForOf"], ["class", "calendar__marker", 3, "marginTop", 4, "ngIf"], ["class", "calendar__item", 3, "component", "event", "date", "width", "marginLeft", "marginTop", "height", "click", 4, "ngFor", "ngForOf"], [1, "calendar__item", 3, "component", "event", "date", "click"], [1, "time-cell"], [1, "time-grid__cell"], [1, "calendar__marker"]], template: function DayViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "div", 6);
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵtemplate(10, DayViewComponent_event_display_10_Template, 1, 3, "event-display", 8);
        i0.ɵɵpipe(11, "allDayEventPipe");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 9);
        i0.ɵɵelementStart(13, "div", 10);
        i0.ɵɵtemplate(14, DayViewComponent_div_14_Template, 2, 3, "div", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 12);
        i0.ɵɵelementStart(16, "div", 13);
        i0.ɵɵtemplate(17, DayViewComponent_div_17_Template, 1, 2, "div", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(18, DayViewComponent_div_18_Template, 1, 2, "div", 15);
        i0.ɵɵtemplate(19, DayViewComponent_event_display_19_Template, 1, 11, "event-display", 16);
        i0.ɵɵpipe(20, "allDayEventPipe");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c0, ctx.isToday(ctx.selectedDate)));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.getDayName(ctx.selectedDate));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.getDayNumber(ctx.selectedDate));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(11, 9, ctx.dayView.events, true));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.hoursOfDay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(17, _c1, ctx.isToday(ctx.selectedDate)));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.hoursOfDay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isToday(ctx.selectedDate));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(20, 12, ctx.dayView.events, false));
    } }, directives: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.EventDisplayComponent], pipes: [i4.AllDayEventPipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__lanes[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:row;padding-top:10px}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;flex:1;padding:0 .5rem;border-right:1px solid #efefef;transition:.25s;background-color:#f4f4f4}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .time-grid[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .time-grid__cell[_ngcontent-%COMP%]{border-top:1px dotted #dbdbdb;width:100%}.calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%]{background-color:#eef7fb}.calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%]   .time-grid__cell[_ngcontent-%COMP%]{border-top-color:#c5e3f1}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DayViewComponent, [{
        type: Component,
        args: [{
                selector: 'day-view',
                templateUrl: './day-view.component.html',
                styleUrls: ['./day-view.component.scss']
            }]
    }], function () { return [{ type: i1.FormattingService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL2NvbXBvbmVudHMvZGF5LXZpZXcvZGF5LXZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL2NvbXBvbmVudHMvZGF5LXZpZXcvZGF5LXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUk1RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7OztJQ00zQyx5Q0FNa0M7SUFBOUIsZ1BBQTZCO0lBQ2pDLGlCQUFnQjs7OztJQUpaLDhEQUF5QyxtQkFBQSw2QkFBQTs7O0lBVTdDLCtCQUFnRztJQUM1RixZQUNKO0lBQUEsaUJBQU07Ozs7SUFGa0QsNkRBQXVDO0lBQzNGLGVBQ0o7SUFESSw4Q0FDSjs7O0lBS0ksMEJBQTRHOzs7O0lBQTlDLDZEQUF1Qzs7O0lBR3pHLDBCQUF3Rzs7O0lBQTVDLHlEQUFxQzs7OztJQUVqRyx5Q0FVa0M7SUFBOUIscVBBQTZCO0lBQ2pDLGlCQUFnQjs7OztJQUxaLGtGQUFtQywrRUFBQSw4RUFBQSwrRUFBQTtJQUhuQyw4REFBeUMsb0JBQUEsNkJBQUE7Ozs7QUQzQnpELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxpQkFBaUI7SUFHbkQsWUFDSSxpQkFBb0M7UUFFcEMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFMN0IsWUFBTyxHQUFHLEVBQWEsQ0FBQztJQU14QixDQUFDO0lBRUQs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YztRQUdqQyxlQUEyQjtRQUEzQixvREFBMkI7UUFHcEMsZUFBMEM7UUFBMUMsMkVBQTBDOzt1RkR6Qi9ELGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2Utdmlldy9iYXNlLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IERheVZpZXcgfSBmcm9tICcuLi8uLi9tb2RlbHMvQ2FsZW5kYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJy4uLy4uL21vZGVscy9DYWxlbmRhckV2ZW50JztcbmltcG9ydCB7IEZvcm1hdHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZm9ybWF0dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhbGVuZGFyRGF5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL0NhbGVuZGFyRGF5JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkYXktdmlldycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RheS12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kYXktdmlldy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERheVZpZXdDb21wb25lbnQgZXh0ZW5kcyBCYXNlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgZGF5VmlldyA9IHt9IGFzIERheVZpZXc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZm9ybWF0dGluZ1NlcnZpY2U6IEZvcm1hdHRpbmdTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGZvcm1hdHRpbmdTZXJ2aWNlKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVZpZXcoKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLmFkZChcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzJC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcChldmVudHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdlbmVyYXRlVmlldygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBlbXB0eURheSA9IHRoaXMuZ2VuZXJhdGVEYXlzKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRGF5VmlldyhlbXB0eURheSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwb3B1bGF0ZURheVZpZXcoZW1wdHlEYXk6IENhbGVuZGFyRGF5KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvcHVsYXRlZERheTogQ2FsZW5kYXJEYXkgPSBlbXB0eURheTtcblxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLmV2ZW50cy5maWx0ZXIoKGV2ZW50OiBDYWxlbmRhckV2ZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1NhbWVEYXkocG9wdWxhdGVkRGF5LmRhdGUsIGV2ZW50LnN0YXJ0VGltZSwgZXZlbnQuZW5kVGltZSk7XG4gICAgICAgICAgICB9KS5tYXAoKGV2ZW50OiBDYWxlbmRhckV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9wdWxhdGVFdmVudHMoZXZlbnQsIHBvcHVsYXRlZERheSk7XG4gICAgICAgICAgICB9KS5zb3J0KChhOiBDYWxlbmRhckV2ZW50LCBiOiBDYWxlbmRhckV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ydEJ5VGltZShhLCBiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHBvcHVsYXRlZERheS5ldmVudHMgPSBldmVudHM7XG5cbiAgICAgICAgdGhpcy5kYXlWaWV3ID0gdGhpcy5jcmVhdGVFdmVudEdyb3Vwcyhwb3B1bGF0ZWREYXkpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGF5cygpOiBDYWxlbmRhckRheSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZSk7XG5cbiAgICAgICAgY29uc3QgZGF5OiBDYWxlbmRhckRheSA9IG5ldyBDYWxlbmRhckRheSh7XG4gICAgICAgICAgICBkYXRlLFxuICAgICAgICAgICAgZXZlbnRHcm91cHM6IFtdLFxuICAgICAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgICAgIGV2ZW50Q291bnQ6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGRheTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FsZW5kYXJfX2RheXNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJfX2RheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5X19oZWFkZXJcIiBbbmdDbGFzc109XCJ7ICdkYXlfX2hlYWRlci0tdG9kYXkgJzogaXNUb2RheShzZWxlY3RlZERhdGUpIH1cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGF5LW5hbWVcIj57eyBnZXREYXlOYW1lKHNlbGVjdGVkRGF0ZSkgfX08L3NwYW4+IFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkYXktbnVtYmVyXCI+e3sgZ2V0RGF5TnVtYmVyKHNlbGVjdGVkRGF0ZSkgfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+IFxuXG48ZGl2IGNsYXNzPVwiY2FsZW5kYXJfX2NvbnRlbnRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJfX2RheS1ldmVudHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRheV9fbGFuZVwiPlxuICAgICAgICAgICAgPGV2ZW50LWRpc3BsYXlcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZXZlbnQgb2YgZGF5Vmlldy5ldmVudHMgfCBhbGxEYXlFdmVudFBpcGU6IHRydWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FsZW5kYXJfX2l0ZW1cIlxuICAgICAgICAgICAgICAgIFtjb21wb25lbnRdPVwib3B0aW9ucy5yZW5kZXJDb21wb25lbnQuZGF5XCJcbiAgICAgICAgICAgICAgICBbZXZlbnRdPVwiZXZlbnRcIlxuICAgICAgICAgICAgICAgIFtkYXRlXT1cInNlbGVjdGVkRGF0ZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRXZlbnRDbGljayhldmVudClcIj5cbiAgICAgICAgICAgIDwvZXZlbnQtZGlzcGxheT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJfX2xhbmVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhcl9fdGltZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWNlbGxcIiAqbmdGb3I9XCJsZXQgaG91ciBvZiBob3Vyc09mRGF5O1wiIFtzdHlsZS5oZWlnaHQucHhdPVwiZ2V0Q2VsbEhlaWdodChob3VyKVwiPlxuICAgICAgICAgICAgICAgIHt7IGhvdXIudGl0bGUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF5X19sYW5lXCIgW25nQ2xhc3NdPVwieyAnZGF5X19sYW5lLS10b2RheSc6IGlzVG9kYXkoc2VsZWN0ZWREYXRlKSB9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1ncmlkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWUtZ3JpZF9fY2VsbFwiICpuZ0Zvcj1cImxldCBob3VyIG9mIGhvdXJzT2ZEYXk7XCIgW3N0eWxlLmhlaWdodC5weF09XCJnZXRDZWxsSGVpZ2h0KGhvdXIpXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhcl9fbWFya2VyXCIgKm5nSWY9XCJpc1RvZGF5KHNlbGVjdGVkRGF0ZSlcIiBbc3R5bGUubWFyZ2luVG9wLnB4XT1cIm1hcmtlclBvc2l0aW9uXCI+PC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxldmVudC1kaXNwbGF5XG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGV2ZW50IG9mIGRheVZpZXcuZXZlbnRzIHwgYWxsRGF5RXZlbnRQaXBlOiBmYWxzZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYWxlbmRhcl9faXRlbVwiXG4gICAgICAgICAgICAgICAgW2NvbXBvbmVudF09XCJvcHRpb25zLnJlbmRlckNvbXBvbmVudC5kYXlcIlxuICAgICAgICAgICAgICAgIFtldmVudF09XCJldmVudFwiXG4gICAgICAgICAgICAgICAgW2RhdGVdPVwic2VsZWN0ZWREYXRlXCIgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLiVdPVwiZXZlbnQuZ3JpZD8ud2lkdGhcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5tYXJnaW5MZWZ0LiVdPVwiZXZlbnQuZ3JpZD8ub2Zmc2V0TGVmdFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLm1hcmdpblRvcC5weF09XCJldmVudC5ncmlkPy5vZmZzZXRUb3BcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiZXZlbnQuZ3JpZD8uZHVyYXRpb25PZmZzZXRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkV2ZW50Q2xpY2soZXZlbnQpXCI+XG4gICAgICAgICAgICA8L2V2ZW50LWRpc3BsYXk+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19
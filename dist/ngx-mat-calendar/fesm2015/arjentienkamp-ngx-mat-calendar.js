import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵtextInterpolate2, ɵɵproperty, ɵɵelement, ɵɵstyleProp, ɵɵclassProp, ɵɵdirectiveInject, ɵɵdefineComponent, Component, Input, ɵɵpureFunction1, Inject, EventEmitter, Output, ComponentFactoryResolver, ɵɵviewQuery, ViewContainerRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplateRefExtractor, ViewEncapsulation, ViewChild, ɵɵdefinePipe, Pipe, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵtextInterpolate1, ɵɵInheritDefinitionFeature, ɵɵpipe, ɵɵpipeBind2, ɵɵreference, ElementRef, ɵɵresolveWindow, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵgetInheritedFactory } from '@angular/core';
import { format, isToday, isSameDay, isBefore, areIntervalsOverlapping, endOfDay, intervalToDuration, startOfDay, getHours, getMinutes, startOfWeek, add, eachWeekOfInterval, startOfMonth, endOfMonth, getWeek, sub, isSameMonth, toDate } from 'date-fns';
import { MatMenuTrigger, MatMenu, MatMenuModule } from '@angular/material/menu';
import { Subscription, interval, Subject, fromEvent } from 'rxjs';
import { tap as tap$1, takeUntil, throttle } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgIf, NgStyle, NgClass, NgForOf } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { DateAdapter, MatOption, NativeDateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { v4 } from 'uuid';
import { tap } from 'rxjs/internal/operators/tap';
import { CdkConnectedOverlay, CdkOverlayOrigin, OverlayModule } from '@angular/cdk/overlay';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

const DAY = 'day';
const WEEK = 'week';
const MONTH = 'month';

const hoursOfDay = [
    { title: '00:00' },
    { title: '01:00' },
    { title: '02:00' },
    { title: '03:00' },
    { title: '04:00' },
    { title: '05:00' },
    { title: '06:00' },
    { title: '07:00' },
    { title: '08:00' },
    { title: '09:00' },
    { title: '10:00' },
    { title: '11:00' },
    { title: '12:00' },
    { title: '13:00' },
    { title: '14:00' },
    { title: '15:00' },
    { title: '16:00' },
    { title: '17:00' },
    { title: '18:00' },
    { title: '19:00' },
    { title: '20:00' },
    { title: '21:00' },
    { title: '22:00' },
    { title: '23:00' },
    { title: '00:00', isEnd: true }
];
const daysOfWeek = [
    { title: 'Mon' },
    { title: 'Tue' },
    { title: 'Wed' },
    { title: 'Thu' },
    { title: 'Fri' },
    { title: 'Sat' },
    { title: 'Sun' }
];
var Periods;
(function (Periods) {
    Periods["day"] = "days";
    Periods["week"] = "weeks";
    Periods["month"] = "months";
})(Periods || (Periods = {}));

const PREVIOUS = 'prev';
const NEXT = 'next';

class FormattingService {
    getTime(date) {
        return format(date, 'HH:mm');
    }
    isToday(date) {
        return isToday(date);
    }
    getDayName(date) {
        return format(date, 'E');
    }
    getDayNumber(date) {
        return format(date, 'd');
    }
}
FormattingService.ɵfac = function FormattingService_Factory(t) { return new (t || FormattingService)(); };
FormattingService.ɵprov = ɵɵdefineInjectable({ token: FormattingService, factory: FormattingService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FormattingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

function EventRenderDayComponent_div_0_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "place");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r4.event.location);
} }
function EventRenderDayComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 4);
    ɵɵelementStart(2, "p");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5);
    ɵɵelementStart(5, "p");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵtemplate(7, EventRenderDayComponent_div_0_div_1_div_7_Template, 5, 1, "div", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.event.title);
    ɵɵadvance(3);
    ɵɵtextInterpolate2("", ctx_r1.startTime, " - ", ctx_r1.endTime, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.event.location);
} }
function EventRenderDayComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 4);
    ɵɵelementStart(2, "p", 8);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r2.event.title);
} }
function EventRenderDayComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 9);
} }
function EventRenderDayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, EventRenderDayComponent_div_0_div_1_Template, 8, 4, "div", 2);
    ɵɵtemplate(2, EventRenderDayComponent_div_0_div_2_Template, 4, 1, "div", 2);
    ɵɵtemplate(3, EventRenderDayComponent_div_0_div_3_Template, 1, 0, "div", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("background-color", ctx_r0.event.color);
    ɵɵclassProp("all-day", ctx_r0.event.allDay);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.event.allDay);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.event.allDay);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isSameDay && !ctx_r0.endsToday);
} }
class EventRenderDayComponent {
    constructor(formattingService) {
        this.formattingService = formattingService;
    }
    ngOnInit() {
        this.startTime = this.formattingService.getTime(this.event.startTime);
        this.endTime = this.formattingService.getTime(this.event.endTime);
        this.isSameDay = isSameDay(this.event.startTime, this.event.endTime);
        this.endsToday = isSameDay(this.date, this.event.endTime);
    }
}
EventRenderDayComponent.ɵfac = function EventRenderDayComponent_Factory(t) { return new (t || EventRenderDayComponent)(ɵɵdirectiveInject(FormattingService)); };
EventRenderDayComponent.ɵcmp = ɵɵdefineComponent({ type: EventRenderDayComponent, selectors: [["event-render-day"]], inputs: { event: "event", date: "date" }, decls: 1, vars: 1, consts: [["class", "event", 3, "all-day", "backgroundColor", 4, "ngIf"], [1, "event"], [4, "ngIf"], ["class", "event__multiday", 4, "ngIf"], [1, "event__header"], [1, "event__metadata"], ["class", "event__location", 4, "ngIf"], [1, "event__location"], [1, "title"], [1, "event__multiday"]], template: function EventRenderDayComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, EventRenderDayComponent_div_0_Template, 4, 7, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.event);
    } }, directives: [NgIf, MatIcon], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.event[_ngcontent-%COMP%], event-render[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.event[_ngcontent-%COMP%]{justify-content:space-between;border-radius:4px;overflow:hidden}.event.all-day[_ngcontent-%COMP%]{height:auto}.event__header[_ngcontent-%COMP%]{display:flex;text-align:left;color:#546e7a;padding:.25rem;border-bottom:1px solid hsla(0,0%,100%,.5)}.event__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}.event__metadata[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;font-weight:100;color:#546e7a;padding:.25rem}.event__metadata[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.25rem}.event__location[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.event__location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px;margin-right:.25rem}.event__location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EventRenderDayComponent, [{
        type: Component,
        args: [{
                selector: 'event-render-day',
                templateUrl: './event-render-day.component.html',
                styleUrls: ['./event-render-day.component.scss']
            }]
    }], function () { return [{ type: FormattingService }]; }, { event: [{
            type: Input
        }], date: [{
            type: Input
        }] }); })();

function EventRenderMonthComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleProp("background-color", ctx_r1.event.color);
} }
function EventRenderMonthComponent_div_0_p_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "p", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.startTime);
} }
function EventRenderMonthComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 9);
} }
const _c0 = function (a0) { return { "backgroundColor": a0 }; };
function EventRenderMonthComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, EventRenderMonthComponent_div_0_span_2_Template, 1, 2, "span", 3);
    ɵɵtemplate(3, EventRenderMonthComponent_div_0_p_3_Template, 2, 1, "p", 4);
    ɵɵelementStart(4, "p", 5);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(6, EventRenderMonthComponent_div_0_div_6_Template, 1, 0, "div", 6);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassProp("all-day", ctx_r0.event.allDay)("past-event", ctx_r0.isPastEvent());
    ɵɵproperty("matTooltip", ctx_r0.eventTooltip)("ngStyle", ɵɵpureFunction1(10, _c0, ctx_r0.event.allDay ? ctx_r0.event.color : ""));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.event.allDay);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.event.allDay);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.event.title);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isSameDay && !ctx_r0.endsToday);
} }
class EventRenderMonthComponent {
    constructor(formattingService) {
        this.formattingService = formattingService;
    }
    ngOnInit() {
        this.startTime = this.formattingService.getTime(this.event.startTime);
        this.endTime = this.formattingService.getTime(this.event.endTime);
        this.isSameDay = isSameDay(this.event.startTime, this.event.endTime);
        this.endsToday = isSameDay(this.date, this.event.endTime);
        this.eventTooltip = this.getEventTooltip();
    }
    isPastEvent() {
        return isBefore(this.event.date, new Date());
    }
    getEventTooltip() {
        if (this.event.location) {
            return `${this.event.title} (${this.startTime} - ${this.endTime}) @ ${this.event.location}`;
        }
        return `${this.event.title} (${this.startTime} - ${this.endTime})`;
    }
}
EventRenderMonthComponent.ɵfac = function EventRenderMonthComponent_Factory(t) { return new (t || EventRenderMonthComponent)(ɵɵdirectiveInject(FormattingService)); };
EventRenderMonthComponent.ɵcmp = ɵɵdefineComponent({ type: EventRenderMonthComponent, selectors: [["event-render-month"]], inputs: { event: "event", date: "date" }, decls: 1, vars: 1, consts: [["class", "event", 4, "ngIf"], [1, "event"], [1, "even__line", 3, "matTooltip", "ngStyle"], ["class", "event-color", 3, "backgroundColor", 4, "ngIf"], ["class", "metadata", 4, "ngIf"], [1, "title"], ["class", "event__multiday", 4, "ngIf"], [1, "event-color"], [1, "metadata"], [1, "event__multiday"]], template: function EventRenderMonthComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, EventRenderMonthComponent_div_0_Template, 7, 12, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.event);
    } }, directives: [NgIf, MatTooltip, NgStyle], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}event-render[_nghost-%COMP%]{height:100%}.event[_ngcontent-%COMP%], event-render[_nghost-%COMP%]{display:flex;flex-direction:column}.event[_ngcontent-%COMP%]{justify-content:space-between;overflow:hidden;font-size:12px}.even__line[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:left;color:#546e7a;padding:.25rem}.even__line.all-day[_ngcontent-%COMP%]{border-radius:2px;width:100%;overflow:hidden;margin-top:.25rem}.even__line.past-event[_ngcontent-%COMP%]{opacity:.7}.even__line[_ngcontent-%COMP%]   .event-color[_ngcontent-%COMP%]{min-width:10px;height:10px;border-radius:10px;margin-right:.5rem}.even__line[_ngcontent-%COMP%]   p.metadata[_ngcontent-%COMP%]{margin-right:.5rem;margin-bottom:0}.even__line[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EventRenderMonthComponent, [{
        type: Component,
        args: [{
                selector: 'event-render-month',
                templateUrl: './event-render-month.component.html',
                styleUrls: ['./event-render-month.component.scss']
            }]
    }], function () { return [{ type: FormattingService }]; }, { event: [{
            type: Input
        }], date: [{
            type: Input
        }] }); })();

function EventRenderWeekComponent_div_0_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "place");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r4.event.location);
} }
function EventRenderWeekComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 4);
    ɵɵelementStart(2, "p");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5);
    ɵɵelementStart(5, "p");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵtemplate(7, EventRenderWeekComponent_div_0_div_1_div_7_Template, 5, 1, "div", 6);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.event.title);
    ɵɵadvance(3);
    ɵɵtextInterpolate2("", ctx_r1.startTime, " - ", ctx_r1.endTime, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.event.location);
} }
function EventRenderWeekComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "div", 4);
    ɵɵelementStart(2, "p", 8);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r2.event.title);
} }
function EventRenderWeekComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 9);
} }
function EventRenderWeekComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, EventRenderWeekComponent_div_0_div_1_Template, 8, 4, "div", 2);
    ɵɵtemplate(2, EventRenderWeekComponent_div_0_div_2_Template, 4, 1, "div", 2);
    ɵɵtemplate(3, EventRenderWeekComponent_div_0_div_3_Template, 1, 0, "div", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("background-color", ctx_r0.event.color);
    ɵɵclassProp("all-day", ctx_r0.event.allDay);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.event.allDay);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.event.allDay);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isSameDay && !ctx_r0.endsToday);
} }
class EventRenderWeekComponent {
    constructor(formattingService) {
        this.formattingService = formattingService;
    }
    ngOnInit() {
        this.startTime = this.formattingService.getTime(this.event.startTime);
        this.endTime = this.formattingService.getTime(this.event.endTime);
        this.isSameDay = isSameDay(this.event.startTime, this.event.endTime);
        this.endsToday = isSameDay(this.date, this.event.endTime);
    }
}
EventRenderWeekComponent.ɵfac = function EventRenderWeekComponent_Factory(t) { return new (t || EventRenderWeekComponent)(ɵɵdirectiveInject(FormattingService)); };
EventRenderWeekComponent.ɵcmp = ɵɵdefineComponent({ type: EventRenderWeekComponent, selectors: [["event-render-week"]], inputs: { event: "event", date: "date" }, decls: 1, vars: 1, consts: [["class", "event", 3, "all-day", "backgroundColor", 4, "ngIf"], [1, "event"], [4, "ngIf"], ["class", "event__multiday", 4, "ngIf"], [1, "event__header"], [1, "event__metadata"], ["class", "event__location", 4, "ngIf"], [1, "event__location"], [1, "title"], [1, "event__multiday"]], template: function EventRenderWeekComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, EventRenderWeekComponent_div_0_Template, 4, 7, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.event);
    } }, directives: [NgIf, MatIcon], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.event[_ngcontent-%COMP%], event-render[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.event[_ngcontent-%COMP%]{justify-content:space-between;border-radius:4px;overflow:hidden}.event.all-day[_ngcontent-%COMP%]{height:auto}.event__header[_ngcontent-%COMP%]{display:flex;text-align:left;color:#546e7a;padding:.25rem;border-bottom:1px solid hsla(0,0%,100%,.5)}.event__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}.event__metadata[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;font-weight:100;color:#546e7a;padding:.25rem}.event__metadata[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.25rem}.event__location[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.event__location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px;margin-right:.25rem}.event__location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EventRenderWeekComponent, [{
        type: Component,
        args: [{
                selector: 'event-render-week',
                templateUrl: './event-render-week.component.html',
                styleUrls: ['./event-render-week.component.scss']
            }]
    }], function () { return [{ type: FormattingService }]; }, { event: [{
            type: Input
        }], date: [{
            type: Input
        }] }); })();

var colors;
(function (colors) {
    colors["grey"] = "#cfd8dc";
    colors["blue"] = "#b3e5fc";
    colors["pink"] = "#ffc1e3";
    colors["green"] = "#c8e6c9";
})(colors || (colors = {}));

class CalendarEvent {
    constructor(init) {
        this.title = '';
        this.allDay = false;
        this.color = colors.grey;
        this.grid = new CalendarEventGrid();
        Object.assign(this, init);
    }
}
class CalendarEventGrid {
    constructor() {
        this.offsetTop = 0;
        this.offsetLeft = 0;
        this.width = 100;
        this.durationOffset = 0;
        this.eventsInGroup = 0;
        this.eventGroups = [];
    }
}

class CalendarOptions {
    constructor(init) {
        this.pixelsPerMinute = 1.3;
        this.dateFormat = 'DD-MM-YYYY';
        this.timeFormat = 'HH:mm';
        this.renderComponent = {
            day: EventRenderDayComponent,
            week: EventRenderWeekComponent,
            month: EventRenderMonthComponent
        };
        this.calendarEventType = typeof CalendarEvent;
        this.jumpToSpy = true;
        this.enableDatePickerButton = true;
        this.enableAddEventButton = true;
        this.enableViewToggle = true;
        this.enableKeyboardShortcutDialog = true;
        this.locale = 'nl';
        this.compact = false;
        this.view = MONTH;
        Object.assign(this, init);
    }
    get getPixelsPerMinute() {
        if (this.compact) {
            return this.pixelsPerMinute / 2;
        }
        return this.pixelsPerMinute;
    }
}

function KeyboardShortcutDialogComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "span");
    ɵɵtext(2, "Add event");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵelementStart(4, "span", 3);
    ɵɵtext(5, "n");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
class KeyboardShortcutDialogComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() { }
}
KeyboardShortcutDialogComponent.ɵfac = function KeyboardShortcutDialogComponent_Factory(t) { return new (t || KeyboardShortcutDialogComponent)(ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
KeyboardShortcutDialogComponent.ɵcmp = ɵɵdefineComponent({ type: KeyboardShortcutDialogComponent, selectors: [["keyboard-shortcut-dialog"]], decls: 29, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "content-row"], [1, "keyboard-shortcut"], ["class", "content-row", 4, "ngIf"]], template: function KeyboardShortcutDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h2", 0);
        ɵɵtext(1, "Keyboard Shortcuts");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-dialog-content", 1);
        ɵɵelement(3, "mat-divider");
        ɵɵelementStart(4, "div", 2);
        ɵɵelementStart(5, "span");
        ɵɵtext(6, "Switch to day view");
        ɵɵelementEnd();
        ɵɵelementStart(7, "span");
        ɵɵelementStart(8, "span", 3);
        ɵɵtext(9, "d");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "div", 2);
        ɵɵelementStart(11, "span");
        ɵɵtext(12, "Switch to week view");
        ɵɵelementEnd();
        ɵɵelementStart(13, "span");
        ɵɵelementStart(14, "span", 3);
        ɵɵtext(15, "w");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(16, "div", 2);
        ɵɵelementStart(17, "span");
        ɵɵtext(18, "Switch to month view");
        ɵɵelementEnd();
        ɵɵelementStart(19, "span");
        ɵɵelementStart(20, "span", 3);
        ɵɵtext(21, "m");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(22, "div", 2);
        ɵɵelementStart(23, "span");
        ɵɵtext(24, "Go to today");
        ɵɵelementEnd();
        ɵɵelementStart(25, "span");
        ɵɵelementStart(26, "span", 3);
        ɵɵtext(27, "t");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(28, KeyboardShortcutDialogComponent_div_28_Template, 6, 0, "div", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(28);
        ɵɵproperty("ngIf", ctx.data.enableAddEventButton);
    } }, directives: [MatDialogTitle, MatDialogContent, MatDivider, NgIf], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.mat-dialog-content[_ngcontent-%COMP%]{width:450px}.mat-dialog-content[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{margin-bottom:1rem}.mat-dialog-content[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:50px}.mat-dialog-content[_ngcontent-%COMP%]   .keyboard-shortcut[_ngcontent-%COMP%]{display:block;padding:.5rem 0;border:1px solid #efefef;border-radius:4px;width:40px;text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(KeyboardShortcutDialogComponent, [{
        type: Component,
        args: [{
                selector: 'keyboard-shortcut-dialog',
                templateUrl: './keyboard-shortcut-dialog.component.html',
                styleUrls: ['./keyboard-shortcut-dialog.component.scss']
            }]
    }], function () { return [{ type: CalendarOptions, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

class BaseViewComponent {
    constructor(formattingService) {
        this.formattingService = formattingService;
        this.eventClick = new EventEmitter();
        this.changeToDayView = new EventEmitter();
        this.subscriptions$ = new Subscription();
        this.markerPosition = 0;
        this.hoursOfDay = hoursOfDay;
        this.pixelsPerHour = 0;
        this.selectedDate = new Date();
        this.events = [];
    }
    ngOnInit() {
        this.subscriptions$.add(this.options$.pipe(tap((options) => {
            this.options = options;
            this.markerPosition = this.calculateMarkerPosition();
            this.pixelsPerHour = this.options.getPixelsPerMinute * 60;
        })).subscribe());
        this.subscriptions$.add(this.selectedDate$.pipe(tap(selectedDate => {
            this.selectedDate = selectedDate;
        })).subscribe());
        this.subscriptions$.add(interval(60000).pipe(tap(() => {
            this.markerPosition = this.calculateMarkerPosition();
        })).subscribe());
    }
    createEventGroups(day) {
        day.events.map((event) => {
            const uuid = v4();
            let eventGroup = [];
            if (event.grid) {
                const eventsNotAllDay = day.events.filter(x => !x.allDay);
                eventGroup = this.getOverlappingEvents(event, eventsNotAllDay, event.grid.eventGroups);
                eventGroup.map((overlapEvent) => {
                    if (overlapEvent.grid) {
                        overlapEvent.grid.eventGroups.push(uuid);
                        overlapEvent.grid.eventsInGroup = eventGroup.length;
                    }
                    if (!day.eventGroups.includes(uuid)) {
                        day.eventGroups.push(uuid);
                    }
                });
            }
        });
        this.setEventSizes(day);
        return day;
    }
    populateEvents(event, day) {
        const populatedEvent = new CalendarEvent(Object.assign(Object.assign({}, event), { grid: this.calculatePixelsOffsetForEvent(event, day) }));
        return populatedEvent;
    }
    getOverlappingEvents(event, events, eventGroups) {
        return events.filter((compareEvent) => {
            const eventsDoOverlap = areIntervalsOverlapping({ start: event.startTime, end: event.endTime }, { start: compareEvent.startTime, end: compareEvent.endTime }, { inclusive: true });
            let isAlreadyInEventGroup = false;
            if (compareEvent.grid) {
                isAlreadyInEventGroup = compareEvent.grid.eventGroups.some((eventGroup) => {
                    return eventGroups.includes(eventGroup);
                });
            }
            return eventsDoOverlap && !isAlreadyInEventGroup;
        });
    }
    setEventSizes(day) {
        day.eventGroups.forEach(eventGroup => {
            const eventGroupEvents = day.events.filter((event) => {
                var _a;
                return (_a = event.grid) === null || _a === void 0 ? void 0 : _a.eventGroups.includes(eventGroup);
            });
            let index = 0;
            eventGroupEvents.forEach((event) => {
                if (event.grid) {
                    event.grid.width = 100 / (eventGroupEvents.length);
                    event.grid.offsetLeft = event.grid.width * index;
                }
                // check if already has a width/offsetLeft to determine if it's in eventgroup A or B
                index++;
            });
        });
    }
    calculatePixelsOffsetForEvent(event, day) {
        let grid = new CalendarEventGrid();
        const startTime = event.startTime;
        const endTime = isSameDay(event.startTime, event.endTime) ?
            event.endTime :
            endOfDay(event.startTime);
        const eventDurationFromStartTime = intervalToDuration({
            start: startTime,
            end: endTime
        });
        const eventDurationFromMidnight = intervalToDuration({
            start: startOfDay(day.date),
            end: event.endTime
        });
        eventDurationFromStartTime.hours = eventDurationFromStartTime.hours || 0;
        eventDurationFromStartTime.minutes = eventDurationFromStartTime.minutes || 0;
        eventDurationFromMidnight.hours = eventDurationFromMidnight.hours || 0;
        eventDurationFromMidnight.minutes = eventDurationFromMidnight.minutes || 0;
        const offsetInMinutes = !isSameDay(event.startTime, event.endTime) && isSameDay(event.endTime, day.date) ?
            0 : Math.abs(getHours(startTime)) * 60 + getMinutes(startTime);
        const durationOffset = !isSameDay(event.startTime, event.endTime) && isSameDay(event.endTime, day.date) ?
            eventDurationFromMidnight.hours * 60 + eventDurationFromMidnight.minutes :
            eventDurationFromStartTime.hours * 60 + eventDurationFromStartTime.minutes;
        grid = Object.assign(Object.assign({}, grid), { offsetTop: offsetInMinutes * this.options.getPixelsPerMinute, durationOffset: durationOffset * this.options.getPixelsPerMinute });
        return grid;
    }
    getCellHeight(time) {
        if (time.isEnd) {
            return 20;
        }
        return this.pixelsPerHour;
    }
    calculateMarkerPosition() {
        const now = new Date();
        const offsetTop = (getHours(now) * 60 + getMinutes(now)) * this.options.getPixelsPerMinute;
        return offsetTop;
    }
    isToday(date) {
        return this.formattingService.isToday(date);
    }
    getDayName(date) {
        return this.formattingService.getDayName(date);
    }
    getDayNumber(date) {
        return this.formattingService.getDayNumber(date);
    }
    getTime(date) {
        return this.formattingService.getTime(date);
    }
    onEventClick(event) {
        this.eventClick.emit(event);
    }
    navigateToDayView(date) {
        this.changeToDayView.emit(date);
    }
    sortByTime(a, b) {
        return a.startTime.getTime() - b.startTime.getTime();
    }
    sortByAllDay(event) {
        return event.allDay ? -1 : 1;
    }
    isSameDay(date, startTime, endTime) {
        return isSameDay(new Date(date), new Date(startTime)) || isSameDay(new Date(date), new Date(endTime));
    }
    ngOnDestroy() {
        this.subscriptions$.unsubscribe();
    }
}
BaseViewComponent.ɵfac = function BaseViewComponent_Factory(t) { return new (t || BaseViewComponent)(ɵɵdirectiveInject(FormattingService)); };
BaseViewComponent.ɵcmp = ɵɵdefineComponent({ type: BaseViewComponent, selectors: [["ng-component"]], inputs: { options$: "options$", selectedDate$: "selectedDate$", events$: "events$" }, outputs: { eventClick: "eventClick", changeToDayView: "changeToDayView" }, decls: 0, vars: 0, template: function BaseViewComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BaseViewComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], function () { return [{ type: FormattingService }]; }, { options$: [{
            type: Input
        }], selectedDate$: [{
            type: Input
        }], events$: [{
            type: Input
        }], eventClick: [{
            type: Output
        }], changeToDayView: [{
            type: Output
        }] }); })();

class CalendarDay {
    constructor(init) {
        this.date = new Date();
        this.eventGroups = [];
        this.events = [];
        this.eventCount = 0;
        Object.assign(this, init);
    }
}

const _c0$1 = ["renderTarget"];
function EventDisplayComponent_ng_template_0_Template(rf, ctx) { }
class EventDisplayComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() {
        if (this.event && !this.renderComponent) {
            this.createRenderComponent();
        }
    }
    createRenderComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.component);
        this.renderComponent = this.renderTarget.createComponent(componentFactory);
        this.renderComponent.instance.event = this.event;
        this.renderComponent.instance.date = this.date;
    }
    ngOnDestroy() {
        if (this.renderComponent) {
            this.renderComponent.destroy();
        }
    }
}
EventDisplayComponent.ɵfac = function EventDisplayComponent_Factory(t) { return new (t || EventDisplayComponent)(ɵɵdirectiveInject(ComponentFactoryResolver)); };
EventDisplayComponent.ɵcmp = ɵɵdefineComponent({ type: EventDisplayComponent, selectors: [["event-display"]], viewQuery: function EventDisplayComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, 3, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.renderTarget = _t.first);
    } }, inputs: { event: "event", date: "date", component: "component" }, decls: 2, vars: 0, consts: [["renderTarget", ""]], template: function EventDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, EventDisplayComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    } }, styles: [":host(event-display){overflow:hidden}event-render-day,event-render-week{height:100%}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EventDisplayComponent, [{
        type: Component,
        args: [{
                selector: 'event-display',
                template: `<ng-template #renderTarget></ng-template>`,
                styleUrls: ['./event-display.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: ComponentFactoryResolver }]; }, { event: [{
            type: Input
        }], date: [{
            type: Input
        }], component: [{
            type: Input
        }], renderTarget: [{
            type: ViewChild,
            args: ['renderTarget', { read: ViewContainerRef, static: true }]
        }] }); })();

class AllDayEventPipe {
    transform(items, allDay) {
        if (allDay) {
            return items.filter(item => item.allDay);
        }
        return items.filter(item => !item.allDay);
    }
}
AllDayEventPipe.ɵfac = function AllDayEventPipe_Factory(t) { return new (t || AllDayEventPipe)(); };
AllDayEventPipe.ɵpipe = ɵɵdefinePipe({ name: "allDayEventPipe", type: AllDayEventPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AllDayEventPipe, [{
        type: Pipe,
        args: [{
                name: 'allDayEventPipe'
            }]
    }], null, null); })();

function DayViewComponent_event_display_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "event-display", 17);
    ɵɵlistener("click", function DayViewComponent_event_display_10_Template_event_display_click_0_listener() { ɵɵrestoreView(_r7); const event_r5 = ctx.$implicit; const ctx_r6 = ɵɵnextContext(); return ctx_r6.onEventClick(event_r5); });
    ɵɵelementEnd();
} if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("component", ctx_r0.options.renderComponent.day)("event", event_r5)("date", ctx_r0.selectedDate);
} }
function DayViewComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const hour_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r1.getCellHeight(hour_r8), "px");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", hour_r8.title, " ");
} }
function DayViewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 19);
} if (rf & 2) {
    const hour_r9 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r2.getCellHeight(hour_r9), "px");
} }
function DayViewComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 20);
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵstyleProp("margin-top", ctx_r3.markerPosition, "px");
} }
function DayViewComponent_event_display_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "event-display", 17);
    ɵɵlistener("click", function DayViewComponent_event_display_19_Template_event_display_click_0_listener() { ɵɵrestoreView(_r12); const event_r10 = ctx.$implicit; const ctx_r11 = ɵɵnextContext(); return ctx_r11.onEventClick(event_r10); });
    ɵɵelementEnd();
} if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵstyleProp("width", event_r10.grid == null ? null : event_r10.grid.width, "%")("margin-left", event_r10.grid == null ? null : event_r10.grid.offsetLeft, "%")("margin-top", event_r10.grid == null ? null : event_r10.grid.offsetTop, "px")("height", event_r10.grid == null ? null : event_r10.grid.durationOffset, "px");
    ɵɵproperty("component", ctx_r4.options.renderComponent.day)("event", event_r10)("date", ctx_r4.selectedDate);
} }
const _c0$2 = function (a0) { return { "day__header--today ": a0 }; };
const _c1 = function (a0) { return { "day__lane--today": a0 }; };
class DayViewComponent extends BaseViewComponent {
    constructor(formattingService) {
        super(formattingService);
        this.dayView = {};
    }
    ngOnInit() {
        super.ngOnInit();
        this.generateView();
        this.subscriptions$.add(this.events$.pipe(tap$1(events => {
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
DayViewComponent.ɵfac = function DayViewComponent_Factory(t) { return new (t || DayViewComponent)(ɵɵdirectiveInject(FormattingService)); };
DayViewComponent.ɵcmp = ɵɵdefineComponent({ type: DayViewComponent, selectors: [["day-view"]], features: [ɵɵInheritDefinitionFeature], decls: 21, vars: 19, consts: [[1, "calendar__days"], [1, "calendar__day"], [1, "day__header", 3, "ngClass"], [1, "day-name"], [1, "day-number"], [1, "calendar__content"], [1, "calendar__day-events"], [1, "day__lane"], ["class", "calendar__item", 3, "component", "event", "date", "click", 4, "ngFor", "ngForOf"], [1, "calendar__lanes"], [1, "calendar__times"], ["class", "time-cell", 3, "height", 4, "ngFor", "ngForOf"], [1, "day__lane", 3, "ngClass"], [1, "time-grid"], ["class", "time-grid__cell", 3, "height", 4, "ngFor", "ngForOf"], ["class", "calendar__marker", 3, "marginTop", 4, "ngIf"], ["class", "calendar__item", 3, "component", "event", "date", "width", "marginLeft", "marginTop", "height", "click", 4, "ngFor", "ngForOf"], [1, "calendar__item", 3, "component", "event", "date", "click"], [1, "time-cell"], [1, "time-grid__cell"], [1, "calendar__marker"]], template: function DayViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "span", 3);
        ɵɵtext(4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "span", 4);
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 5);
        ɵɵelementStart(8, "div", 6);
        ɵɵelementStart(9, "div", 7);
        ɵɵtemplate(10, DayViewComponent_event_display_10_Template, 1, 3, "event-display", 8);
        ɵɵpipe(11, "allDayEventPipe");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 9);
        ɵɵelementStart(13, "div", 10);
        ɵɵtemplate(14, DayViewComponent_div_14_Template, 2, 3, "div", 11);
        ɵɵelementEnd();
        ɵɵelementStart(15, "div", 12);
        ɵɵelementStart(16, "div", 13);
        ɵɵtemplate(17, DayViewComponent_div_17_Template, 1, 2, "div", 14);
        ɵɵelementEnd();
        ɵɵtemplate(18, DayViewComponent_div_18_Template, 1, 2, "div", 15);
        ɵɵtemplate(19, DayViewComponent_event_display_19_Template, 1, 11, "event-display", 16);
        ɵɵpipe(20, "allDayEventPipe");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngClass", ɵɵpureFunction1(15, _c0$2, ctx.isToday(ctx.selectedDate)));
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.getDayName(ctx.selectedDate));
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.getDayNumber(ctx.selectedDate));
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ɵɵpipeBind2(11, 9, ctx.dayView.events, true));
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.hoursOfDay);
        ɵɵadvance(1);
        ɵɵproperty("ngClass", ɵɵpureFunction1(17, _c1, ctx.isToday(ctx.selectedDate)));
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.hoursOfDay);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isToday(ctx.selectedDate));
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ɵɵpipeBind2(20, 12, ctx.dayView.events, false));
    } }, directives: [NgClass, NgForOf, NgIf, EventDisplayComponent], pipes: [AllDayEventPipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__lanes[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:row;padding-top:10px}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;flex:1;padding:0 .5rem;border-right:1px solid #efefef;transition:.25s;background-color:#f4f4f4}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .time-grid[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .time-grid__cell[_ngcontent-%COMP%]{border-top:1px dotted #dbdbdb;width:100%}.calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%]{background-color:#eef7fb}.calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%]   .time-grid__cell[_ngcontent-%COMP%]{border-top-color:#c5e3f1}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DayViewComponent, [{
        type: Component,
        args: [{
                selector: 'day-view',
                templateUrl: './day-view.component.html',
                styleUrls: ['./day-view.component.scss']
            }]
    }], function () { return [{ type: FormattingService }]; }, null); })();

const _c0$3 = function (a0) { return { "day__header--today ": a0 }; };
function WeekViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "div", 10);
    ɵɵelementStart(2, "span", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 12);
    ɵɵlistener("click", function WeekViewComponent_div_1_Template_span_click_4_listener() { ɵɵrestoreView(_r6); const day_r4 = ctx.$implicit; const ctx_r5 = ɵɵnextContext(); return ctx_r5.navigateToDayView(day_r4.date); });
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c0$3, ctx_r0.isToday(day_r4.date)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.getDayName(day_r4.date));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.getDayNumber(day_r4.date));
} }
function WeekViewComponent_div_4_event_display_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "event-display", 15);
    ɵɵlistener("click", function WeekViewComponent_div_4_event_display_1_Template_event_display_click_0_listener() { ɵɵrestoreView(_r11); const event_r9 = ctx.$implicit; const ctx_r10 = ɵɵnextContext(2); return ctx_r10.onEventClick(event_r9); });
    ɵɵelementEnd();
} if (rf & 2) {
    const event_r9 = ctx.$implicit;
    const day_r7 = ɵɵnextContext().$implicit;
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("component", ctx_r8.options.renderComponent.week)("event", event_r9)("date", day_r7.date);
} }
function WeekViewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, WeekViewComponent_div_4_event_display_1_Template, 1, 3, "event-display", 14);
    ɵɵpipe(2, "allDayEventPipe");
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r7 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(2, 1, day_r7.events, true));
} }
function WeekViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const hour_r13 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r2.getCellHeight(hour_r13), "px");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", hour_r13.title, " ");
} }
function WeekViewComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 22);
} if (rf & 2) {
    const hour_r18 = ctx.$implicit;
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵstyleProp("height", ctx_r15.getCellHeight(hour_r18), "px");
} }
function WeekViewComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 23);
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵstyleProp("margin-top", ctx_r16.markerPosition, "px");
} }
function WeekViewComponent_div_8_event_display_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "event-display", 15);
    ɵɵlistener("click", function WeekViewComponent_div_8_event_display_4_Template_event_display_click_0_listener() { ɵɵrestoreView(_r21); const event_r19 = ctx.$implicit; const ctx_r20 = ɵɵnextContext(2); return ctx_r20.onEventClick(event_r19); });
    ɵɵelementEnd();
} if (rf & 2) {
    const event_r19 = ctx.$implicit;
    const day_r14 = ɵɵnextContext().$implicit;
    const ctx_r17 = ɵɵnextContext();
    ɵɵstyleProp("width", event_r19.grid == null ? null : event_r19.grid.width, "%")("margin-left", event_r19.grid == null ? null : event_r19.grid.offsetLeft, "%")("margin-top", event_r19.grid == null ? null : event_r19.grid.offsetTop, "px")("height", event_r19.grid == null ? null : event_r19.grid.durationOffset, "px");
    ɵɵproperty("component", ctx_r17.options.renderComponent.week)("event", event_r19)("date", day_r14.date);
} }
const _c1$1 = function (a0) { return { "day__lane--today": a0 }; };
function WeekViewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵelementStart(1, "div", 18);
    ɵɵtemplate(2, WeekViewComponent_div_8_div_2_Template, 1, 2, "div", 19);
    ɵɵelementEnd();
    ɵɵtemplate(3, WeekViewComponent_div_8_div_3_Template, 1, 2, "div", 20);
    ɵɵtemplate(4, WeekViewComponent_div_8_event_display_4_Template, 1, 11, "event-display", 21);
    ɵɵpipe(5, "allDayEventPipe");
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r14 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c1$1, ctx_r3.isToday(day_r14.date)));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r3.hoursOfDay);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.isToday(day_r14.date));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(5, 4, day_r14.events, false));
} }
class WeekViewComponent extends BaseViewComponent {
    constructor(formattingService) {
        super(formattingService);
        this.weekView = {};
    }
    ngOnInit() {
        super.ngOnInit();
        this.generateView();
        this.subscriptions$.add(this.events$.pipe(tap$1(events => {
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
WeekViewComponent.ɵfac = function WeekViewComponent_Factory(t) { return new (t || WeekViewComponent)(ɵɵdirectiveInject(FormattingService)); };
WeekViewComponent.ɵcmp = ɵɵdefineComponent({ type: WeekViewComponent, selectors: [["week-view"]], features: [ɵɵInheritDefinitionFeature], decls: 9, vars: 4, consts: [[1, "calendar__days"], ["class", "calendar__day", 4, "ngFor", "ngForOf"], [1, "calendar__content"], [1, "calendar__day-events"], ["class", "day__lane", 4, "ngFor", "ngForOf"], [1, "calendar__lanes"], [1, "calendar__times"], ["class", "time-cell", 3, "height", 4, "ngFor", "ngForOf"], ["class", "day__lane", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "calendar__day"], [1, "day__header", 3, "ngClass"], [1, "day-name"], [1, "day-number", 3, "click"], [1, "day__lane"], ["class", "calendar__item", 3, "component", "event", "date", "click", 4, "ngFor", "ngForOf"], [1, "calendar__item", 3, "component", "event", "date", "click"], [1, "time-cell"], [1, "day__lane", 3, "ngClass"], [1, "time-grid"], ["class", "time-grid__cell", 3, "height", 4, "ngFor", "ngForOf"], ["class", "calendar__marker", 3, "marginTop", 4, "ngIf"], ["class", "calendar__item", 3, "component", "event", "date", "width", "marginLeft", "marginTop", "height", "click", 4, "ngFor", "ngForOf"], [1, "time-grid__cell"], [1, "calendar__marker"]], template: function WeekViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, WeekViewComponent_div_1_Template, 6, 5, "div", 1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵtemplate(4, WeekViewComponent_div_4_Template, 3, 4, "div", 4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 5);
        ɵɵelementStart(6, "div", 6);
        ɵɵtemplate(7, WeekViewComponent_div_7_Template, 2, 3, "div", 7);
        ɵɵelementEnd();
        ɵɵtemplate(8, WeekViewComponent_div_8_Template, 6, 9, "div", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.weekView.days);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.weekView.days);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.hoursOfDay);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.weekView.days);
    } }, directives: [NgForOf, NgClass, EventDisplayComponent, NgIf], pipes: [AllDayEventPipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__lanes[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:row;padding-top:10px}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;flex:1;padding:0 .5rem;border-right:1px solid #efefef;transition:.25s}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]:hover{background-color:#f4f4f4}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]:hover   .time-grid__cell[_ngcontent-%COMP%]{border-top-color:#dbdbdb}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .time-grid[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .time-grid__cell[_ngcontent-%COMP%]{border-top:1px dotted #efefef;width:100%}.calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%], .calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%]:hover{background-color:#eef7fb}.calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%]   .time-grid__cell[_ngcontent-%COMP%]{border-top-color:#c5e3f1}.calendar__day[_ngcontent-%COMP%]{justify-content:center}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]:hover   .day-number[_ngcontent-%COMP%]{cursor:pointer}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(WeekViewComponent, [{
        type: Component,
        args: [{
                selector: 'week-view',
                templateUrl: './week-view.component.html',
                styleUrls: ['./week-view.component.scss']
            }]
    }], function () { return [{ type: FormattingService }]; }, null); })();

class LimitPipe {
    transform(items, limit) {
        return items.slice(0, limit);
    }
}
LimitPipe.ɵfac = function LimitPipe_Factory(t) { return new (t || LimitPipe)(); };
LimitPipe.ɵpipe = ɵɵdefinePipe({ name: "limitPipe", type: LimitPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LimitPipe, [{
        type: Pipe,
        args: [{
                name: 'limitPipe'
            }]
    }], null, null); })();

const _c0$4 = ["calendarDayElement"];
function MonthViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelementStart(1, "div", 10);
    ɵɵelementStart(2, "span", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r5 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate(day_r5.title);
} }
function MonthViewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const weekNumber_r6 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", weekNumber_r6, " ");
} }
function MonthViewComponent_div_7_event_display_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "event-display", 19);
    ɵɵlistener("click", function MonthViewComponent_div_7_event_display_5_Template_event_display_click_0_listener() { ɵɵrestoreView(_r12); const event_r10 = ctx.$implicit; const ctx_r11 = ɵɵnextContext(2); return ctx_r11.onEventClick(event_r10); });
    ɵɵelementEnd();
} if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const day_r7 = ɵɵnextContext().$implicit;
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("component", ctx_r8.options.renderComponent.month)("event", event_r10)("date", day_r7.date);
} }
function MonthViewComponent_div_7_span_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "div", 20, 21);
    ɵɵlistener("click", function MonthViewComponent_div_7_span_7_Template_div_click_1_listener() { ɵɵrestoreView(_r16); const _r14 = ɵɵreference(2); const day_r7 = ɵɵnextContext().$implicit; const ctx_r15 = ɵɵnextContext(); return ctx_r15.toggleHiddenEvents(_r14, day_r7); });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r7 = ɵɵnextContext().$implicit;
    const ctx_r9 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", day_r7.eventCount - ctx_r9.maxEventsVisible + 1, " more ");
} }
function MonthViewComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵelementStart(1, "div", 14);
    ɵɵelementStart(2, "span", 15);
    ɵɵlistener("click", function MonthViewComponent_div_7_Template_span_click_2_listener() { ɵɵrestoreView(_r20); const day_r7 = ctx.$implicit; const ctx_r19 = ɵɵnextContext(); return ctx_r19.navigateToDayView(day_r7.date); });
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 16);
    ɵɵtemplate(5, MonthViewComponent_div_7_event_display_5_Template, 1, 3, "event-display", 17);
    ɵɵpipe(6, "limitPipe");
    ɵɵtemplate(7, MonthViewComponent_div_7_span_7_Template, 4, 1, "span", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("is-today", ctx_r3.isToday(day_r7.date));
    ɵɵadvance(1);
    ɵɵclassProp("not-current-month", !ctx_r3.isCurrentMonth(day_r7.date));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.getDayNumber(day_r7.date));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(6, 7, day_r7.events, ctx_r3.maxEventsVisible - 1));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", day_r7.eventCount && ctx_r3.maxEventsVisible > 0 && day_r7.eventCount >= ctx_r3.maxEventsVisible);
} }
function MonthViewComponent_ng_template_8_event_display_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "event-display", 19);
    ɵɵlistener("click", function MonthViewComponent_ng_template_8_event_display_3_Template_event_display_click_0_listener() { ɵɵrestoreView(_r24); const event_r22 = ctx.$implicit; const ctx_r23 = ɵɵnextContext(2); return ctx_r23.onEventClick(event_r22); });
    ɵɵelementEnd();
} if (rf & 2) {
    const event_r22 = ctx.$implicit;
    const ctx_r21 = ɵɵnextContext(2);
    ɵɵproperty("component", ctx_r21.options.renderComponent.month)("event", event_r22)("date", ctx_r21.hiddenEventsDay.date);
} }
function MonthViewComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 22);
    ɵɵelementStart(1, "span", 23);
    ɵɵlistener("click", function MonthViewComponent_ng_template_8_Template_span_click_1_listener() { ɵɵrestoreView(_r26); const ctx_r25 = ɵɵnextContext(); return ctx_r25.navigateToDayView(ctx_r25.hiddenEventsDay.date); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, MonthViewComponent_ng_template_8_event_display_3_Template, 1, 3, "event-display", 17);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r4.getHiddenEventsHeight(), "px");
    ɵɵclassProp("is-today", ctx_r4.isToday(ctx_r4.hiddenEventsDay.date));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r4.getDayNumber(ctx_r4.hiddenEventsDay.date), " ");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.hiddenEventsDay.events);
} }
class MonthViewComponent extends BaseViewComponent {
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
        this.subscriptions$.add(this.events$.pipe(tap$1(events => {
            this.events = events;
            this.generateView();
        })).subscribe());
        this.subscriptions$.add(this.selectedDate$.pipe(tap$1(() => {
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
MonthViewComponent.ɵfac = function MonthViewComponent_Factory(t) { return new (t || MonthViewComponent)(ɵɵdirectiveInject(FormattingService)); };
MonthViewComponent.ɵcmp = ɵɵdefineComponent({ type: MonthViewComponent, selectors: [["month-view"]], viewQuery: function MonthViewComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$4, 3, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.calendarDayElement = _t.first);
    } }, hostBindings: function MonthViewComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("resize", function MonthViewComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, ɵɵresolveWindow);
    } }, outputs: { setCalendarOffset: "setCalendarOffset" }, features: [ɵɵInheritDefinitionFeature], decls: 9, vars: 7, consts: [[1, "calendar__days"], ["class", "calendar__day", 4, "ngFor", "ngForOf"], [1, "calendar__weeknumbers"], ["class", "week-number-cell", 4, "ngFor", "ngForOf"], [1, "calendar__content"], [1, "calendar__blocks"], ["calendarDayElement", ""], ["class", "day__block", 3, "is-today", 4, "ngFor", "ngForOf"], ["cdkConnectedOverlay", "", "cdkConnectedOverlayPanelClass", "hidden-events-overlay", 3, "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "overlayOutsideClick"], [1, "calendar__day"], [1, "day__header"], [1, "day-name"], [1, "week-number-cell"], [1, "day__block"], [1, "day__block-content"], [1, "day__block-date", 3, "click"], [1, "day__events"], ["class", "calendar__item", 3, "component", "event", "date", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "calendar__item", 3, "component", "event", "date", "click"], ["cdkOverlayOrigin", "", 1, "hidden-events-trigger", 3, "click"], ["trigger", "cdkOverlayOrigin"], [1, "event-container"], [1, "event-container__date", 3, "click"]], template: function MonthViewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, MonthViewComponent_div_1_Template, 4, 1, "div", 1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, MonthViewComponent_div_3_Template, 2, 1, "div", 3);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 4);
        ɵɵelementStart(5, "div", 5, 6);
        ɵɵtemplate(7, MonthViewComponent_div_7_Template, 8, 10, "div", 7);
        ɵɵtemplate(8, MonthViewComponent_ng_template_8_Template, 4, 6, "ng-template", 8);
        ɵɵlistener("overlayOutsideClick", function MonthViewComponent_Template_ng_template_overlayOutsideClick_8_listener() { return ctx.closeHiddenEvents(); });
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.daysOfWeek);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.weekNumbers);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.monthView.days);
        ɵɵadvance(1);
        ɵɵproperty("cdkConnectedOverlayOffsetY", -100)("cdkConnectedOverlayOffsetX", -35)("cdkConnectedOverlayOrigin", ctx.hiddenEventsTriggerOrigin)("cdkConnectedOverlayOpen", ctx.showHiddenEvents);
    } }, directives: [NgForOf, CdkConnectedOverlay, NgIf, EventDisplayComponent, CdkOverlayOrigin], pipes: [LimitPipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__content[_ngcontent-%COMP%]{display:flex;margin-left:4px;margin-top:15px;border-left:1px solid #efefef}.calendar__days[_ngcontent-%COMP%]{height:1.5rem;margin-left:38px}.calendar__days[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{flex:1}.calendar__weeknumbers[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;padding-top:1.5rem;text-align:center;width:22px;margin-right:12px}.calendar__weeknumbers[_ngcontent-%COMP%]   .week-number-cell[_ngcontent-%COMP%]{color:#c8c8c8}.calendar__blocks[_ngcontent-%COMP%]{display:flex;flex:1;flex-wrap:wrap;flex-direction:row;padding-top:.5rem}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;width:calc(100% / 7);padding-top:.5rem;overflow:hidden;border-right:1px solid #efefef;border-bottom:1px solid #efefef}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .day__block-content[_ngcontent-%COMP%]{justify-content:center;display:flex}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .day__block-date[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;width:25px;height:25px;color:#2a2a2a;font-size:.75rem}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .day__block-date[_ngcontent-%COMP%]:hover{cursor:pointer}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .day__events[_ngcontent-%COMP%]{position:absolute;overflow:hidden;top:2rem;width:100%}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .not-current-month[_ngcontent-%COMP%]{opacity:.25}.calendar__blocks[_ngcontent-%COMP%]   .day__block.is-today[_ngcontent-%COMP%]{background-color:#eef7fb}.calendar__blocks[_ngcontent-%COMP%]   .day__block.is-today[_ngcontent-%COMP%]   .day__block-date[_ngcontent-%COMP%]{border-radius:100%;background:#2a2a2a;color:#fff}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative;padding:0 2px}.hidden-events-trigger[_ngcontent-%COMP%]{font-size:12px;padding:0 .5rem;font-weight:600}.hidden-events-trigger[_ngcontent-%COMP%]:hover{cursor:pointer;opacity:.7}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MonthViewComponent, [{
        type: Component,
        args: [{
                selector: 'month-view',
                templateUrl: './month-view.component.html',
                styleUrls: ['./month-view.component.scss']
            }]
    }], function () { return [{ type: FormattingService }]; }, { setCalendarOffset: [{
            type: Output
        }], calendarDayElement: [{
            type: ViewChild,
            args: ['calendarDayElement', { read: ElementRef, static: true }]
        }], onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();

function NgxMatCalendarComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("Week ", ctx_r1.calendar.weeknumber, "");
} }
function NgxMatCalendarComponent_div_0_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function NgxMatCalendarComponent_div_0_button_15_Template_button_click_0_listener() { ɵɵrestoreView(_r11); const ctx_r10 = ɵɵnextContext(2); return ctx_r10.showKeyboardShortcutDialog(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "keyboard");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function NgxMatCalendarComponent_div_0_mat_form_field_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 21);
    ɵɵelementStart(1, "mat-select", 22, 23);
    ɵɵlistener("selectionChange", function NgxMatCalendarComponent_div_0_mat_form_field_16_Template_mat_select_selectionChange_1_listener() { ɵɵrestoreView(_r14); const _r12 = ɵɵreference(2); const ctx_r13 = ɵɵnextContext(2); return ctx_r13.onViewChange(_r12.value); });
    ɵɵelementStart(3, "mat-option", 24);
    ɵɵtext(4, "Day");
    ɵɵelementEnd();
    ɵɵelementStart(5, "mat-option", 25);
    ɵɵtext(6, "Week");
    ɵɵelementEnd();
    ɵɵelementStart(7, "mat-option", 26);
    ɵɵtext(8, "Month");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r3.selectedView);
} }
function NgxMatCalendarComponent_div_0_button_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 27);
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "calendar_today");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r4 = ɵɵreference(18);
    ɵɵproperty("matMenuTriggerFor", _r4);
} }
function NgxMatCalendarComponent_div_0_day_view_22_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "day-view", 28);
    ɵɵlistener("eventClick", function NgxMatCalendarComponent_div_0_day_view_22_Template_day_view_eventClick_0_listener($event) { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(2); return ctx_r15.onEventClick($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("events$", ctx_r6.events$)("selectedDate$", ctx_r6.selectedDate$)("options$", ctx_r6.options$);
} }
function NgxMatCalendarComponent_div_0_week_view_23_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "week-view", 29);
    ɵɵlistener("eventClick", function NgxMatCalendarComponent_div_0_week_view_23_Template_week_view_eventClick_0_listener($event) { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(2); return ctx_r17.onEventClick($event); })("changeToDayView", function NgxMatCalendarComponent_div_0_week_view_23_Template_week_view_changeToDayView_0_listener($event) { ɵɵrestoreView(_r18); const ctx_r19 = ɵɵnextContext(2); return ctx_r19.changeToDayView($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("events$", ctx_r7.events$)("selectedDate$", ctx_r7.selectedDate$)("options$", ctx_r7.options$);
} }
function NgxMatCalendarComponent_div_0_month_view_24_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "month-view", 30);
    ɵɵlistener("eventClick", function NgxMatCalendarComponent_div_0_month_view_24_Template_month_view_eventClick_0_listener($event) { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(2); return ctx_r20.onEventClick($event); })("setCalendarOffset", function NgxMatCalendarComponent_div_0_month_view_24_Template_month_view_setCalendarOffset_0_listener($event) { ɵɵrestoreView(_r21); const ctx_r22 = ɵɵnextContext(2); return ctx_r22.setCalendarOffset($event); })("changeToDayView", function NgxMatCalendarComponent_div_0_month_view_24_Template_month_view_changeToDayView_0_listener($event) { ɵɵrestoreView(_r21); const ctx_r23 = ɵɵnextContext(2); return ctx_r23.changeToDayView($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("events$", ctx_r8.events$)("selectedDate$", ctx_r8.selectedDate$)("options$", ctx_r8.options$);
} }
function NgxMatCalendarComponent_div_0_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 31);
    ɵɵlistener("click", function NgxMatCalendarComponent_div_0_button_25_Template_button_click_0_listener() { ɵɵrestoreView(_r25); const ctx_r24 = ɵɵnextContext(2); return ctx_r24.onAddButtonClick(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "add");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function NgxMatCalendarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵelementStart(1, "div", 2);
    ɵɵelementStart(2, "button", 3);
    ɵɵlistener("click", function NgxMatCalendarComponent_div_0_Template_button_click_2_listener() { ɵɵrestoreView(_r27); const ctx_r26 = ɵɵnextContext(); return ctx_r26.setCalendarToday(); });
    ɵɵtext(3, " Today ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 4);
    ɵɵlistener("click", function NgxMatCalendarComponent_div_0_Template_button_click_4_listener() { ɵɵrestoreView(_r27); const ctx_r28 = ɵɵnextContext(); return ctx_r28.setCalendarOffset("prev"); });
    ɵɵelementStart(5, "mat-icon");
    ɵɵtext(6, "chevron_left");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 4);
    ɵɵlistener("click", function NgxMatCalendarComponent_div_0_Template_button_click_7_listener() { ɵɵrestoreView(_r27); const ctx_r29 = ɵɵnextContext(); return ctx_r29.setCalendarOffset("next"); });
    ɵɵelementStart(8, "mat-icon");
    ɵɵtext(9, "chevron_right");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 5);
    ɵɵelementStart(11, "span", 6);
    ɵɵtext(12);
    ɵɵelementEnd();
    ɵɵtemplate(13, NgxMatCalendarComponent_div_0_span_13_Template, 2, 1, "span", 7);
    ɵɵelementEnd();
    ɵɵelementStart(14, "div", 8);
    ɵɵtemplate(15, NgxMatCalendarComponent_div_0_button_15_Template, 3, 0, "button", 9);
    ɵɵtemplate(16, NgxMatCalendarComponent_div_0_mat_form_field_16_Template, 9, 1, "mat-form-field", 10);
    ɵɵelementStart(17, "mat-menu", null, 11);
    ɵɵelementStart(19, "div", 12);
    ɵɵlistener("click", function NgxMatCalendarComponent_div_0_Template_div_click_19_listener($event) { return $event.stopPropagation(); });
    ɵɵelementStart(20, "mat-calendar", 13);
    ɵɵlistener("selectedChange", function NgxMatCalendarComponent_div_0_Template_mat_calendar_selectedChange_20_listener($event) { ɵɵrestoreView(_r27); const ctx_r31 = ɵɵnextContext(); return ctx_r31.onDatePickerChange($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(21, NgxMatCalendarComponent_div_0_button_21_Template, 3, 1, "button", 14);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(22, NgxMatCalendarComponent_div_0_day_view_22_Template, 1, 3, "day-view", 15);
    ɵɵtemplate(23, NgxMatCalendarComponent_div_0_week_view_23_Template, 1, 3, "week-view", 16);
    ɵɵtemplate(24, NgxMatCalendarComponent_div_0_month_view_24_Template, 1, 3, "month-view", 17);
    ɵɵtemplate(25, NgxMatCalendarComponent_div_0_button_25_Template, 3, 0, "button", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("matTooltip", ctx_r0.today);
    ɵɵadvance(10);
    ɵɵtextInterpolate(ctx_r0.calendar.monthAndYear);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.getSelectedView("month"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.enableKeyboardShortcutDialog);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.enableViewToggle);
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx_r0.enableDatePickerButton);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.getSelectedView("day"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.getSelectedView("week"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.getSelectedView("month"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.options.enableAddEventButton);
} }
class NgxMatCalendarComponent {
    constructor(dateAdapter, dialog) {
        this.dateAdapter = dateAdapter;
        this.dialog = dialog;
        this.dateChange = new EventEmitter();
        this.eventClick = new EventEmitter();
        this.addButtonClick = new EventEmitter();
        this.subscriptions$ = new Subscription();
        this.calendar = {};
        this.today = format(new Date(), 'EEEE, d MMMM');
    }
    onKeyDown(event) {
        this.handleKeyboardEvents(event);
    }
    ngOnInit() {
        this.subscriptions$.add(this.options$.pipe(tap$1((options) => {
            this.options = options;
            this.selectedView = options.view;
            this.initCalendar();
        })).subscribe());
        this.subscriptions$.add(this.events$.pipe(tap$1((events) => {
            this.events = events;
            this.parseDates(events);
        })).subscribe());
        this.subscriptions$.add(this.selectedDate$.pipe(tap$1(selectedDate => {
            this.selectedDate = selectedDate;
            this.initCalendar();
            if (this.selectedDate !== selectedDate) {
                this.dateChange.emit(this.selectedDate);
            }
        })).subscribe());
    }
    initCalendar() {
        if (this.options) {
            this.enableDatePickerButton = this.options.enableDatePickerButton;
            this.enableViewToggle = this.options.enableViewToggle;
            this.enableKeyboardShortcutDialog = this.options.enableKeyboardShortcutDialog;
            this.dateAdapter.setLocale(this.options.locale);
            this.generateCalendar();
        }
    }
    generateCalendar() {
        if (this.selectedDate) {
            this.calendar = {
                monthAndYear: format(this.selectedDate, 'MMMM yyyy'),
                weeknumber: format(this.selectedDate, 'I')
            };
        }
    }
    parseDates(events) {
        this.events = events.map((event) => {
            event.date = new Date(event.date);
            event.startTime = new Date(event.startTime);
            event.endTime = new Date(event.endTime);
            return event;
        });
    }
    isToday(date) {
        return isToday(date);
    }
    setCalendarToday() {
        this.selectedDate = new Date();
        this.selectedDate$.next(this.selectedDate);
        this.handleCalendarSet();
    }
    setCalendarOffset(direction) {
        const offset = Periods[this.selectedView];
        this.selectedDate = add(this.selectedDate, {
            [offset]: direction === PREVIOUS ? -1 : 1
        });
        this.selectedDate$.next(this.selectedDate);
        this.handleCalendarSet();
    }
    setCalendar(date) {
        if (date) {
            this.selectedDate = date;
            this.selectedDate$.next(date);
            this.handleCalendarSet();
        }
    }
    handleCalendarSet() {
        this.generateCalendar();
        this.dateChange.emit(this.selectedDate);
    }
    onViewChange(view) {
        this.selectedView = view;
    }
    changeToDayView(date) {
        this.selectedView = DAY;
        this.setCalendar(date);
    }
    getSelectedView(view) {
        return this.selectedView === view;
    }
    onEventClick(event) {
        this.eventClick.emit(event);
    }
    onAddButtonClick() {
        this.addButtonClick.emit();
    }
    onDatePickerChange(date) {
        this.setCalendar(toDate(date));
        this.datePickerMenu.closeMenu();
    }
    showKeyboardShortcutDialog() {
        const dialogRef = this.dialog.open(KeyboardShortcutDialogComponent, {
            data: this.options
        });
    }
    handleKeyboardEvents(event) {
        switch (event.key) {
            case 'd':
                this.selectedView = DAY;
                break;
            case 'w':
                this.selectedView = WEEK;
                break;
            case 'm':
                this.selectedView = MONTH;
                break;
            case 't':
                this.setCalendarToday();
                break;
            case 'n':
                this.addButtonClick.emit();
                break;
            default:
                break;
        }
    }
    ngOnDestroy() {
        this.subscriptions$.unsubscribe();
    }
}
NgxMatCalendarComponent.ɵfac = function NgxMatCalendarComponent_Factory(t) { return new (t || NgxMatCalendarComponent)(ɵɵdirectiveInject(DateAdapter), ɵɵdirectiveInject(MatDialog)); };
NgxMatCalendarComponent.ɵcmp = ɵɵdefineComponent({ type: NgxMatCalendarComponent, selectors: [["ngx-mat-calendar"]], viewQuery: function NgxMatCalendarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(MatMenuTrigger, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.datePickerMenu = _t.first);
    } }, hostBindings: function NgxMatCalendarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function NgxMatCalendarComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, ɵɵresolveWindow);
    } }, inputs: { options$: "options$", events$: "events$", selectedDate$: "selectedDate$" }, outputs: { dateChange: "dateChange", eventClick: "eventClick", addButtonClick: "addButtonClick" }, decls: 1, vars: 1, consts: [["class", "calendar", 4, "ngIf"], [1, "calendar"], [1, "calendar__toolbar"], ["mat-stroked-button", "", "color", "primary", 1, "toolbar__button", "toolbar__button--today", 3, "matTooltip", "click"], ["mat-icon-button", "", "color", "primary", 1, "toolbar__button", "toolbar__button--navigate", 3, "click"], [1, "toolbar__meta"], [1, "toolbar__month"], ["class", "toolbar__week", 4, "ngIf"], [1, "toolbar__right"], ["mat-icon-button", "", "matTooltip", "Keyboard shortcuts", "class", "toolbar__button toolbar__button--keyboard-shortcut", "color", "primary", 3, "click", 4, "ngIf"], ["appearance", "outline", "class", "toolbar__view-switch", 4, "ngIf"], ["datePickerMenu", "matMenu"], [3, "click"], [3, "selectedChange"], ["matTooltip", "Pick a date", "mat-icon-button", "", "class", "toolbar__button", "color", "primary", 3, "matMenuTriggerFor", 4, "ngIf"], [3, "events$", "selectedDate$", "options$", "eventClick", 4, "ngIf"], [3, "events$", "selectedDate$", "options$", "eventClick", "changeToDayView", 4, "ngIf"], [3, "events$", "selectedDate$", "options$", "eventClick", "setCalendarOffset", "changeToDayView", 4, "ngIf"], ["class", "calendar__add-button", "mat-fab", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "toolbar__week"], ["mat-icon-button", "", "matTooltip", "Keyboard shortcuts", "color", "primary", 1, "toolbar__button", "toolbar__button--keyboard-shortcut", 3, "click"], ["appearance", "outline", 1, "toolbar__view-switch"], [3, "value", "selectionChange"], ["view", ""], ["value", "day"], ["value", "week"], ["value", "month"], ["matTooltip", "Pick a date", "mat-icon-button", "", "color", "primary", 1, "toolbar__button", 3, "matMenuTriggerFor"], [3, "events$", "selectedDate$", "options$", "eventClick"], [3, "events$", "selectedDate$", "options$", "eventClick", "changeToDayView"], [3, "events$", "selectedDate$", "options$", "eventClick", "setCalendarOffset", "changeToDayView"], ["mat-fab", "", "color", "primary", 1, "calendar__add-button", 3, "click"]], template: function NgxMatCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, NgxMatCalendarComponent_div_0_Template, 26, 10, "div", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.events && ctx.options);
    } }, directives: [NgIf, MatButton, MatTooltip, MatIcon, MatMenu, MatCalendar, MatFormField, MatSelect, MatOption, MatMenuTrigger, DayViewComponent, WeekViewComponent, MonthViewComponent], styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}:host(ngx-mat-calendar){flex:1;height:100%}.calendar{position:relative;display:flex;flex-direction:column;height:100%}day-view,month-view,week-view{display:flex;height:100%;overflow:hidden}[hidden]{display:none}.calendar__toolbar{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:1rem}.calendar__toolbar .toolbar__button,.calendar__toolbar .toolbar__month,.calendar__toolbar .toolbar__right{display:flex}.calendar__toolbar .toolbar__button{justify-content:center;margin-left:1rem}.calendar__toolbar .toolbar__button--today{margin-left:0;margin-right:1rem}.calendar__toolbar .toolbar__button--navigate{margin-left:0}.calendar__toolbar .toolbar__meta{display:flex;align-items:center;font-weight:200}.calendar__toolbar .toolbar__meta .toolbar__month{margin-left:1rem;font-size:1.25rem}.calendar__toolbar .toolbar__meta .toolbar__week{margin-left:1rem;font-size:1rem;padding:.25rem .5rem;font-size:.75rem;text-transform:uppercase;background-color:#efefef;border-radius:4px}.calendar__toolbar .toolbar__right{flex:1;justify-content:flex-end;align-items:center}.calendar__toolbar .toolbar__datepicker{position:absolute;right:60px}.calendar__toolbar .toolbar__datepicker .mat-form-field{font-size:12px}.calendar__toolbar .toolbar__datepicker .mat-form-field-wrapper{padding-bottom:0}.calendar__toolbar mat-form-field.toolbar__view-switch{margin-left:1rem;align-items:center}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-form-field-wrapper{margin:0;padding:0}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-form-field-infix{padding:.25rem 0 .5rem;width:90px}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-select-arrow{margin-top:.25rem}.calendar__add-button{position:absolute;z-index:1;right:-.5rem;bottom:-.5rem;width:80px;height:80px}.calendar__add-button mat-icon{transform:scale(1.25)}mat-calendar{padding:0 .75rem}.cdk-overlay-pane.hidden-events-overlay{width:calc((100% / 7) + 50px)}.cdk-overlay-pane.hidden-events-overlay .event-container{display:flex;flex-direction:column;position:absolute;background-color:#fff;padding:.5rem;border-radius:4px;overflow:hidden;width:100%;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.cdk-overlay-pane.hidden-events-overlay .event-container.is-today .event-container__date{border-radius:100%;background:#2a2a2a;color:#fff}.cdk-overlay-pane.hidden-events-overlay .event-container .event-container__date{display:flex;justify-content:center;align-items:center;align-self:center;margin-bottom:.5rem;width:40px;min-height:40px;border-radius:20px;margin-top:4px;background-color:#efefef;color:#2a2a2a;font-size:14px}.cdk-overlay-pane.hidden-events-overlay .event-container .event-container__date:hover{cursor:pointer}.cdk-overlay-pane.hidden-events-overlay event-display{position:relative}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgxMatCalendarComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-mat-calendar',
                templateUrl: './ngx-mat-calendar.component.html',
                styleUrls: ['./ngx-mat-calendar.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: DateAdapter }, { type: MatDialog }]; }, { options$: [{
            type: Input
        }], events$: [{
            type: Input
        }], selectedDate$: [{
            type: Input
        }], dateChange: [{
            type: Output
        }], eventClick: [{
            type: Output
        }], addButtonClick: [{
            type: Output
        }], datePickerMenu: [{
            type: ViewChild,
            args: [MatMenuTrigger]
        }], onKeyDown: [{
            type: HostListener,
            args: ['window:keydown', ['$event']]
        }] }); })();

const MaterialModules = [
    MatIconModule,
    MatTooltipModule
];
class SharedComponentsModule {
}
SharedComponentsModule.ɵfac = function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); };
SharedComponentsModule.ɵmod = ɵɵdefineNgModule({ type: SharedComponentsModule });
SharedComponentsModule.ɵinj = ɵɵdefineInjector({ providers: [], imports: [[
            BrowserModule,
            ...MaterialModules
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SharedComponentsModule, { declarations: [EventDisplayComponent,
        EventRenderDayComponent,
        EventRenderWeekComponent,
        EventRenderMonthComponent], imports: [BrowserModule, MatIconModule,
        MatTooltipModule], exports: [EventDisplayComponent,
        EventRenderDayComponent,
        EventRenderWeekComponent,
        EventRenderMonthComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SharedComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    EventDisplayComponent,
                    EventRenderDayComponent,
                    EventRenderWeekComponent,
                    EventRenderMonthComponent
                ],
                imports: [
                    BrowserModule,
                    ...MaterialModules
                ],
                exports: [
                    EventDisplayComponent,
                    EventRenderDayComponent,
                    EventRenderWeekComponent,
                    EventRenderMonthComponent
                ],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();

class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = ɵɵdefineNgModule({ type: PipesModule });
PipesModule.ɵinj = ɵɵdefineInjector({ providers: [], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PipesModule, { declarations: [LimitPipe,
        AllDayEventPipe], exports: [LimitPipe,
        AllDayEventPipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PipesModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    LimitPipe,
                    AllDayEventPipe
                ],
                imports: [],
                exports: [
                    LimitPipe,
                    AllDayEventPipe
                ],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();

class DayViewModule {
}
DayViewModule.ɵfac = function DayViewModule_Factory(t) { return new (t || DayViewModule)(); };
DayViewModule.ɵmod = ɵɵdefineNgModule({ type: DayViewModule });
DayViewModule.ɵinj = ɵɵdefineInjector({ providers: [], imports: [[
            BrowserModule,
            SharedComponentsModule,
            PipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DayViewModule, { declarations: [DayViewComponent], imports: [BrowserModule,
        SharedComponentsModule,
        PipesModule], exports: [DayViewComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(DayViewModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    DayViewComponent
                ],
                imports: [
                    BrowserModule,
                    SharedComponentsModule,
                    PipesModule
                ],
                exports: [
                    DayViewComponent
                ],
                entryComponents: [],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();

class WeekViewModule {
}
WeekViewModule.ɵfac = function WeekViewModule_Factory(t) { return new (t || WeekViewModule)(); };
WeekViewModule.ɵmod = ɵɵdefineNgModule({ type: WeekViewModule });
WeekViewModule.ɵinj = ɵɵdefineInjector({ providers: [], imports: [[
            BrowserModule,
            SharedComponentsModule,
            PipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(WeekViewModule, { declarations: [WeekViewComponent], imports: [BrowserModule,
        SharedComponentsModule,
        PipesModule], exports: [WeekViewComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(WeekViewModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    WeekViewComponent
                ],
                imports: [
                    BrowserModule,
                    SharedComponentsModule,
                    PipesModule
                ],
                exports: [
                    WeekViewComponent
                ],
                entryComponents: [],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();

class MonthViewModule {
}
MonthViewModule.ɵfac = function MonthViewModule_Factory(t) { return new (t || MonthViewModule)(); };
MonthViewModule.ɵmod = ɵɵdefineNgModule({ type: MonthViewModule });
MonthViewModule.ɵinj = ɵɵdefineInjector({ providers: [], imports: [[
            BrowserModule,
            SharedComponentsModule,
            OverlayModule,
            PipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MonthViewModule, { declarations: [MonthViewComponent], imports: [BrowserModule,
        SharedComponentsModule,
        OverlayModule,
        PipesModule], exports: [MonthViewComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MonthViewModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MonthViewComponent
                ],
                imports: [
                    BrowserModule,
                    SharedComponentsModule,
                    OverlayModule,
                    PipesModule
                ],
                exports: [
                    MonthViewComponent
                ],
                entryComponents: [],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();

class LocaleDateAdapter extends NativeDateAdapter {
    getFirstDayOfWeek() {
        return 1;
    }
}
LocaleDateAdapter.ɵfac = function LocaleDateAdapter_Factory(t) { return ɵLocaleDateAdapter_BaseFactory(t || LocaleDateAdapter); };
LocaleDateAdapter.ɵprov = ɵɵdefineInjectable({ token: LocaleDateAdapter, factory: LocaleDateAdapter.ɵfac });
const ɵLocaleDateAdapter_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(LocaleDateAdapter);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(LocaleDateAdapter, [{
        type: Injectable
    }], null, null); })();

const MaterialModules$1 = [
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule
];
const ViewModules = [
    DayViewModule,
    WeekViewModule,
    MonthViewModule
];
class NgxMatCalendarModule {
}
NgxMatCalendarModule.ɵfac = function NgxMatCalendarModule_Factory(t) { return new (t || NgxMatCalendarModule)(); };
NgxMatCalendarModule.ɵmod = ɵɵdefineNgModule({ type: NgxMatCalendarModule });
NgxMatCalendarModule.ɵinj = ɵɵdefineInjector({ providers: [
        FormattingService,
        {
            provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
            useValue: {
                useUtc: true
            }
        }, {
            provide: DateAdapter,
            useClass: LocaleDateAdapter
        }
    ], imports: [[
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            ...ViewModules,
            ...MaterialModules$1
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxMatCalendarModule, { declarations: [NgxMatCalendarComponent,
        KeyboardShortcutDialogComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule, DayViewModule,
        WeekViewModule,
        MonthViewModule, MatCardModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatMenuModule,
        MatDialogModule,
        MatDividerModule], exports: [NgxMatCalendarComponent,
        KeyboardShortcutDialogComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NgxMatCalendarModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NgxMatCalendarComponent,
                    KeyboardShortcutDialogComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ...ViewModules,
                    ...MaterialModules$1
                ],
                exports: [
                    NgxMatCalendarComponent,
                    KeyboardShortcutDialogComponent
                ],
                providers: [
                    FormattingService,
                    {
                        provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
                        useValue: {
                            useUtc: true
                        }
                    }, {
                        provide: DateAdapter,
                        useClass: LocaleDateAdapter
                    }
                ],
                bootstrap: []
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-mat-calendar
 */

/**
 * Generated bundle index. Do not edit.
 */

export { KeyboardShortcutDialogComponent, NgxMatCalendarComponent, NgxMatCalendarModule };
//# sourceMappingURL=arjentienkamp-ngx-mat-calendar.js.map

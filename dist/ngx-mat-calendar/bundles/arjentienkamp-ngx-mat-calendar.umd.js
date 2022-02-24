(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('date-fns'), require('@angular/material/menu'), require('rxjs'), require('rxjs/operators'), require('@angular/material/dialog'), require('@angular/common'), require('@angular/material/icon'), require('@angular/material/tooltip'), require('@angular/material/divider'), require('@angular/material/core'), require('@angular/material/button'), require('@angular/material/datepicker'), require('@angular/material/form-field'), require('@angular/material/select'), require('uuid'), require('rxjs/internal/operators/tap'), require('@angular/cdk/overlay'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/input'), require('@angular/material-moment-adapter')) :
    typeof define === 'function' && define.amd ? define('@arjentienkamp/ngx-mat-calendar', ['exports', '@angular/core', 'date-fns', '@angular/material/menu', 'rxjs', 'rxjs/operators', '@angular/material/dialog', '@angular/common', '@angular/material/icon', '@angular/material/tooltip', '@angular/material/divider', '@angular/material/core', '@angular/material/button', '@angular/material/datepicker', '@angular/material/form-field', '@angular/material/select', 'uuid', 'rxjs/internal/operators/tap', '@angular/cdk/overlay', '@angular/platform-browser', '@angular/forms', '@angular/material/card', '@angular/material/input', '@angular/material-moment-adapter'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.arjentienkamp = global.arjentienkamp || {}, global.arjentienkamp['ngx-mat-calendar'] = {}), global.ng.core, global.dateFns, global.ng.material.menu, global.rxjs, global.rxjs.operators, global.ng.material.dialog, global.ng.common, global.ng.material.icon, global.ng.material.tooltip, global.ng.material.divider, global.ng.material.core, global.ng.material.button, global.ng.material.datepicker, global.ng.material.formField, global.ng.material.select, global.uuid, global.rxjs['internal/operators/tap'], global.ng.cdk.overlay, global.ng.platformBrowser, global.ng.forms, global.ng.material.card, global.ng.material.input, global.ng.materialMomentAdapter));
}(this, (function (exports, i0, dateFns, i7, rxjs, operators, i2$1, i2, i3, i3$1, i3$2, i1, i4, i8, i9, i10, uuid, tap, i3$3, platformBrowser, forms, card, input, materialMomentAdapter) { 'use strict';

    var DAY = 'day';
    var WEEK = 'week';
    var MONTH = 'month';

    var hoursOfDay = [
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
    var daysOfWeek = [
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

    var PREVIOUS = 'prev';
    var NEXT = 'next';

    var FormattingService = /** @class */ (function () {
        function FormattingService() {
        }
        FormattingService.prototype.getTime = function (date) {
            return dateFns.format(date, 'HH:mm');
        };
        FormattingService.prototype.isToday = function (date) {
            return dateFns.isToday(date);
        };
        FormattingService.prototype.getDayName = function (date) {
            return dateFns.format(date, 'E');
        };
        FormattingService.prototype.getDayNumber = function (date) {
            return dateFns.format(date, 'd');
        };
        return FormattingService;
    }());
    FormattingService.ɵfac = function FormattingService_Factory(t) { return new (t || FormattingService)(); };
    FormattingService.ɵprov = i0.ɵɵdefineInjectable({ token: FormattingService, factory: FormattingService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormattingService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    function EventRenderDayComponent_div_0_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "place");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx_r4.event.location);
        }
    }
    function EventRenderDayComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 4);
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 5);
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, EventRenderDayComponent_div_0_div_1_div_7_Template, 5, 1, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r1.event.title);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("", ctx_r1.startTime, " - ", ctx_r1.endTime, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.event.location);
        }
    }
    function EventRenderDayComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 4);
            i0.ɵɵelementStart(2, "p", 8);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r2.event.title);
        }
    }
    function EventRenderDayComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 9);
        }
    }
    function EventRenderDayComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵtemplate(1, EventRenderDayComponent_div_0_div_1_Template, 8, 4, "div", 2);
            i0.ɵɵtemplate(2, EventRenderDayComponent_div_0_div_2_Template, 4, 1, "div", 2);
            i0.ɵɵtemplate(3, EventRenderDayComponent_div_0_div_3_Template, 1, 0, "div", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("background-color", ctx_r0.event.color);
            i0.ɵɵclassProp("all-day", ctx_r0.event.allDay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.event.allDay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.event.allDay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.isSameDay && !ctx_r0.endsToday);
        }
    }
    var EventRenderDayComponent = /** @class */ (function () {
        function EventRenderDayComponent(formattingService) {
            this.formattingService = formattingService;
        }
        EventRenderDayComponent.prototype.ngOnInit = function () {
            this.startTime = this.formattingService.getTime(this.event.startTime);
            this.endTime = this.formattingService.getTime(this.event.endTime);
            this.isSameDay = dateFns.isSameDay(this.event.startTime, this.event.endTime);
            this.endsToday = dateFns.isSameDay(this.date, this.event.endTime);
        };
        return EventRenderDayComponent;
    }());
    EventRenderDayComponent.ɵfac = function EventRenderDayComponent_Factory(t) { return new (t || EventRenderDayComponent)(i0.ɵɵdirectiveInject(FormattingService)); };
    EventRenderDayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EventRenderDayComponent, selectors: [["event-render-day"]], inputs: { event: "event", date: "date" }, decls: 1, vars: 1, consts: [["class", "event", 3, "all-day", "backgroundColor", 4, "ngIf"], [1, "event"], [4, "ngIf"], ["class", "event__multiday", 4, "ngIf"], [1, "event__header"], [1, "event__metadata"], ["class", "event__location", 4, "ngIf"], [1, "event__location"], [1, "title"], [1, "event__multiday"]], template: function EventRenderDayComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, EventRenderDayComponent_div_0_Template, 4, 7, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.event);
            }
        }, directives: [i2.NgIf, i3.MatIcon], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.event[_ngcontent-%COMP%], event-render[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.event[_ngcontent-%COMP%]{justify-content:space-between;border-radius:4px;overflow:hidden}.event.all-day[_ngcontent-%COMP%]{height:auto}.event__header[_ngcontent-%COMP%]{display:flex;text-align:left;color:#546e7a;padding:.25rem;border-bottom:1px solid hsla(0,0%,100%,.5)}.event__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}.event__metadata[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;font-weight:100;color:#546e7a;padding:.25rem}.event__metadata[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.25rem}.event__location[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.event__location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px;margin-right:.25rem}.event__location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventRenderDayComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'event-render-day',
                        templateUrl: './event-render-day.component.html',
                        styleUrls: ['./event-render-day.component.scss']
                    }]
            }], function () { return [{ type: FormattingService }]; }, { event: [{
                    type: i0.Input
                }], date: [{
                    type: i0.Input
                }] });
    })();

    function EventRenderMonthComponent_div_0_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "span", 7);
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵstyleProp("background-color", ctx_r1.event.color);
        }
    }
    function EventRenderMonthComponent_div_0_p_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "p", 8);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r2.startTime);
        }
    }
    function EventRenderMonthComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 9);
        }
    }
    var _c0 = function (a0) { return { "backgroundColor": a0 }; };
    function EventRenderMonthComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵtemplate(2, EventRenderMonthComponent_div_0_span_2_Template, 1, 2, "span", 3);
            i0.ɵɵtemplate(3, EventRenderMonthComponent_div_0_p_3_Template, 2, 1, "p", 4);
            i0.ɵɵelementStart(4, "p", 5);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, EventRenderMonthComponent_div_0_div_6_Template, 1, 0, "div", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("all-day", ctx_r0.event.allDay)("past-event", ctx_r0.isPastEvent());
            i0.ɵɵproperty("matTooltip", ctx_r0.eventTooltip)("ngStyle", i0.ɵɵpureFunction1(10, _c0, ctx_r0.event.allDay ? ctx_r0.event.color : ""));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.event.allDay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.event.allDay);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.event.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.isSameDay && !ctx_r0.endsToday);
        }
    }
    var EventRenderMonthComponent = /** @class */ (function () {
        function EventRenderMonthComponent(formattingService) {
            this.formattingService = formattingService;
        }
        EventRenderMonthComponent.prototype.ngOnInit = function () {
            this.startTime = this.formattingService.getTime(this.event.startTime);
            this.endTime = this.formattingService.getTime(this.event.endTime);
            this.isSameDay = dateFns.isSameDay(this.event.startTime, this.event.endTime);
            this.endsToday = dateFns.isSameDay(this.date, this.event.endTime);
            this.eventTooltip = this.getEventTooltip();
        };
        EventRenderMonthComponent.prototype.isPastEvent = function () {
            return dateFns.isBefore(this.event.date, new Date());
        };
        EventRenderMonthComponent.prototype.getEventTooltip = function () {
            if (this.event.location) {
                return this.event.title + " (" + this.startTime + " - " + this.endTime + ") @ " + this.event.location;
            }
            return this.event.title + " (" + this.startTime + " - " + this.endTime + ")";
        };
        return EventRenderMonthComponent;
    }());
    EventRenderMonthComponent.ɵfac = function EventRenderMonthComponent_Factory(t) { return new (t || EventRenderMonthComponent)(i0.ɵɵdirectiveInject(FormattingService)); };
    EventRenderMonthComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EventRenderMonthComponent, selectors: [["event-render-month"]], inputs: { event: "event", date: "date" }, decls: 1, vars: 1, consts: [["class", "event", 4, "ngIf"], [1, "event"], [1, "even__line", 3, "matTooltip", "ngStyle"], ["class", "event-color", 3, "backgroundColor", 4, "ngIf"], ["class", "metadata", 4, "ngIf"], [1, "title"], ["class", "event__multiday", 4, "ngIf"], [1, "event-color"], [1, "metadata"], [1, "event__multiday"]], template: function EventRenderMonthComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, EventRenderMonthComponent_div_0_Template, 7, 12, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.event);
            }
        }, directives: [i2.NgIf, i3$1.MatTooltip, i2.NgStyle], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}event-render[_nghost-%COMP%]{height:100%}.event[_ngcontent-%COMP%], event-render[_nghost-%COMP%]{display:flex;flex-direction:column}.event[_ngcontent-%COMP%]{justify-content:space-between;overflow:hidden;font-size:12px}.even__line[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:left;color:#546e7a;padding:.25rem}.even__line.all-day[_ngcontent-%COMP%]{border-radius:2px;width:100%;overflow:hidden;margin-top:.25rem}.even__line.past-event[_ngcontent-%COMP%]{opacity:.7}.even__line[_ngcontent-%COMP%]   .event-color[_ngcontent-%COMP%]{min-width:10px;height:10px;border-radius:10px;margin-right:.5rem}.even__line[_ngcontent-%COMP%]   p.metadata[_ngcontent-%COMP%]{margin-right:.5rem;margin-bottom:0}.even__line[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventRenderMonthComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'event-render-month',
                        templateUrl: './event-render-month.component.html',
                        styleUrls: ['./event-render-month.component.scss']
                    }]
            }], function () { return [{ type: FormattingService }]; }, { event: [{
                    type: i0.Input
                }], date: [{
                    type: i0.Input
                }] });
    })();

    function EventRenderWeekComponent_div_0_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "place");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx_r4.event.location);
        }
    }
    function EventRenderWeekComponent_div_0_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 4);
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 5);
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, EventRenderWeekComponent_div_0_div_1_div_7_Template, 5, 1, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r1.event.title);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2("", ctx_r1.startTime, " - ", ctx_r1.endTime, "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.event.location);
        }
    }
    function EventRenderWeekComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 4);
            i0.ɵɵelementStart(2, "p", 8);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r2.event.title);
        }
    }
    function EventRenderWeekComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 9);
        }
    }
    function EventRenderWeekComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵtemplate(1, EventRenderWeekComponent_div_0_div_1_Template, 8, 4, "div", 2);
            i0.ɵɵtemplate(2, EventRenderWeekComponent_div_0_div_2_Template, 4, 1, "div", 2);
            i0.ɵɵtemplate(3, EventRenderWeekComponent_div_0_div_3_Template, 1, 0, "div", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("background-color", ctx_r0.event.color);
            i0.ɵɵclassProp("all-day", ctx_r0.event.allDay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.event.allDay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.event.allDay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.isSameDay && !ctx_r0.endsToday);
        }
    }
    var EventRenderWeekComponent = /** @class */ (function () {
        function EventRenderWeekComponent(formattingService) {
            this.formattingService = formattingService;
        }
        EventRenderWeekComponent.prototype.ngOnInit = function () {
            this.startTime = this.formattingService.getTime(this.event.startTime);
            this.endTime = this.formattingService.getTime(this.event.endTime);
            this.isSameDay = dateFns.isSameDay(this.event.startTime, this.event.endTime);
            this.endsToday = dateFns.isSameDay(this.date, this.event.endTime);
        };
        return EventRenderWeekComponent;
    }());
    EventRenderWeekComponent.ɵfac = function EventRenderWeekComponent_Factory(t) { return new (t || EventRenderWeekComponent)(i0.ɵɵdirectiveInject(FormattingService)); };
    EventRenderWeekComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EventRenderWeekComponent, selectors: [["event-render-week"]], inputs: { event: "event", date: "date" }, decls: 1, vars: 1, consts: [["class", "event", 3, "all-day", "backgroundColor", 4, "ngIf"], [1, "event"], [4, "ngIf"], ["class", "event__multiday", 4, "ngIf"], [1, "event__header"], [1, "event__metadata"], ["class", "event__location", 4, "ngIf"], [1, "event__location"], [1, "title"], [1, "event__multiday"]], template: function EventRenderWeekComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, EventRenderWeekComponent_div_0_Template, 4, 7, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.event);
            }
        }, directives: [i2.NgIf, i3.MatIcon], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.event[_ngcontent-%COMP%], event-render[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.event[_ngcontent-%COMP%]{justify-content:space-between;border-radius:4px;overflow:hidden}.event.all-day[_ngcontent-%COMP%]{height:auto}.event__header[_ngcontent-%COMP%]{display:flex;text-align:left;color:#546e7a;padding:.25rem;border-bottom:1px solid hsla(0,0%,100%,.5)}.event__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}.event__metadata[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;font-weight:100;color:#546e7a;padding:.25rem}.event__metadata[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.25rem}.event__location[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.event__location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px;margin-right:.25rem}.event__location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventRenderWeekComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'event-render-week',
                        templateUrl: './event-render-week.component.html',
                        styleUrls: ['./event-render-week.component.scss']
                    }]
            }], function () { return [{ type: FormattingService }]; }, { event: [{
                    type: i0.Input
                }], date: [{
                    type: i0.Input
                }] });
    })();

    var colors;
    (function (colors) {
        colors["grey"] = "#cfd8dc";
        colors["blue"] = "#b3e5fc";
        colors["pink"] = "#ffc1e3";
        colors["green"] = "#c8e6c9";
    })(colors || (colors = {}));

    var CalendarEvent = /** @class */ (function () {
        function CalendarEvent(init) {
            this.title = '';
            this.allDay = false;
            this.color = colors.grey;
            this.grid = new CalendarEventGrid();
            Object.assign(this, init);
        }
        return CalendarEvent;
    }());
    var CalendarEventGrid = /** @class */ (function () {
        function CalendarEventGrid() {
            this.offsetTop = 0;
            this.offsetLeft = 0;
            this.width = 100;
            this.durationOffset = 0;
            this.eventsInGroup = 0;
            this.eventGroups = [];
        }
        return CalendarEventGrid;
    }());

    var CalendarOptions = /** @class */ (function () {
        function CalendarOptions(init) {
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
        Object.defineProperty(CalendarOptions.prototype, "getPixelsPerMinute", {
            get: function () {
                if (this.compact) {
                    return this.pixelsPerMinute / 2;
                }
                return this.pixelsPerMinute;
            },
            enumerable: false,
            configurable: true
        });
        return CalendarOptions;
    }());

    function KeyboardShortcutDialogComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2, "Add event");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵelementStart(4, "span", 3);
            i0.ɵɵtext(5, "n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    var KeyboardShortcutDialogComponent = /** @class */ (function () {
        function KeyboardShortcutDialogComponent(data) {
            this.data = data;
        }
        KeyboardShortcutDialogComponent.prototype.ngOnInit = function () { };
        return KeyboardShortcutDialogComponent;
    }());
    KeyboardShortcutDialogComponent.ɵfac = function KeyboardShortcutDialogComponent_Factory(t) { return new (t || KeyboardShortcutDialogComponent)(i0.ɵɵdirectiveInject(i2$1.MAT_DIALOG_DATA)); };
    KeyboardShortcutDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: KeyboardShortcutDialogComponent, selectors: [["keyboard-shortcut-dialog"]], decls: 29, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "content-row"], [1, "keyboard-shortcut"], ["class", "content-row", 4, "ngIf"]], template: function KeyboardShortcutDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h2", 0);
                i0.ɵɵtext(1, "Keyboard Shortcuts");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-dialog-content", 1);
                i0.ɵɵelement(3, "mat-divider");
                i0.ɵɵelementStart(4, "div", 2);
                i0.ɵɵelementStart(5, "span");
                i0.ɵɵtext(6, "Switch to day view");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "span");
                i0.ɵɵelementStart(8, "span", 3);
                i0.ɵɵtext(9, "d");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "div", 2);
                i0.ɵɵelementStart(11, "span");
                i0.ɵɵtext(12, "Switch to week view");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "span");
                i0.ɵɵelementStart(14, "span", 3);
                i0.ɵɵtext(15, "w");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "div", 2);
                i0.ɵɵelementStart(17, "span");
                i0.ɵɵtext(18, "Switch to month view");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "span");
                i0.ɵɵelementStart(20, "span", 3);
                i0.ɵɵtext(21, "m");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "div", 2);
                i0.ɵɵelementStart(23, "span");
                i0.ɵɵtext(24, "Go to today");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(25, "span");
                i0.ɵɵelementStart(26, "span", 3);
                i0.ɵɵtext(27, "t");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(28, KeyboardShortcutDialogComponent_div_28_Template, 6, 0, "div", 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(28);
                i0.ɵɵproperty("ngIf", ctx.data.enableAddEventButton);
            }
        }, directives: [i2$1.MatDialogTitle, i2$1.MatDialogContent, i3$2.MatDivider, i2.NgIf], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.mat-dialog-content[_ngcontent-%COMP%]{width:450px}.mat-dialog-content[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{margin-bottom:1rem}.mat-dialog-content[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:50px}.mat-dialog-content[_ngcontent-%COMP%]   .keyboard-shortcut[_ngcontent-%COMP%]{display:block;padding:.5rem 0;border:1px solid #efefef;border-radius:4px;width:40px;text-align:center}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KeyboardShortcutDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'keyboard-shortcut-dialog',
                        templateUrl: './keyboard-shortcut-dialog.component.html',
                        styleUrls: ['./keyboard-shortcut-dialog.component.scss']
                    }]
            }], function () {
            return [{ type: CalendarOptions, decorators: [{
                            type: i0.Inject,
                            args: [i2$1.MAT_DIALOG_DATA]
                        }] }];
        }, null);
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var BaseViewComponent = /** @class */ (function () {
        function BaseViewComponent(formattingService) {
            this.formattingService = formattingService;
            this.eventClick = new i0.EventEmitter();
            this.changeToDayView = new i0.EventEmitter();
            this.subscriptions$ = new rxjs.Subscription();
            this.markerPosition = 0;
            this.hoursOfDay = hoursOfDay;
            this.pixelsPerHour = 0;
            this.selectedDate = new Date();
            this.events = [];
        }
        BaseViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscriptions$.add(this.options$.pipe(tap.tap(function (options) {
                _this.options = options;
                _this.markerPosition = _this.calculateMarkerPosition();
                _this.pixelsPerHour = _this.options.getPixelsPerMinute * 60;
            })).subscribe());
            this.subscriptions$.add(this.selectedDate$.pipe(tap.tap(function (selectedDate) {
                _this.selectedDate = selectedDate;
            })).subscribe());
            this.subscriptions$.add(rxjs.interval(60000).pipe(tap.tap(function () {
                _this.markerPosition = _this.calculateMarkerPosition();
            })).subscribe());
        };
        BaseViewComponent.prototype.createEventGroups = function (day) {
            var _this = this;
            day.events.map(function (event) {
                var uuid$1 = uuid.v4();
                var eventGroup = [];
                if (event.grid) {
                    var eventsNotAllDay = day.events.filter(function (x) { return !x.allDay; });
                    eventGroup = _this.getOverlappingEvents(event, eventsNotAllDay, event.grid.eventGroups);
                    eventGroup.map(function (overlapEvent) {
                        if (overlapEvent.grid) {
                            overlapEvent.grid.eventGroups.push(uuid$1);
                            overlapEvent.grid.eventsInGroup = eventGroup.length;
                        }
                        if (!day.eventGroups.includes(uuid$1)) {
                            day.eventGroups.push(uuid$1);
                        }
                    });
                }
            });
            this.setEventSizes(day);
            return day;
        };
        BaseViewComponent.prototype.populateEvents = function (event, day) {
            var populatedEvent = new CalendarEvent(Object.assign(Object.assign({}, event), { grid: this.calculatePixelsOffsetForEvent(event, day) }));
            return populatedEvent;
        };
        BaseViewComponent.prototype.getOverlappingEvents = function (event, events, eventGroups) {
            return events.filter(function (compareEvent) {
                var eventsDoOverlap = dateFns.areIntervalsOverlapping({ start: event.startTime, end: event.endTime }, { start: compareEvent.startTime, end: compareEvent.endTime }, { inclusive: true });
                var isAlreadyInEventGroup = false;
                if (compareEvent.grid) {
                    isAlreadyInEventGroup = compareEvent.grid.eventGroups.some(function (eventGroup) {
                        return eventGroups.includes(eventGroup);
                    });
                }
                return eventsDoOverlap && !isAlreadyInEventGroup;
            });
        };
        BaseViewComponent.prototype.setEventSizes = function (day) {
            day.eventGroups.forEach(function (eventGroup) {
                var eventGroupEvents = day.events.filter(function (event) {
                    var _a;
                    return (_a = event.grid) === null || _a === void 0 ? void 0 : _a.eventGroups.includes(eventGroup);
                });
                var index = 0;
                eventGroupEvents.forEach(function (event) {
                    if (event.grid) {
                        event.grid.width = 100 / (eventGroupEvents.length);
                        event.grid.offsetLeft = event.grid.width * index;
                    }
                    // check if already has a width/offsetLeft to determine if it's in eventgroup A or B
                    index++;
                });
            });
        };
        BaseViewComponent.prototype.calculatePixelsOffsetForEvent = function (event, day) {
            var grid = new CalendarEventGrid();
            var startTime = event.startTime;
            var endTime = dateFns.isSameDay(event.startTime, event.endTime) ?
                event.endTime :
                dateFns.endOfDay(event.startTime);
            var eventDurationFromStartTime = dateFns.intervalToDuration({
                start: startTime,
                end: endTime
            });
            var eventDurationFromMidnight = dateFns.intervalToDuration({
                start: dateFns.startOfDay(day.date),
                end: event.endTime
            });
            eventDurationFromStartTime.hours = eventDurationFromStartTime.hours || 0;
            eventDurationFromStartTime.minutes = eventDurationFromStartTime.minutes || 0;
            eventDurationFromMidnight.hours = eventDurationFromMidnight.hours || 0;
            eventDurationFromMidnight.minutes = eventDurationFromMidnight.minutes || 0;
            var offsetInMinutes = !dateFns.isSameDay(event.startTime, event.endTime) && dateFns.isSameDay(event.endTime, day.date) ?
                0 : Math.abs(dateFns.getHours(startTime)) * 60 + dateFns.getMinutes(startTime);
            var durationOffset = !dateFns.isSameDay(event.startTime, event.endTime) && dateFns.isSameDay(event.endTime, day.date) ?
                eventDurationFromMidnight.hours * 60 + eventDurationFromMidnight.minutes :
                eventDurationFromStartTime.hours * 60 + eventDurationFromStartTime.minutes;
            grid = Object.assign(Object.assign({}, grid), { offsetTop: offsetInMinutes * this.options.getPixelsPerMinute, durationOffset: durationOffset * this.options.getPixelsPerMinute });
            return grid;
        };
        BaseViewComponent.prototype.getCellHeight = function (time) {
            if (time.isEnd) {
                return 20;
            }
            return this.pixelsPerHour;
        };
        BaseViewComponent.prototype.calculateMarkerPosition = function () {
            var now = new Date();
            var offsetTop = (dateFns.getHours(now) * 60 + dateFns.getMinutes(now)) * this.options.getPixelsPerMinute;
            return offsetTop;
        };
        BaseViewComponent.prototype.isToday = function (date) {
            return this.formattingService.isToday(date);
        };
        BaseViewComponent.prototype.getDayName = function (date) {
            return this.formattingService.getDayName(date);
        };
        BaseViewComponent.prototype.getDayNumber = function (date) {
            return this.formattingService.getDayNumber(date);
        };
        BaseViewComponent.prototype.getTime = function (date) {
            return this.formattingService.getTime(date);
        };
        BaseViewComponent.prototype.onEventClick = function (event) {
            this.eventClick.emit(event);
        };
        BaseViewComponent.prototype.navigateToDayView = function (date) {
            this.changeToDayView.emit(date);
        };
        BaseViewComponent.prototype.sortByTime = function (a, b) {
            return a.startTime.getTime() - b.startTime.getTime();
        };
        BaseViewComponent.prototype.sortByAllDay = function (event) {
            return event.allDay ? -1 : 1;
        };
        BaseViewComponent.prototype.isSameDay = function (date, startTime, endTime) {
            return dateFns.isSameDay(new Date(date), new Date(startTime)) || dateFns.isSameDay(new Date(date), new Date(endTime));
        };
        BaseViewComponent.prototype.ngOnDestroy = function () {
            this.subscriptions$.unsubscribe();
        };
        return BaseViewComponent;
    }());
    BaseViewComponent.ɵfac = function BaseViewComponent_Factory(t) { return new (t || BaseViewComponent)(i0.ɵɵdirectiveInject(FormattingService)); };
    BaseViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BaseViewComponent, selectors: [["ng-component"]], inputs: { options$: "options$", selectedDate$: "selectedDate$", events$: "events$" }, outputs: { eventClick: "eventClick", changeToDayView: "changeToDayView" }, decls: 0, vars: 0, template: function BaseViewComponent_Template(rf, ctx) { }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseViewComponent, [{
                type: i0.Component,
                args: [{
                        template: ''
                    }]
            }], function () { return [{ type: FormattingService }]; }, { options$: [{
                    type: i0.Input
                }], selectedDate$: [{
                    type: i0.Input
                }], events$: [{
                    type: i0.Input
                }], eventClick: [{
                    type: i0.Output
                }], changeToDayView: [{
                    type: i0.Output
                }] });
    })();

    var CalendarDay = /** @class */ (function () {
        function CalendarDay(init) {
            this.date = new Date();
            this.eventGroups = [];
            this.events = [];
            this.eventCount = 0;
            Object.assign(this, init);
        }
        return CalendarDay;
    }());

    var _c0$1 = ["renderTarget"];
    function EventDisplayComponent_ng_template_0_Template(rf, ctx) { }
    var EventDisplayComponent = /** @class */ (function () {
        function EventDisplayComponent(resolver) {
            this.resolver = resolver;
        }
        EventDisplayComponent.prototype.ngOnInit = function () {
            if (this.event && !this.renderComponent) {
                this.createRenderComponent();
            }
        };
        EventDisplayComponent.prototype.createRenderComponent = function () {
            var componentFactory = this.resolver.resolveComponentFactory(this.component);
            this.renderComponent = this.renderTarget.createComponent(componentFactory);
            this.renderComponent.instance.event = this.event;
            this.renderComponent.instance.date = this.date;
        };
        EventDisplayComponent.prototype.ngOnDestroy = function () {
            if (this.renderComponent) {
                this.renderComponent.destroy();
            }
        };
        return EventDisplayComponent;
    }());
    EventDisplayComponent.ɵfac = function EventDisplayComponent_Factory(t) { return new (t || EventDisplayComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
    EventDisplayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EventDisplayComponent, selectors: [["event-display"]], viewQuery: function EventDisplayComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$1, 3, i0.ViewContainerRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.renderTarget = _t.first);
            }
        }, inputs: { event: "event", date: "date", component: "component" }, decls: 2, vars: 0, consts: [["renderTarget", ""]], template: function EventDisplayComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, EventDisplayComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            }
        }, styles: [":host(event-display){overflow:hidden}event-render-day,event-render-week{height:100%}"], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventDisplayComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'event-display',
                        template: "<ng-template #renderTarget></ng-template>",
                        styleUrls: ['./event-display.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { event: [{
                    type: i0.Input
                }], date: [{
                    type: i0.Input
                }], component: [{
                    type: i0.Input
                }], renderTarget: [{
                    type: i0.ViewChild,
                    args: ['renderTarget', { read: i0.ViewContainerRef, static: true }]
                }] });
    })();

    var AllDayEventPipe = /** @class */ (function () {
        function AllDayEventPipe() {
        }
        AllDayEventPipe.prototype.transform = function (items, allDay) {
            if (allDay) {
                return items.filter(function (item) { return item.allDay; });
            }
            return items.filter(function (item) { return !item.allDay; });
        };
        return AllDayEventPipe;
    }());
    AllDayEventPipe.ɵfac = function AllDayEventPipe_Factory(t) { return new (t || AllDayEventPipe)(); };
    AllDayEventPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "allDayEventPipe", type: AllDayEventPipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AllDayEventPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'allDayEventPipe'
                    }]
            }], null, null);
    })();

    function DayViewComponent_event_display_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "event-display", 17);
            i0.ɵɵlistener("click", function DayViewComponent_event_display_10_Template_event_display_click_0_listener() { i0.ɵɵrestoreView(_r7_1); var event_r5 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onEventClick(event_r5); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var event_r5 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("component", ctx_r0.options.renderComponent.day)("event", event_r5)("date", ctx_r0.selectedDate);
        }
    }
    function DayViewComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 18);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var hour_r8 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("height", ctx_r1.getCellHeight(hour_r8), "px");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", hour_r8.title, " ");
        }
    }
    function DayViewComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 19);
        }
        if (rf & 2) {
            var hour_r9 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("height", ctx_r2.getCellHeight(hour_r9), "px");
        }
    }
    function DayViewComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 20);
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("margin-top", ctx_r3.markerPosition, "px");
        }
    }
    function DayViewComponent_event_display_19_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "event-display", 17);
            i0.ɵɵlistener("click", function DayViewComponent_event_display_19_Template_event_display_click_0_listener() { i0.ɵɵrestoreView(_r12_1); var event_r10 = ctx.$implicit; var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.onEventClick(event_r10); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var event_r10 = ctx.$implicit;
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("width", event_r10.grid == null ? null : event_r10.grid.width, "%")("margin-left", event_r10.grid == null ? null : event_r10.grid.offsetLeft, "%")("margin-top", event_r10.grid == null ? null : event_r10.grid.offsetTop, "px")("height", event_r10.grid == null ? null : event_r10.grid.durationOffset, "px");
            i0.ɵɵproperty("component", ctx_r4.options.renderComponent.day)("event", event_r10)("date", ctx_r4.selectedDate);
        }
    }
    var _c0$2 = function (a0) { return { "day__header--today ": a0 }; };
    var _c1 = function (a0) { return { "day__lane--today": a0 }; };
    var DayViewComponent = /** @class */ (function (_super) {
        __extends(DayViewComponent, _super);
        function DayViewComponent(formattingService) {
            var _this = _super.call(this, formattingService) || this;
            _this.dayView = {};
            return _this;
        }
        DayViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            this.generateView();
            this.subscriptions$.add(this.events$.pipe(operators.tap(function (events) {
                _this.events = events;
                _this.generateView();
            })).subscribe());
        };
        DayViewComponent.prototype.generateView = function () {
            if (this.selectedDate) {
                var emptyDay = this.generateDays();
                this.populateDayView(emptyDay);
            }
        };
        DayViewComponent.prototype.populateDayView = function (emptyDay) {
            var _this = this;
            var populatedDay = emptyDay;
            var events = this.events.filter(function (event) {
                return _this.isSameDay(populatedDay.date, event.startTime, event.endTime);
            }).map(function (event) {
                return _this.populateEvents(event, populatedDay);
            }).sort(function (a, b) {
                return _this.sortByTime(a, b);
            });
            populatedDay.events = events;
            this.dayView = this.createEventGroups(populatedDay);
        };
        DayViewComponent.prototype.generateDays = function () {
            var date = new Date(this.selectedDate);
            var day = new CalendarDay({
                date: date,
                eventGroups: [],
                events: [],
                eventCount: 0
            });
            return day;
        };
        return DayViewComponent;
    }(BaseViewComponent));
    DayViewComponent.ɵfac = function DayViewComponent_Factory(t) { return new (t || DayViewComponent)(i0.ɵɵdirectiveInject(FormattingService)); };
    DayViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DayViewComponent, selectors: [["day-view"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 21, vars: 19, consts: [[1, "calendar__days"], [1, "calendar__day"], [1, "day__header", 3, "ngClass"], [1, "day-name"], [1, "day-number"], [1, "calendar__content"], [1, "calendar__day-events"], [1, "day__lane"], ["class", "calendar__item", 3, "component", "event", "date", "click", 4, "ngFor", "ngForOf"], [1, "calendar__lanes"], [1, "calendar__times"], ["class", "time-cell", 3, "height", 4, "ngFor", "ngForOf"], [1, "day__lane", 3, "ngClass"], [1, "time-grid"], ["class", "time-grid__cell", 3, "height", 4, "ngFor", "ngForOf"], ["class", "calendar__marker", 3, "marginTop", 4, "ngIf"], ["class", "calendar__item", 3, "component", "event", "date", "width", "marginLeft", "marginTop", "height", "click", 4, "ngFor", "ngForOf"], [1, "calendar__item", 3, "component", "event", "date", "click"], [1, "time-cell"], [1, "time-grid__cell"], [1, "calendar__marker"]], template: function DayViewComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c0$2, ctx.isToday(ctx.selectedDate)));
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
            }
        }, directives: [i2.NgClass, i2.NgForOf, i2.NgIf, EventDisplayComponent], pipes: [AllDayEventPipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__lanes[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:row;padding-top:10px}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;flex:1;padding:0 .5rem;border-right:1px solid #efefef;transition:.25s;background-color:#f4f4f4}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .time-grid[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .time-grid__cell[_ngcontent-%COMP%]{border-top:1px dotted #dbdbdb;width:100%}.calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%]{background-color:#eef7fb}.calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%]   .time-grid__cell[_ngcontent-%COMP%]{border-top-color:#c5e3f1}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DayViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'day-view',
                        templateUrl: './day-view.component.html',
                        styleUrls: ['./day-view.component.scss']
                    }]
            }], function () { return [{ type: FormattingService }]; }, null);
    })();

    var _c0$3 = function (a0) { return { "day__header--today ": a0 }; };
    function WeekViewComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵelementStart(2, "span", 11);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span", 12);
            i0.ɵɵlistener("click", function WeekViewComponent_div_1_Template_span_click_4_listener() { i0.ɵɵrestoreView(_r6_1); var day_r4 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.navigateToDayView(day_r4.date); });
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r4 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0$3, ctx_r0.isToday(day_r4.date)));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.getDayName(day_r4.date));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.getDayNumber(day_r4.date));
        }
    }
    function WeekViewComponent_div_4_event_display_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "event-display", 15);
            i0.ɵɵlistener("click", function WeekViewComponent_div_4_event_display_1_Template_event_display_click_0_listener() { i0.ɵɵrestoreView(_r11_1); var event_r9 = ctx.$implicit; var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onEventClick(event_r9); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var event_r9 = ctx.$implicit;
            var day_r7 = i0.ɵɵnextContext().$implicit;
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵproperty("component", ctx_r8.options.renderComponent.week)("event", event_r9)("date", day_r7.date);
        }
    }
    function WeekViewComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵtemplate(1, WeekViewComponent_div_4_event_display_1_Template, 1, 3, "event-display", 14);
            i0.ɵɵpipe(2, "allDayEventPipe");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r7 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 1, day_r7.events, true));
        }
    }
    function WeekViewComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 16);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var hour_r13 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("height", ctx_r2.getCellHeight(hour_r13), "px");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", hour_r13.title, " ");
        }
    }
    function WeekViewComponent_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 22);
        }
        if (rf & 2) {
            var hour_r18 = ctx.$implicit;
            var ctx_r15 = i0.ɵɵnextContext(2);
            i0.ɵɵstyleProp("height", ctx_r15.getCellHeight(hour_r18), "px");
        }
    }
    function WeekViewComponent_div_8_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "div", 23);
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵstyleProp("margin-top", ctx_r16.markerPosition, "px");
        }
    }
    function WeekViewComponent_div_8_event_display_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "event-display", 15);
            i0.ɵɵlistener("click", function WeekViewComponent_div_8_event_display_4_Template_event_display_click_0_listener() { i0.ɵɵrestoreView(_r21_1); var event_r19 = ctx.$implicit; var ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.onEventClick(event_r19); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var event_r19 = ctx.$implicit;
            var day_r14 = i0.ɵɵnextContext().$implicit;
            var ctx_r17 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("width", event_r19.grid == null ? null : event_r19.grid.width, "%")("margin-left", event_r19.grid == null ? null : event_r19.grid.offsetLeft, "%")("margin-top", event_r19.grid == null ? null : event_r19.grid.offsetTop, "px")("height", event_r19.grid == null ? null : event_r19.grid.durationOffset, "px");
            i0.ɵɵproperty("component", ctx_r17.options.renderComponent.week)("event", event_r19)("date", day_r14.date);
        }
    }
    var _c1$1 = function (a0) { return { "day__lane--today": a0 }; };
    function WeekViewComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵelementStart(1, "div", 18);
            i0.ɵɵtemplate(2, WeekViewComponent_div_8_div_2_Template, 1, 2, "div", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, WeekViewComponent_div_8_div_3_Template, 1, 2, "div", 20);
            i0.ɵɵtemplate(4, WeekViewComponent_div_8_event_display_4_Template, 1, 11, "event-display", 21);
            i0.ɵɵpipe(5, "allDayEventPipe");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r14 = ctx.$implicit;
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1$1, ctx_r3.isToday(day_r14.date)));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r3.hoursOfDay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r3.isToday(day_r14.date));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(5, 4, day_r14.events, false));
        }
    }
    var WeekViewComponent = /** @class */ (function (_super) {
        __extends(WeekViewComponent, _super);
        function WeekViewComponent(formattingService) {
            var _this = _super.call(this, formattingService) || this;
            _this.weekView = {};
            return _this;
        }
        WeekViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            this.generateView();
            this.subscriptions$.add(this.events$.pipe(operators.tap(function (events) {
                _this.events = events;
                _this.generateView();
            })).subscribe());
        };
        WeekViewComponent.prototype.generateView = function () {
            if (this.selectedDate) {
                var emptyDays = this.generateDays();
                this.populateWeekView(emptyDays);
            }
        };
        WeekViewComponent.prototype.populateWeekView = function (emptyDays) {
            var _this = this;
            var populatedDays = emptyDays;
            populatedDays.forEach(function (day) {
                day.events = _this.events.filter(function (event) {
                    return _this.isSameDay(day.date, event.startTime, event.endTime);
                }).map(function (event) {
                    return _this.populateEvents(event, day);
                }).sort(function (a, b) {
                    return _this.sortByTime(a, b);
                });
                day = _this.createEventGroups(day);
            });
            this.weekView.days = populatedDays;
        };
        WeekViewComponent.prototype.generateDays = function () {
            var selectedWeekStart = dateFns.startOfWeek(this.selectedDate, { weekStartsOn: 1 });
            var days = [];
            for (var i = 0; i < 7; i++) {
                var date = new Date(selectedWeekStart);
                date = dateFns.add(date, { days: i });
                var day = new CalendarDay({
                    date: date,
                    eventGroups: [],
                    events: []
                });
                days.push(day);
            }
            return days;
        };
        return WeekViewComponent;
    }(BaseViewComponent));
    WeekViewComponent.ɵfac = function WeekViewComponent_Factory(t) { return new (t || WeekViewComponent)(i0.ɵɵdirectiveInject(FormattingService)); };
    WeekViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WeekViewComponent, selectors: [["week-view"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 4, consts: [[1, "calendar__days"], ["class", "calendar__day", 4, "ngFor", "ngForOf"], [1, "calendar__content"], [1, "calendar__day-events"], ["class", "day__lane", 4, "ngFor", "ngForOf"], [1, "calendar__lanes"], [1, "calendar__times"], ["class", "time-cell", 3, "height", 4, "ngFor", "ngForOf"], ["class", "day__lane", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "calendar__day"], [1, "day__header", 3, "ngClass"], [1, "day-name"], [1, "day-number", 3, "click"], [1, "day__lane"], ["class", "calendar__item", 3, "component", "event", "date", "click", 4, "ngFor", "ngForOf"], [1, "calendar__item", 3, "component", "event", "date", "click"], [1, "time-cell"], [1, "day__lane", 3, "ngClass"], [1, "time-grid"], ["class", "time-grid__cell", 3, "height", 4, "ngFor", "ngForOf"], ["class", "calendar__marker", 3, "marginTop", 4, "ngIf"], ["class", "calendar__item", 3, "component", "event", "date", "width", "marginLeft", "marginTop", "height", "click", 4, "ngFor", "ngForOf"], [1, "time-grid__cell"], [1, "calendar__marker"]], template: function WeekViewComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.weekView.days);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.weekView.days);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.hoursOfDay);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.weekView.days);
            }
        }, directives: [i2.NgForOf, i2.NgClass, EventDisplayComponent, i2.NgIf], pipes: [AllDayEventPipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__lanes[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:row;padding-top:10px}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative;flex:1;padding:0 .5rem;border-right:1px solid #efefef;transition:.25s}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]:hover{background-color:#f4f4f4}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]:hover   .time-grid__cell[_ngcontent-%COMP%]{border-top-color:#dbdbdb}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .time-grid[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}.calendar__lanes[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .time-grid__cell[_ngcontent-%COMP%]{border-top:1px dotted #efefef;width:100%}.calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%], .calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%]:hover{background-color:#eef7fb}.calendar__lanes[_ngcontent-%COMP%]   .day__lane--today[_ngcontent-%COMP%]   .time-grid__cell[_ngcontent-%COMP%]{border-top-color:#c5e3f1}.calendar__day[_ngcontent-%COMP%]{justify-content:center}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]:hover   .day-number[_ngcontent-%COMP%]{cursor:pointer}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WeekViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'week-view',
                        templateUrl: './week-view.component.html',
                        styleUrls: ['./week-view.component.scss']
                    }]
            }], function () { return [{ type: FormattingService }]; }, null);
    })();

    var LimitPipe = /** @class */ (function () {
        function LimitPipe() {
        }
        LimitPipe.prototype.transform = function (items, limit) {
            return items.slice(0, limit);
        };
        return LimitPipe;
    }());
    LimitPipe.ɵfac = function LimitPipe_Factory(t) { return new (t || LimitPipe)(); };
    LimitPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "limitPipe", type: LimitPipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LimitPipe, [{
                type: i0.Pipe,
                args: [{
                        name: 'limitPipe'
                    }]
            }], null, null);
    })();

    var _c0$4 = ["calendarDayElement"];
    function MonthViewComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 9);
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵelementStart(2, "span", 11);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r5 = ctx.$implicit;
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(day_r5.title);
        }
    }
    function MonthViewComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var weekNumber_r6 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", weekNumber_r6, " ");
        }
    }
    function MonthViewComponent_div_7_event_display_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "event-display", 19);
            i0.ɵɵlistener("click", function MonthViewComponent_div_7_event_display_5_Template_event_display_click_0_listener() { i0.ɵɵrestoreView(_r12_1); var event_r10 = ctx.$implicit; var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onEventClick(event_r10); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var event_r10 = ctx.$implicit;
            var day_r7 = i0.ɵɵnextContext().$implicit;
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵproperty("component", ctx_r8.options.renderComponent.month)("event", event_r10)("date", day_r7.date);
        }
    }
    function MonthViewComponent_div_7_span_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "div", 20, 21);
            i0.ɵɵlistener("click", function MonthViewComponent_div_7_span_7_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r16_1); var _r14 = i0.ɵɵreference(2); var day_r7 = i0.ɵɵnextContext().$implicit; var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.toggleHiddenEvents(_r14, day_r7); });
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r7 = i0.ɵɵnextContext().$implicit;
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", day_r7.eventCount - ctx_r9.maxEventsVisible + 1, " more ");
        }
    }
    function MonthViewComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r20_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 13);
            i0.ɵɵelementStart(1, "div", 14);
            i0.ɵɵelementStart(2, "span", 15);
            i0.ɵɵlistener("click", function MonthViewComponent_div_7_Template_span_click_2_listener() { i0.ɵɵrestoreView(_r20_1); var day_r7 = ctx.$implicit; var ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.navigateToDayView(day_r7.date); });
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 16);
            i0.ɵɵtemplate(5, MonthViewComponent_div_7_event_display_5_Template, 1, 3, "event-display", 17);
            i0.ɵɵpipe(6, "limitPipe");
            i0.ɵɵtemplate(7, MonthViewComponent_div_7_span_7_Template, 4, 1, "span", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r7 = ctx.$implicit;
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("is-today", ctx_r3.isToday(day_r7.date));
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("not-current-month", !ctx_r3.isCurrentMonth(day_r7.date));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r3.getDayNumber(day_r7.date));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(6, 7, day_r7.events, ctx_r3.maxEventsVisible - 1));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", day_r7.eventCount && ctx_r3.maxEventsVisible > 0 && day_r7.eventCount >= ctx_r3.maxEventsVisible);
        }
    }
    function MonthViewComponent_ng_template_8_event_display_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r24_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "event-display", 19);
            i0.ɵɵlistener("click", function MonthViewComponent_ng_template_8_event_display_3_Template_event_display_click_0_listener() { i0.ɵɵrestoreView(_r24_1); var event_r22 = ctx.$implicit; var ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onEventClick(event_r22); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var event_r22 = ctx.$implicit;
            var ctx_r21 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("component", ctx_r21.options.renderComponent.month)("event", event_r22)("date", ctx_r21.hiddenEventsDay.date);
        }
    }
    function MonthViewComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r26_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 22);
            i0.ɵɵelementStart(1, "span", 23);
            i0.ɵɵlistener("click", function MonthViewComponent_ng_template_8_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r26_1); var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.navigateToDayView(ctx_r25.hiddenEventsDay.date); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, MonthViewComponent_ng_template_8_event_display_3_Template, 1, 3, "event-display", 17);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("height", ctx_r4.getHiddenEventsHeight(), "px");
            i0.ɵɵclassProp("is-today", ctx_r4.isToday(ctx_r4.hiddenEventsDay.date));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r4.getDayNumber(ctx_r4.hiddenEventsDay.date), " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r4.hiddenEventsDay.events);
        }
    }
    var MonthViewComponent = /** @class */ (function (_super) {
        __extends(MonthViewComponent, _super);
        function MonthViewComponent(formattingService) {
            var _this = _super.call(this, formattingService) || this;
            _this.setCalendarOffset = new i0.EventEmitter();
            _this.monthView = {};
            _this.daysOfWeek = daysOfWeek;
            _this.dayBlockHeight = 0;
            _this.weekNumbers = [];
            _this.showHiddenEvents = false;
            _this.maxEventsVisible = 0;
            _this.scrollListener = new rxjs.Subject();
            _this.scrollListener$ = _this.scrollListener.asObservable();
            rxjs.fromEvent(window, 'wheel')
                .pipe(operators.takeUntil(_this.scrollListener$), operators.throttle(function (e) { return rxjs.interval(1000); }))
                .subscribe(function (e) { return _this.handleScroll(e); });
            _this.hiddenEventsDay = new CalendarDay();
            return _this;
        }
        MonthViewComponent.prototype.onResize = function () {
            this.calculateMaxEventsPerDay();
        };
        MonthViewComponent.prototype.ngOnInit = function () {
            var _this = this;
            _super.prototype.ngOnInit.call(this);
            this.generateView();
            this.listenToCalendarViewportChanges();
            this.subscriptions$.add(this.events$.pipe(operators.tap(function (events) {
                _this.events = events;
                _this.generateView();
            })).subscribe());
            this.subscriptions$.add(this.selectedDate$.pipe(operators.tap(function () {
                _this.closeHiddenEvents();
            })).subscribe());
        };
        MonthViewComponent.prototype.listenToCalendarViewportChanges = function () {
            var _this = this;
            this.observer = new MutationObserver(function (list) {
                _this.calculateMaxEventsPerDay();
            });
            this.observer.observe(this.calendarDayElement.nativeElement, { childList: true });
        };
        MonthViewComponent.prototype.generateView = function () {
            if (this.selectedDate) {
                var emptyDays = this.generateDays();
                this.populateMonthView(emptyDays);
                this.getWeekNumbers();
                this.calculateMaxEventsPerDay();
            }
        };
        MonthViewComponent.prototype.getWeekNumbers = function () {
            var _this = this;
            var weeksOfMonth = dateFns.eachWeekOfInterval({
                start: dateFns.startOfMonth(this.selectedDate),
                end: dateFns.endOfMonth(this.selectedDate)
            });
            this.weekNumbers = [];
            weeksOfMonth.forEach(function (week) {
                _this.weekNumbers.push(dateFns.getWeek(week, { weekStartsOn: 1 }));
            });
        };
        MonthViewComponent.prototype.populateMonthView = function (emptyDays) {
            var _this = this;
            var populatedDays = emptyDays;
            populatedDays.forEach(function (day) {
                day.events = _this.events.filter(function (event) {
                    return _this.isSameDay(day.date, event.startTime, event.endTime);
                }).map(function (event) {
                    return _this.populateEvents(event, day);
                }).sort(function (a, b) {
                    return _this.sortByTime(a, b);
                }).sort(function (event) {
                    return _this.sortByAllDay(event);
                });
                day = _this.createEventGroups(day);
                day.eventCount = day.events.length;
            });
            this.monthView.days = populatedDays;
        };
        MonthViewComponent.prototype.generateDays = function () {
            var dayOfWeek = dateFns.add(dateFns.startOfMonth(this.selectedDate), { days: 7 }).getDay();
            var selectedMonthStart = dateFns.sub(dateFns.startOfMonth(this.selectedDate), { days: dayOfWeek - 1 });
            var days = [];
            for (var i = 0; i < 35; i++) {
                var date = new Date(selectedMonthStart);
                date = dateFns.add(date, { days: i });
                var day = {
                    date: date,
                    eventGroups: [],
                    events: [],
                    eventCount: 0
                };
                days.push(day);
            }
            return days;
        };
        MonthViewComponent.prototype.isCurrentMonth = function (date) {
            return dateFns.isSameMonth(date, this.selectedDate);
        };
        MonthViewComponent.prototype.handleScroll = function (e) {
            e.deltaY > 0 ? this.setCalendarOffset.emit(NEXT) : this.setCalendarOffset.emit(PREVIOUS);
        };
        MonthViewComponent.prototype.toggleHiddenEvents = function (hiddenEventsTriggerOrigin, day) {
            this.hiddenEventsTriggerOrigin = hiddenEventsTriggerOrigin;
            this.hiddenEventsDay = day;
            this.showHiddenEvents = !this.showHiddenEvents;
        };
        MonthViewComponent.prototype.closeHiddenEvents = function () {
            this.showHiddenEvents = false;
        };
        MonthViewComponent.prototype.getHiddenEventsHeight = function () {
            return (this.hiddenEventsDay.eventCount * 30) + 85;
        };
        MonthViewComponent.prototype.calculateMaxEventsPerDay = function () {
            var _a;
            var dayBlockHeight = (_a = this.calendarDayElement.nativeElement.children[0]) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height;
            this.maxEventsVisible = Math.floor((dayBlockHeight - 25) / 30);
        };
        MonthViewComponent.prototype.ngOnDestroy = function () {
            this.scrollListener.next();
            this.observer.disconnect();
        };
        return MonthViewComponent;
    }(BaseViewComponent));
    MonthViewComponent.ɵfac = function MonthViewComponent_Factory(t) { return new (t || MonthViewComponent)(i0.ɵɵdirectiveInject(FormattingService)); };
    MonthViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MonthViewComponent, selectors: [["month-view"]], viewQuery: function MonthViewComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$4, 3, i0.ElementRef);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.calendarDayElement = _t.first);
            }
        }, hostBindings: function MonthViewComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("resize", function MonthViewComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, i0.ɵɵresolveWindow);
            }
        }, outputs: { setCalendarOffset: "setCalendarOffset" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 7, consts: [[1, "calendar__days"], ["class", "calendar__day", 4, "ngFor", "ngForOf"], [1, "calendar__weeknumbers"], ["class", "week-number-cell", 4, "ngFor", "ngForOf"], [1, "calendar__content"], [1, "calendar__blocks"], ["calendarDayElement", ""], ["class", "day__block", 3, "is-today", 4, "ngFor", "ngForOf"], ["cdkConnectedOverlay", "", "cdkConnectedOverlayPanelClass", "hidden-events-overlay", 3, "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "overlayOutsideClick"], [1, "calendar__day"], [1, "day__header"], [1, "day-name"], [1, "week-number-cell"], [1, "day__block"], [1, "day__block-content"], [1, "day__block-date", 3, "click"], [1, "day__events"], ["class", "calendar__item", 3, "component", "event", "date", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "calendar__item", 3, "component", "event", "date", "click"], ["cdkOverlayOrigin", "", 1, "hidden-events-trigger", 3, "click"], ["trigger", "cdkOverlayOrigin"], [1, "event-container"], [1, "event-container__date", 3, "click"]], template: function MonthViewComponent_Template(rf, ctx) {
            if (rf & 1) {
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
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.daysOfWeek);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.weekNumbers);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.monthView.days);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkConnectedOverlayOffsetY", -100)("cdkConnectedOverlayOffsetX", -35)("cdkConnectedOverlayOrigin", ctx.hiddenEventsTriggerOrigin)("cdkConnectedOverlayOpen", ctx.showHiddenEvents);
            }
        }, directives: [i2.NgForOf, i3$3.CdkConnectedOverlay, i2.NgIf, EventDisplayComponent, i3$3.CdkOverlayOrigin], pipes: [LimitPipe], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__content[_ngcontent-%COMP%]{display:flex;margin-left:4px;margin-top:15px;border-left:1px solid #efefef}.calendar__days[_ngcontent-%COMP%]{height:1.5rem;margin-left:38px}.calendar__days[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{flex:1}.calendar__weeknumbers[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;padding-top:1.5rem;text-align:center;width:22px;margin-right:12px}.calendar__weeknumbers[_ngcontent-%COMP%]   .week-number-cell[_ngcontent-%COMP%]{color:#c8c8c8}.calendar__blocks[_ngcontent-%COMP%]{display:flex;flex:1;flex-wrap:wrap;flex-direction:row;padding-top:.5rem}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;width:calc(100% / 7);padding-top:.5rem;overflow:hidden;border-right:1px solid #efefef;border-bottom:1px solid #efefef}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .day__block-content[_ngcontent-%COMP%]{justify-content:center;display:flex}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .day__block-date[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;width:25px;height:25px;color:#2a2a2a;font-size:.75rem}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .day__block-date[_ngcontent-%COMP%]:hover{cursor:pointer}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .day__events[_ngcontent-%COMP%]{position:absolute;overflow:hidden;top:2rem;width:100%}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .not-current-month[_ngcontent-%COMP%]{opacity:.25}.calendar__blocks[_ngcontent-%COMP%]   .day__block.is-today[_ngcontent-%COMP%]{background-color:#eef7fb}.calendar__blocks[_ngcontent-%COMP%]   .day__block.is-today[_ngcontent-%COMP%]   .day__block-date[_ngcontent-%COMP%]{border-radius:100%;background:#2a2a2a;color:#fff}.calendar__blocks[_ngcontent-%COMP%]   .day__block[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative;padding:0 2px}.hidden-events-trigger[_ngcontent-%COMP%]{font-size:12px;padding:0 .5rem;font-weight:600}.hidden-events-trigger[_ngcontent-%COMP%]:hover{cursor:pointer;opacity:.7}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'month-view',
                        templateUrl: './month-view.component.html',
                        styleUrls: ['./month-view.component.scss']
                    }]
            }], function () { return [{ type: FormattingService }]; }, { setCalendarOffset: [{
                    type: i0.Output
                }], calendarDayElement: [{
                    type: i0.ViewChild,
                    args: ['calendarDayElement', { read: i0.ElementRef, static: true }]
                }], onResize: [{
                    type: i0.HostListener,
                    args: ['window:resize', ['$event']]
                }] });
    })();

    function NgxMatCalendarComponent_div_0_span_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 19);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Week ", ctx_r1.calendar.weeknumber, "");
        }
    }
    function NgxMatCalendarComponent_div_0_button_15_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 20);
            i0.ɵɵlistener("click", function NgxMatCalendarComponent_div_0_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11_1); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.showKeyboardShortcutDialog(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "keyboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function NgxMatCalendarComponent_div_0_mat_form_field_16_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 21);
            i0.ɵɵelementStart(1, "mat-select", 22, 23);
            i0.ɵɵlistener("selectionChange", function NgxMatCalendarComponent_div_0_mat_form_field_16_Template_mat_select_selectionChange_1_listener() { i0.ɵɵrestoreView(_r14_1); var _r12 = i0.ɵɵreference(2); var ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.onViewChange(_r12.value); });
            i0.ɵɵelementStart(3, "mat-option", 24);
            i0.ɵɵtext(4, "Day");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-option", 25);
            i0.ɵɵtext(6, "Week");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-option", 26);
            i0.ɵɵtext(8, "Month");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r3.selectedView);
        }
    }
    function NgxMatCalendarComponent_div_0_button_21_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 27);
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "calendar_today");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵnextContext();
            var _r4 = i0.ɵɵreference(18);
            i0.ɵɵproperty("matMenuTriggerFor", _r4);
        }
    }
    function NgxMatCalendarComponent_div_0_day_view_22_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "day-view", 28);
            i0.ɵɵlistener("eventClick", function NgxMatCalendarComponent_div_0_day_view_22_Template_day_view_eventClick_0_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onEventClick($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("events$", ctx_r6.events$)("selectedDate$", ctx_r6.selectedDate$)("options$", ctx_r6.options$);
        }
    }
    function NgxMatCalendarComponent_div_0_week_view_23_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "week-view", 29);
            i0.ɵɵlistener("eventClick", function NgxMatCalendarComponent_div_0_week_view_23_Template_week_view_eventClick_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.onEventClick($event); })("changeToDayView", function NgxMatCalendarComponent_div_0_week_view_23_Template_week_view_changeToDayView_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.changeToDayView($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("events$", ctx_r7.events$)("selectedDate$", ctx_r7.selectedDate$)("options$", ctx_r7.options$);
        }
    }
    function NgxMatCalendarComponent_div_0_month_view_24_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "month-view", 30);
            i0.ɵɵlistener("eventClick", function NgxMatCalendarComponent_div_0_month_view_24_Template_month_view_eventClick_0_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.onEventClick($event); })("setCalendarOffset", function NgxMatCalendarComponent_div_0_month_view_24_Template_month_view_setCalendarOffset_0_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.setCalendarOffset($event); })("changeToDayView", function NgxMatCalendarComponent_div_0_month_view_24_Template_month_view_changeToDayView_0_listener($event) { i0.ɵɵrestoreView(_r21_1); var ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.changeToDayView($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("events$", ctx_r8.events$)("selectedDate$", ctx_r8.selectedDate$)("options$", ctx_r8.options$);
        }
    }
    function NgxMatCalendarComponent_div_0_button_25_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 31);
            i0.ɵɵlistener("click", function NgxMatCalendarComponent_div_0_button_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25_1); var ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.onAddButtonClick(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function NgxMatCalendarComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r27_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵelementStart(2, "button", 3);
            i0.ɵɵlistener("click", function NgxMatCalendarComponent_div_0_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r27_1); var ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.setCalendarToday(); });
            i0.ɵɵtext(3, " Today ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 4);
            i0.ɵɵlistener("click", function NgxMatCalendarComponent_div_0_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r27_1); var ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.setCalendarOffset("prev"); });
            i0.ɵɵelementStart(5, "mat-icon");
            i0.ɵɵtext(6, "chevron_left");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵlistener("click", function NgxMatCalendarComponent_div_0_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r27_1); var ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.setCalendarOffset("next"); });
            i0.ɵɵelementStart(8, "mat-icon");
            i0.ɵɵtext(9, "chevron_right");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 5);
            i0.ɵɵelementStart(11, "span", 6);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(13, NgxMatCalendarComponent_div_0_span_13_Template, 2, 1, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 8);
            i0.ɵɵtemplate(15, NgxMatCalendarComponent_div_0_button_15_Template, 3, 0, "button", 9);
            i0.ɵɵtemplate(16, NgxMatCalendarComponent_div_0_mat_form_field_16_Template, 9, 1, "mat-form-field", 10);
            i0.ɵɵelementStart(17, "mat-menu", null, 11);
            i0.ɵɵelementStart(19, "div", 12);
            i0.ɵɵlistener("click", function NgxMatCalendarComponent_div_0_Template_div_click_19_listener($event) { return $event.stopPropagation(); });
            i0.ɵɵelementStart(20, "mat-calendar", 13);
            i0.ɵɵlistener("selectedChange", function NgxMatCalendarComponent_div_0_Template_mat_calendar_selectedChange_20_listener($event) { i0.ɵɵrestoreView(_r27_1); var ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.onDatePickerChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(21, NgxMatCalendarComponent_div_0_button_21_Template, 3, 1, "button", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(22, NgxMatCalendarComponent_div_0_day_view_22_Template, 1, 3, "day-view", 15);
            i0.ɵɵtemplate(23, NgxMatCalendarComponent_div_0_week_view_23_Template, 1, 3, "week-view", 16);
            i0.ɵɵtemplate(24, NgxMatCalendarComponent_div_0_month_view_24_Template, 1, 3, "month-view", 17);
            i0.ɵɵtemplate(25, NgxMatCalendarComponent_div_0_button_25_Template, 3, 0, "button", 18);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matTooltip", ctx_r0.today);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx_r0.calendar.monthAndYear);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r0.getSelectedView("month"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r0.enableKeyboardShortcutDialog);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.enableViewToggle);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx_r0.enableDatePickerButton);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.getSelectedView("day"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.getSelectedView("week"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.getSelectedView("month"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.options.enableAddEventButton);
        }
    }
    var NgxMatCalendarComponent = /** @class */ (function () {
        function NgxMatCalendarComponent(dateAdapter, dialog) {
            this.dateAdapter = dateAdapter;
            this.dialog = dialog;
            this.dateChange = new i0.EventEmitter();
            this.eventClick = new i0.EventEmitter();
            this.addButtonClick = new i0.EventEmitter();
            this.subscriptions$ = new rxjs.Subscription();
            this.calendar = {};
            this.today = dateFns.format(new Date(), 'EEEE, d MMMM');
        }
        NgxMatCalendarComponent.prototype.onKeyDown = function (event) {
            this.handleKeyboardEvents(event);
        };
        NgxMatCalendarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.subscriptions$.add(this.options$.pipe(operators.tap(function (options) {
                _this.options = options;
                _this.selectedView = options.view;
                _this.initCalendar();
            })).subscribe());
            this.subscriptions$.add(this.events$.pipe(operators.tap(function (events) {
                _this.events = events;
                _this.parseDates(events);
            })).subscribe());
            this.subscriptions$.add(this.selectedDate$.pipe(operators.tap(function (selectedDate) {
                _this.selectedDate = selectedDate;
                _this.initCalendar();
                if (_this.selectedDate !== selectedDate) {
                    _this.dateChange.emit(_this.selectedDate);
                }
            })).subscribe());
        };
        NgxMatCalendarComponent.prototype.initCalendar = function () {
            if (this.options) {
                this.enableDatePickerButton = this.options.enableDatePickerButton;
                this.enableViewToggle = this.options.enableViewToggle;
                this.enableKeyboardShortcutDialog = this.options.enableKeyboardShortcutDialog;
                this.dateAdapter.setLocale(this.options.locale);
                this.generateCalendar();
            }
        };
        NgxMatCalendarComponent.prototype.generateCalendar = function () {
            if (this.selectedDate) {
                this.calendar = {
                    monthAndYear: dateFns.format(this.selectedDate, 'MMMM yyyy'),
                    weeknumber: dateFns.format(this.selectedDate, 'I')
                };
            }
        };
        NgxMatCalendarComponent.prototype.parseDates = function (events) {
            this.events = events.map(function (event) {
                event.date = new Date(event.date);
                event.startTime = new Date(event.startTime);
                event.endTime = new Date(event.endTime);
                return event;
            });
        };
        NgxMatCalendarComponent.prototype.isToday = function (date) {
            return dateFns.isToday(date);
        };
        NgxMatCalendarComponent.prototype.setCalendarToday = function () {
            this.selectedDate = new Date();
            this.selectedDate$.next(this.selectedDate);
            this.handleCalendarSet();
        };
        NgxMatCalendarComponent.prototype.setCalendarOffset = function (direction) {
            var _a;
            var offset = Periods[this.selectedView];
            this.selectedDate = dateFns.add(this.selectedDate, (_a = {},
                _a[offset] = direction === PREVIOUS ? -1 : 1,
                _a));
            this.selectedDate$.next(this.selectedDate);
            this.handleCalendarSet();
        };
        NgxMatCalendarComponent.prototype.setCalendar = function (date) {
            if (date) {
                this.selectedDate = date;
                this.selectedDate$.next(date);
                this.handleCalendarSet();
            }
        };
        NgxMatCalendarComponent.prototype.handleCalendarSet = function () {
            this.generateCalendar();
            this.dateChange.emit(this.selectedDate);
        };
        NgxMatCalendarComponent.prototype.onViewChange = function (view) {
            this.selectedView = view;
        };
        NgxMatCalendarComponent.prototype.changeToDayView = function (date) {
            this.selectedView = DAY;
            this.setCalendar(date);
        };
        NgxMatCalendarComponent.prototype.getSelectedView = function (view) {
            return this.selectedView === view;
        };
        NgxMatCalendarComponent.prototype.onEventClick = function (event) {
            this.eventClick.emit(event);
        };
        NgxMatCalendarComponent.prototype.onAddButtonClick = function () {
            this.addButtonClick.emit();
        };
        NgxMatCalendarComponent.prototype.onDatePickerChange = function (date) {
            this.setCalendar(dateFns.toDate(date));
            this.datePickerMenu.closeMenu();
        };
        NgxMatCalendarComponent.prototype.showKeyboardShortcutDialog = function () {
            var dialogRef = this.dialog.open(KeyboardShortcutDialogComponent, {
                data: this.options
            });
        };
        NgxMatCalendarComponent.prototype.handleKeyboardEvents = function (event) {
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
        };
        NgxMatCalendarComponent.prototype.ngOnDestroy = function () {
            this.subscriptions$.unsubscribe();
        };
        return NgxMatCalendarComponent;
    }());
    NgxMatCalendarComponent.ɵfac = function NgxMatCalendarComponent_Factory(t) { return new (t || NgxMatCalendarComponent)(i0.ɵɵdirectiveInject(i1.DateAdapter), i0.ɵɵdirectiveInject(i2$1.MatDialog)); };
    NgxMatCalendarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxMatCalendarComponent, selectors: [["ngx-mat-calendar"]], viewQuery: function NgxMatCalendarComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(i7.MatMenuTrigger, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePickerMenu = _t.first);
            }
        }, hostBindings: function NgxMatCalendarComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function NgxMatCalendarComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, i0.ɵɵresolveWindow);
            }
        }, inputs: { options$: "options$", events$: "events$", selectedDate$: "selectedDate$" }, outputs: { dateChange: "dateChange", eventClick: "eventClick", addButtonClick: "addButtonClick" }, decls: 1, vars: 1, consts: [["class", "calendar", 4, "ngIf"], [1, "calendar"], [1, "calendar__toolbar"], ["mat-stroked-button", "", "color", "primary", 1, "toolbar__button", "toolbar__button--today", 3, "matTooltip", "click"], ["mat-icon-button", "", "color", "primary", 1, "toolbar__button", "toolbar__button--navigate", 3, "click"], [1, "toolbar__meta"], [1, "toolbar__month"], ["class", "toolbar__week", 4, "ngIf"], [1, "toolbar__right"], ["mat-icon-button", "", "matTooltip", "Keyboard shortcuts", "class", "toolbar__button toolbar__button--keyboard-shortcut", "color", "primary", 3, "click", 4, "ngIf"], ["appearance", "outline", "class", "toolbar__view-switch", 4, "ngIf"], ["datePickerMenu", "matMenu"], [3, "click"], [3, "selectedChange"], ["matTooltip", "Pick a date", "mat-icon-button", "", "class", "toolbar__button", "color", "primary", 3, "matMenuTriggerFor", 4, "ngIf"], [3, "events$", "selectedDate$", "options$", "eventClick", 4, "ngIf"], [3, "events$", "selectedDate$", "options$", "eventClick", "changeToDayView", 4, "ngIf"], [3, "events$", "selectedDate$", "options$", "eventClick", "setCalendarOffset", "changeToDayView", 4, "ngIf"], ["class", "calendar__add-button", "mat-fab", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "toolbar__week"], ["mat-icon-button", "", "matTooltip", "Keyboard shortcuts", "color", "primary", 1, "toolbar__button", "toolbar__button--keyboard-shortcut", 3, "click"], ["appearance", "outline", 1, "toolbar__view-switch"], [3, "value", "selectionChange"], ["view", ""], ["value", "day"], ["value", "week"], ["value", "month"], ["matTooltip", "Pick a date", "mat-icon-button", "", "color", "primary", 1, "toolbar__button", 3, "matMenuTriggerFor"], [3, "events$", "selectedDate$", "options$", "eventClick"], [3, "events$", "selectedDate$", "options$", "eventClick", "changeToDayView"], [3, "events$", "selectedDate$", "options$", "eventClick", "setCalendarOffset", "changeToDayView"], ["mat-fab", "", "color", "primary", 1, "calendar__add-button", 3, "click"]], template: function NgxMatCalendarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, NgxMatCalendarComponent_div_0_Template, 26, 10, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.events && ctx.options);
            }
        }, directives: [i2.NgIf, i4.MatButton, i3$1.MatTooltip, i3.MatIcon, i7.MatMenu, i8.MatCalendar, i9.MatFormField, i10.MatSelect, i1.MatOption, i7.MatMenuTrigger, DayViewComponent, WeekViewComponent, MonthViewComponent], styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}:host(ngx-mat-calendar){flex:1;height:100%}.calendar{position:relative;display:flex;flex-direction:column;height:100%}day-view,month-view,week-view{display:flex;height:100%;overflow:hidden}[hidden]{display:none}.calendar__toolbar{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:1rem}.calendar__toolbar .toolbar__button,.calendar__toolbar .toolbar__month,.calendar__toolbar .toolbar__right{display:flex}.calendar__toolbar .toolbar__button{justify-content:center;margin-left:1rem}.calendar__toolbar .toolbar__button--today{margin-left:0;margin-right:1rem}.calendar__toolbar .toolbar__button--navigate{margin-left:0}.calendar__toolbar .toolbar__meta{display:flex;align-items:center;font-weight:200}.calendar__toolbar .toolbar__meta .toolbar__month{margin-left:1rem;font-size:1.25rem}.calendar__toolbar .toolbar__meta .toolbar__week{margin-left:1rem;font-size:1rem;padding:.25rem .5rem;font-size:.75rem;text-transform:uppercase;background-color:#efefef;border-radius:4px}.calendar__toolbar .toolbar__right{flex:1;justify-content:flex-end;align-items:center}.calendar__toolbar .toolbar__datepicker{position:absolute;right:60px}.calendar__toolbar .toolbar__datepicker .mat-form-field{font-size:12px}.calendar__toolbar .toolbar__datepicker .mat-form-field-wrapper{padding-bottom:0}.calendar__toolbar mat-form-field.toolbar__view-switch{margin-left:1rem;align-items:center}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-form-field-wrapper{margin:0;padding:0}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-form-field-infix{padding:.25rem 0 .5rem;width:90px}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-select-arrow{margin-top:.25rem}.calendar__add-button{position:absolute;z-index:1;right:-.5rem;bottom:-.5rem;width:80px;height:80px}.calendar__add-button mat-icon{transform:scale(1.25)}mat-calendar{padding:0 .75rem}.cdk-overlay-pane.hidden-events-overlay{width:calc((100% / 7) + 50px)}.cdk-overlay-pane.hidden-events-overlay .event-container{display:flex;flex-direction:column;position:absolute;background-color:#fff;padding:.5rem;border-radius:4px;overflow:hidden;width:100%;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.cdk-overlay-pane.hidden-events-overlay .event-container.is-today .event-container__date{border-radius:100%;background:#2a2a2a;color:#fff}.cdk-overlay-pane.hidden-events-overlay .event-container .event-container__date{display:flex;justify-content:center;align-items:center;align-self:center;margin-bottom:.5rem;width:40px;min-height:40px;border-radius:20px;margin-top:4px;background-color:#efefef;color:#2a2a2a;font-size:14px}.cdk-overlay-pane.hidden-events-overlay .event-container .event-container__date:hover{cursor:pointer}.cdk-overlay-pane.hidden-events-overlay event-display{position:relative}"], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxMatCalendarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-mat-calendar',
                        templateUrl: './ngx-mat-calendar.component.html',
                        styleUrls: ['./ngx-mat-calendar.component.scss'],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: i1.DateAdapter }, { type: i2$1.MatDialog }]; }, { options$: [{
                    type: i0.Input
                }], events$: [{
                    type: i0.Input
                }], selectedDate$: [{
                    type: i0.Input
                }], dateChange: [{
                    type: i0.Output
                }], eventClick: [{
                    type: i0.Output
                }], addButtonClick: [{
                    type: i0.Output
                }], datePickerMenu: [{
                    type: i0.ViewChild,
                    args: [i7.MatMenuTrigger]
                }], onKeyDown: [{
                    type: i0.HostListener,
                    args: ['window:keydown', ['$event']]
                }] });
    })();

    var MaterialModules = [
        i3.MatIconModule,
        i3$1.MatTooltipModule
    ];
    var SharedComponentsModule = /** @class */ (function () {
        function SharedComponentsModule() {
        }
        return SharedComponentsModule;
    }());
    SharedComponentsModule.ɵfac = function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); };
    SharedComponentsModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedComponentsModule });
    SharedComponentsModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [__spread([
                platformBrowser.BrowserModule
            ], MaterialModules)] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedComponentsModule, { declarations: [EventDisplayComponent,
                EventRenderDayComponent,
                EventRenderWeekComponent,
                EventRenderMonthComponent], imports: [platformBrowser.BrowserModule, i3.MatIconModule,
                i3$1.MatTooltipModule], exports: [EventDisplayComponent,
                EventRenderDayComponent,
                EventRenderWeekComponent,
                EventRenderMonthComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedComponentsModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            EventDisplayComponent,
                            EventRenderDayComponent,
                            EventRenderWeekComponent,
                            EventRenderMonthComponent
                        ],
                        imports: __spread([
                            platformBrowser.BrowserModule
                        ], MaterialModules),
                        exports: [
                            EventDisplayComponent,
                            EventRenderDayComponent,
                            EventRenderWeekComponent,
                            EventRenderMonthComponent
                        ],
                        providers: [],
                        bootstrap: []
                    }]
            }], null, null);
    })();

    var PipesModule = /** @class */ (function () {
        function PipesModule() {
        }
        return PipesModule;
    }());
    PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
    PipesModule.ɵmod = i0.ɵɵdefineNgModule({ type: PipesModule });
    PipesModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PipesModule, { declarations: [LimitPipe,
                AllDayEventPipe], exports: [LimitPipe,
                AllDayEventPipe] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PipesModule, [{
                type: i0.NgModule,
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
            }], null, null);
    })();

    var DayViewModule = /** @class */ (function () {
        function DayViewModule() {
        }
        return DayViewModule;
    }());
    DayViewModule.ɵfac = function DayViewModule_Factory(t) { return new (t || DayViewModule)(); };
    DayViewModule.ɵmod = i0.ɵɵdefineNgModule({ type: DayViewModule });
    DayViewModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[
                platformBrowser.BrowserModule,
                SharedComponentsModule,
                PipesModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DayViewModule, { declarations: [DayViewComponent], imports: [platformBrowser.BrowserModule,
                SharedComponentsModule,
                PipesModule], exports: [DayViewComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DayViewModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            DayViewComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
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
            }], null, null);
    })();

    var WeekViewModule = /** @class */ (function () {
        function WeekViewModule() {
        }
        return WeekViewModule;
    }());
    WeekViewModule.ɵfac = function WeekViewModule_Factory(t) { return new (t || WeekViewModule)(); };
    WeekViewModule.ɵmod = i0.ɵɵdefineNgModule({ type: WeekViewModule });
    WeekViewModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[
                platformBrowser.BrowserModule,
                SharedComponentsModule,
                PipesModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WeekViewModule, { declarations: [WeekViewComponent], imports: [platformBrowser.BrowserModule,
                SharedComponentsModule,
                PipesModule], exports: [WeekViewComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WeekViewModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            WeekViewComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
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
            }], null, null);
    })();

    var MonthViewModule = /** @class */ (function () {
        function MonthViewModule() {
        }
        return MonthViewModule;
    }());
    MonthViewModule.ɵfac = function MonthViewModule_Factory(t) { return new (t || MonthViewModule)(); };
    MonthViewModule.ɵmod = i0.ɵɵdefineNgModule({ type: MonthViewModule });
    MonthViewModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[
                platformBrowser.BrowserModule,
                SharedComponentsModule,
                i3$3.OverlayModule,
                PipesModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MonthViewModule, { declarations: [MonthViewComponent], imports: [platformBrowser.BrowserModule,
                SharedComponentsModule,
                i3$3.OverlayModule,
                PipesModule], exports: [MonthViewComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthViewModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            MonthViewComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule,
                            SharedComponentsModule,
                            i3$3.OverlayModule,
                            PipesModule
                        ],
                        exports: [
                            MonthViewComponent
                        ],
                        entryComponents: [],
                        providers: [],
                        bootstrap: []
                    }]
            }], null, null);
    })();

    var LocaleDateAdapter = /** @class */ (function (_super) {
        __extends(LocaleDateAdapter, _super);
        function LocaleDateAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LocaleDateAdapter.prototype.getFirstDayOfWeek = function () {
            return 1;
        };
        return LocaleDateAdapter;
    }(i1.NativeDateAdapter));
    LocaleDateAdapter.ɵfac = function LocaleDateAdapter_Factory(t) { return ɵLocaleDateAdapter_BaseFactory(t || LocaleDateAdapter); };
    LocaleDateAdapter.ɵprov = i0.ɵɵdefineInjectable({ token: LocaleDateAdapter, factory: LocaleDateAdapter.ɵfac });
    var ɵLocaleDateAdapter_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(LocaleDateAdapter);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LocaleDateAdapter, [{
                type: i0.Injectable
            }], null, null);
    })();

    var MaterialModules$1 = [
        card.MatCardModule,
        i4.MatButtonModule,
        i3$1.MatTooltipModule,
        i3.MatIconModule,
        i1.MatNativeDateModule,
        i9.MatFormFieldModule,
        input.MatInputModule,
        i8.MatDatepickerModule,
        i10.MatSelectModule,
        i7.MatMenuModule,
        i2$1.MatDialogModule,
        i3$2.MatDividerModule
    ];
    var ViewModules = [
        DayViewModule,
        WeekViewModule,
        MonthViewModule
    ];
    var NgxMatCalendarModule = /** @class */ (function () {
        function NgxMatCalendarModule() {
        }
        return NgxMatCalendarModule;
    }());
    NgxMatCalendarModule.ɵfac = function NgxMatCalendarModule_Factory(t) { return new (t || NgxMatCalendarModule)(); };
    NgxMatCalendarModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxMatCalendarModule });
    NgxMatCalendarModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
            FormattingService,
            {
                provide: materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS,
                useValue: {
                    useUtc: true
                }
            }, {
                provide: i1.DateAdapter,
                useClass: LocaleDateAdapter
            }
        ], imports: [__spread([
                platformBrowser.BrowserModule,
                forms.FormsModule,
                forms.ReactiveFormsModule
            ], ViewModules, MaterialModules$1)] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxMatCalendarModule, { declarations: [NgxMatCalendarComponent,
                KeyboardShortcutDialogComponent], imports: [platformBrowser.BrowserModule,
                forms.FormsModule,
                forms.ReactiveFormsModule, DayViewModule,
                WeekViewModule,
                MonthViewModule, card.MatCardModule,
                i4.MatButtonModule,
                i3$1.MatTooltipModule,
                i3.MatIconModule,
                i1.MatNativeDateModule,
                i9.MatFormFieldModule,
                input.MatInputModule,
                i8.MatDatepickerModule,
                i10.MatSelectModule,
                i7.MatMenuModule,
                i2$1.MatDialogModule,
                i3$2.MatDividerModule], exports: [NgxMatCalendarComponent,
                KeyboardShortcutDialogComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxMatCalendarModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NgxMatCalendarComponent,
                            KeyboardShortcutDialogComponent
                        ],
                        imports: __spread([
                            platformBrowser.BrowserModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule
                        ], ViewModules, MaterialModules$1),
                        exports: [
                            NgxMatCalendarComponent,
                            KeyboardShortcutDialogComponent
                        ],
                        providers: [
                            FormattingService,
                            {
                                provide: materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS,
                                useValue: {
                                    useUtc: true
                                }
                            }, {
                                provide: i1.DateAdapter,
                                useClass: LocaleDateAdapter
                            }
                        ],
                        bootstrap: []
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ngx-mat-calendar
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.KeyboardShortcutDialogComponent = KeyboardShortcutDialogComponent;
    exports.NgxMatCalendarComponent = NgxMatCalendarComponent;
    exports.NgxMatCalendarModule = NgxMatCalendarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=arjentienkamp-ngx-mat-calendar.umd.js.map

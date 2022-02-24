(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('date-fns'), require('@angular/material/core'), require('@angular/material/menu'), require('rxjs'), require('rxjs/operators'), require('@angular/material/dialog'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/tooltip'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/datepicker'), require('uuid'), require('rxjs/internal/operators/tap'), require('@angular/cdk/overlay'), require('@angular/material-moment-adapter'), require('@angular/material/divider'), require('@angular/material/select')) :
    typeof define === 'function' && define.amd ? define('@arjentienkamp/ngx-mat-calendar', ['exports', '@angular/core', 'date-fns', '@angular/material/core', '@angular/material/menu', 'rxjs', 'rxjs/operators', '@angular/material/dialog', '@angular/platform-browser', '@angular/forms', '@angular/material/card', '@angular/material/tooltip', '@angular/material/button', '@angular/material/icon', '@angular/material/form-field', '@angular/material/input', '@angular/material/datepicker', 'uuid', 'rxjs/internal/operators/tap', '@angular/cdk/overlay', '@angular/material-moment-adapter', '@angular/material/divider', '@angular/material/select'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.arjentienkamp = global.arjentienkamp || {}, global.arjentienkamp['ngx-mat-calendar'] = {}), global.ng.core, global.dateFns, global.ng.material.core, global.ng.material.menu, global.rxjs, global.rxjs.operators, global.ng.material.dialog, global.ng.platformBrowser, global.ng.forms, global.ng.material.card, global.ng.material.tooltip, global.ng.material.button, global.ng.material.icon, global.ng.material.formField, global.ng.material.input, global.ng.material.datepicker, global.uuid, global.rxjs['internal/operators/tap'], global.ng.cdk.overlay, global.ng.materialMomentAdapter, global.ng.material.divider, global.ng.material.select));
}(this, (function (exports, i0, dateFns, core, menu, rxjs, operators, dialog, platformBrowser, forms, card, tooltip, button, icon, formField, input, datepicker, uuid, tap, overlay, materialMomentAdapter, divider, select) { 'use strict';

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
    FormattingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FormattingService_Factory() { return new FormattingService(); }, token: FormattingService, providedIn: "root" });
    FormattingService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];

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
    EventRenderDayComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'event-render-day',
                    template: "<div *ngIf=\"event\" class=\"event\" [class.all-day]=\"event.allDay\" [style.backgroundColor]=\"event.color\">\n    <div *ngIf=\"!event.allDay\">\n        <div class=\"event__header\">\n            <p>{{ event.title }}</p>\n        </div>\n\n        <div class=\"event__metadata\">\n            <p>{{ startTime }} - {{ endTime }}</p>\n\n            <div class=\"event__location\" *ngIf=\"event.location\">\n                <mat-icon>place</mat-icon>\n                <span>{{ event.location }}</span>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"event.allDay\">\n        <div class=\"event__header\">\n            <p class=\"title\">{{ event.title }}</p>\n        </div>\n    </div>\n\n    <div class=\"event__multiday\" *ngIf=\"!isSameDay && !endsToday\"></div>\n</div>",
                    styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.event,:host(event-render){display:flex;flex-direction:column;height:100%}.event{justify-content:space-between;border-radius:4px;overflow:hidden}.event.all-day{height:auto}.event__header{display:flex;text-align:left;color:#546e7a;padding:.25rem;border-bottom:1px solid hsla(0,0%,100%,.5)}.event__header p{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}.event__metadata{display:flex;flex-direction:column;flex:1;font-weight:100;color:#546e7a;padding:.25rem}.event__metadata p{margin-bottom:.25rem}.event__location{display:flex;justify-content:flex-start;align-items:center}.event__location mat-icon{font-size:16px;height:16px;width:16px;margin-right:.25rem}.event__location span{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden}"]
                },] }
    ];
    EventRenderDayComponent.ctorParameters = function () { return [
        { type: FormattingService }
    ]; };
    EventRenderDayComponent.propDecorators = {
        event: [{ type: i0.Input }],
        date: [{ type: i0.Input }]
    };

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
    EventRenderMonthComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'event-render-month',
                    template: "<div *ngIf=\"event\" class=\"event\">\n    <div\n        class=\"even__line\"\n        [matTooltip]=\"eventTooltip\"\n        [ngStyle]=\"{'backgroundColor' : event.allDay ? event.color : '' }\"\n        [class.all-day]=\"event.allDay\"\n        [class.past-event]=\"isPastEvent()\">\n        <span class=\"event-color\" *ngIf=\"!event.allDay\" [style.backgroundColor]=\"event.color\"></span>\n        <p class=\"metadata\" *ngIf=\"!event.allDay\">{{ startTime }}</p>\n        <p class=\"title\">{{ event.title }}</p>\n    </div>\n\n    <div class=\"event__multiday\" *ngIf=\"!isSameDay && !endsToday\"></div>\n</div>",
                    styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}:host(event-render){height:100%}.event,:host(event-render){display:flex;flex-direction:column}.event{justify-content:space-between;overflow:hidden;font-size:12px}.even__line{display:flex;align-items:center;text-align:left;color:#546e7a;padding:.25rem}.even__line.all-day{border-radius:2px;width:100%;overflow:hidden;margin-top:.25rem}.even__line.past-event{opacity:.7}.even__line .event-color{min-width:10px;height:10px;border-radius:10px;margin-right:.5rem}.even__line p.metadata{margin-right:.5rem;margin-bottom:0}.even__line p.title{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}"]
                },] }
    ];
    EventRenderMonthComponent.ctorParameters = function () { return [
        { type: FormattingService }
    ]; };
    EventRenderMonthComponent.propDecorators = {
        event: [{ type: i0.Input }],
        date: [{ type: i0.Input }]
    };

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
    EventRenderWeekComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'event-render-week',
                    template: "<div *ngIf=\"event\" class=\"event\" [class.all-day]=\"event.allDay\" [style.backgroundColor]=\"event.color\">\n    <div *ngIf=\"!event.allDay\">\n        <div class=\"event__header\">\n            <p>{{ event.title }}</p>\n        </div>\n\n        <div class=\"event__metadata\">\n            <p>{{ startTime }} - {{ endTime }}</p>\n\n            <div class=\"event__location\" *ngIf=\"event.location\">\n                <mat-icon>place</mat-icon>\n                <span>{{ event.location }}</span>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"event.allDay\">\n        <div class=\"event__header\">\n            <p class=\"title\">{{ event.title }}</p>\n        </div>\n    </div>\n\n    <div class=\"event__multiday\" *ngIf=\"!isSameDay && !endsToday\"></div>\n</div>",
                    styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.event,:host(event-render){display:flex;flex-direction:column;height:100%}.event{justify-content:space-between;border-radius:4px;overflow:hidden}.event.all-day{height:auto}.event__header{display:flex;text-align:left;color:#546e7a;padding:.25rem;border-bottom:1px solid hsla(0,0%,100%,.5)}.event__header p{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}.event__metadata{display:flex;flex-direction:column;flex:1;font-weight:100;color:#546e7a;padding:.25rem}.event__metadata p{margin-bottom:.25rem}.event__location{display:flex;justify-content:flex-start;align-items:center}.event__location mat-icon{font-size:16px;height:16px;width:16px;margin-right:.25rem}.event__location span{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden}"]
                },] }
    ];
    EventRenderWeekComponent.ctorParameters = function () { return [
        { type: FormattingService }
    ]; };
    EventRenderWeekComponent.propDecorators = {
        event: [{ type: i0.Input }],
        date: [{ type: i0.Input }]
    };

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

    var KeyboardShortcutDialogComponent = /** @class */ (function () {
        function KeyboardShortcutDialogComponent(data) {
            this.data = data;
        }
        KeyboardShortcutDialogComponent.prototype.ngOnInit = function () { };
        return KeyboardShortcutDialogComponent;
    }());
    KeyboardShortcutDialogComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'keyboard-shortcut-dialog',
                    template: "<h2 mat-dialog-title>Keyboard Shortcuts</h2>\n<mat-dialog-content class=\"mat-typography\">\n    <mat-divider></mat-divider>\n\n    <div class=\"content-row\">\n        <span>Switch to day view</span>\n        <span>\n            <span class=\"keyboard-shortcut\">d</span>\n        </span>\n    </div>\n\n    <div class=\"content-row\">\n        <span>Switch to week view</span>\n        <span>\n            <span class=\"keyboard-shortcut\">w</span>\n        </span>        \n    </div>\n\n    <div class=\"content-row\">\n        <span>Switch to month view</span>\n        <span>\n            <span class=\"keyboard-shortcut\">m</span>\n        </span>\n    </div>\n\n    <div class=\"content-row\">\n        <span>Go to today</span>\n        <span>\n            <span class=\"keyboard-shortcut\">t</span>\n        </span>\n    </div>\n\n    <div class=\"content-row\" *ngIf=\"data.enableAddEventButton\">\n        <span>Add event</span>\n        <span>\n            <span class=\"keyboard-shortcut\">n</span>\n        </span>\n    </div>\n</mat-dialog-content>",
                    styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.mat-dialog-content{width:450px}.mat-dialog-content mat-divider{margin-bottom:1rem}.mat-dialog-content .content-row{display:flex;align-items:center;justify-content:space-between;height:50px}.mat-dialog-content .keyboard-shortcut{display:block;padding:.5rem 0;border:1px solid #efefef;border-radius:4px;width:40px;text-align:center}"]
                },] }
    ];
    KeyboardShortcutDialogComponent.ctorParameters = function () { return [
        { type: CalendarOptions, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
    ]; };

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
    NgxMatCalendarComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ngx-mat-calendar',
                    template: "<div class=\"calendar\" *ngIf=\"events && options\">\n    <div class=\"calendar__toolbar\">\n         <button\n            mat-stroked-button\n            class=\"toolbar__button toolbar__button--today\"\n            color=\"primary\"\n            [matTooltip]=\"today\"\n            (click)=\"setCalendarToday()\">\n                Today\n        </button>\n\n        <button\n            mat-icon-button\n            class=\"toolbar__button toolbar__button--navigate\"\n            color=\"primary\"\n            (click)=\"setCalendarOffset('prev')\">\n            <mat-icon>chevron_left</mat-icon>\n        </button>\n\n        <button\n            mat-icon-button\n            class=\"toolbar__button toolbar__button--navigate\"\n            color=\"primary\"\n            (click)=\"setCalendarOffset('next')\">\n            <mat-icon>chevron_right</mat-icon>\n        </button>\n\n        <div class=\"toolbar__meta\">\n            <span class=\"toolbar__month\">{{ calendar.monthAndYear }}</span>\n            <span class=\"toolbar__week\" *ngIf=\"!getSelectedView('month')\">Week {{ calendar.weeknumber }}</span>\n        </div>\n\n        <div class=\"toolbar__right\">\n            <button\n                *ngIf=\"enableKeyboardShortcutDialog\"\n                mat-icon-button\n                matTooltip=\"Keyboard shortcuts\"\n                class=\"toolbar__button toolbar__button--keyboard-shortcut\"\n                color=\"primary\"\n                (click)=\"showKeyboardShortcutDialog()\">\n                <mat-icon>keyboard</mat-icon>\n            </button>\n\n            <mat-form-field\n                *ngIf=\"enableViewToggle\"\n                appearance=\"outline\"\n                class=\"toolbar__view-switch\">\n                <mat-select\n                    [value]=\"selectedView\"\n                    (selectionChange)=\"onViewChange(view.value)\"\n                    #view>\n                    <mat-option value=\"day\">Day</mat-option>\n                    <mat-option value=\"week\">Week</mat-option>\n                    <mat-option value=\"month\">Month</mat-option>\n                </mat-select>\n            </mat-form-field>\n\n            <mat-menu #datePickerMenu=\"matMenu\">\n                <div (click)=\"$event.stopPropagation()\">\n                    <mat-calendar (selectedChange)=\"onDatePickerChange($event)\"></mat-calendar>\n                </div>\n            </mat-menu>\n\n            <button\n                [matMenuTriggerFor]=\"datePickerMenu\"\n                matTooltip=\"Pick a date\"\n                *ngIf=\"enableDatePickerButton\"\n                mat-icon-button\n                class=\"toolbar__button\"\n                color=\"primary\">\n                <mat-icon>calendar_today</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <day-view\n        *ngIf=\"getSelectedView('day')\"\n        [events$]=\"events$\"\n        [selectedDate$]=\"selectedDate$\"\n        [options$]=\"options$\"\n        (eventClick)=\"onEventClick($event)\">\n    </day-view>\n\n    <week-view\n        *ngIf=\"getSelectedView('week')\"\n        [events$]=\"events$\"\n        [selectedDate$]=\"selectedDate$\"\n        [options$]=\"options$\"\n        (eventClick)=\"onEventClick($event)\"\n        (changeToDayView)=\"changeToDayView($event)\">\n    </week-view>\n\n    <month-view\n        *ngIf=\"getSelectedView('month')\"\n        [events$]=\"events$\"\n        [selectedDate$]=\"selectedDate$\"\n        [options$]=\"options$\"\n        (eventClick)=\"onEventClick($event)\"\n        (setCalendarOffset)=\"setCalendarOffset($event)\"\n        (changeToDayView)=\"changeToDayView($event)\">\n    </month-view>\n\n    <button\n        class=\"calendar__add-button\"\n        *ngIf=\"options.enableAddEventButton\"\n        mat-fab\n        color=\"primary\"\n        (click)=\"onAddButtonClick()\">\n        <mat-icon>add</mat-icon>\n    </button>\n</div>",
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}:host(ngx-mat-calendar){flex:1;height:100%}.calendar{position:relative;display:flex;flex-direction:column;height:100%}day-view,month-view,week-view{display:flex;height:100%;overflow:hidden}[hidden]{display:none}.calendar__toolbar{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:1rem}.calendar__toolbar .toolbar__button,.calendar__toolbar .toolbar__month,.calendar__toolbar .toolbar__right{display:flex}.calendar__toolbar .toolbar__button{justify-content:center;margin-left:1rem}.calendar__toolbar .toolbar__button--today{margin-left:0;margin-right:1rem}.calendar__toolbar .toolbar__button--navigate{margin-left:0}.calendar__toolbar .toolbar__meta{display:flex;align-items:center;font-weight:200}.calendar__toolbar .toolbar__meta .toolbar__month{margin-left:1rem;font-size:1.25rem}.calendar__toolbar .toolbar__meta .toolbar__week{margin-left:1rem;font-size:1rem;padding:.25rem .5rem;font-size:.75rem;text-transform:uppercase;background-color:#efefef;border-radius:4px}.calendar__toolbar .toolbar__right{flex:1;justify-content:flex-end;align-items:center}.calendar__toolbar .toolbar__datepicker{position:absolute;right:60px}.calendar__toolbar .toolbar__datepicker .mat-form-field{font-size:12px}.calendar__toolbar .toolbar__datepicker .mat-form-field-wrapper{padding-bottom:0}.calendar__toolbar mat-form-field.toolbar__view-switch{margin-left:1rem;align-items:center}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-form-field-wrapper{margin:0;padding:0}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-form-field-infix{padding:.25rem 0 .5rem;width:90px}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-select-arrow{margin-top:.25rem}.calendar__add-button{position:absolute;z-index:1;right:-.5rem;bottom:-.5rem;width:80px;height:80px}.calendar__add-button mat-icon{transform:scale(1.25)}mat-calendar{padding:0 .75rem}.cdk-overlay-pane.hidden-events-overlay{width:calc((100% / 7) + 50px)}.cdk-overlay-pane.hidden-events-overlay .event-container{display:flex;flex-direction:column;position:absolute;background-color:#fff;padding:.5rem;border-radius:4px;overflow:hidden;width:100%;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.cdk-overlay-pane.hidden-events-overlay .event-container.is-today .event-container__date{border-radius:100%;background:#2a2a2a;color:#fff}.cdk-overlay-pane.hidden-events-overlay .event-container .event-container__date{display:flex;justify-content:center;align-items:center;align-self:center;margin-bottom:.5rem;width:40px;min-height:40px;border-radius:20px;margin-top:4px;background-color:#efefef;color:#2a2a2a;font-size:14px}.cdk-overlay-pane.hidden-events-overlay .event-container .event-container__date:hover{cursor:pointer}.cdk-overlay-pane.hidden-events-overlay event-display{position:relative}"]
                },] }
    ];
    NgxMatCalendarComponent.ctorParameters = function () { return [
        { type: core.DateAdapter },
        { type: dialog.MatDialog }
    ]; };
    NgxMatCalendarComponent.propDecorators = {
        options$: [{ type: i0.Input }],
        events$: [{ type: i0.Input }],
        selectedDate$: [{ type: i0.Input }],
        dateChange: [{ type: i0.Output }],
        eventClick: [{ type: i0.Output }],
        addButtonClick: [{ type: i0.Output }],
        datePickerMenu: [{ type: i0.ViewChild, args: [menu.MatMenuTrigger,] }],
        onKeyDown: [{ type: i0.HostListener, args: ['window:keydown', ['$event'],] }]
    };

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
    BaseViewComponent.decorators = [
        { type: i0.Component, args: [{
                    template: ''
                },] }
    ];
    BaseViewComponent.ctorParameters = function () { return [
        { type: FormattingService }
    ]; };
    BaseViewComponent.propDecorators = {
        options$: [{ type: i0.Input }],
        selectedDate$: [{ type: i0.Input }],
        events$: [{ type: i0.Input }],
        eventClick: [{ type: i0.Output }],
        changeToDayView: [{ type: i0.Output }]
    };

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
    DayViewComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'day-view',
                    template: "<div class=\"calendar__days\">\n    <div class=\"calendar__day\">\n        <div class=\"day__header\" [ngClass]=\"{ 'day__header--today ': isToday(selectedDate) }\">\n            <span class=\"day-name\">{{ getDayName(selectedDate) }}</span> \n            <span class=\"day-number\">{{ getDayNumber(selectedDate) }}</span>\n        </div>\n    </div>\n</div> \n\n<div class=\"calendar__content\">\n    <div class=\"calendar__day-events\">\n        <div class=\"day__lane\">\n            <event-display\n                *ngFor=\"let event of dayView.events | allDayEventPipe: true\"\n                class=\"calendar__item\"\n                [component]=\"options.renderComponent.day\"\n                [event]=\"event\"\n                [date]=\"selectedDate\"\n                (click)=\"onEventClick(event)\">\n            </event-display>\n        </div>\n    </div>\n\n    <div class=\"calendar__lanes\">\n        <div class=\"calendar__times\">\n            <div class=\"time-cell\" *ngFor=\"let hour of hoursOfDay;\" [style.height.px]=\"getCellHeight(hour)\">\n                {{ hour.title }}\n            </div>\n        </div>\n\n        <div class=\"day__lane\" [ngClass]=\"{ 'day__lane--today': isToday(selectedDate) }\">\n            <div class=\"time-grid\">\n                <div class=\"time-grid__cell\" *ngFor=\"let hour of hoursOfDay;\" [style.height.px]=\"getCellHeight(hour)\"></div>\n            </div> \n\n            <div class=\"calendar__marker\" *ngIf=\"isToday(selectedDate)\" [style.marginTop.px]=\"markerPosition\"></div>\n            \n            <event-display\n                *ngFor=\"let event of dayView.events | allDayEventPipe: false\"\n                class=\"calendar__item\"\n                [component]=\"options.renderComponent.day\"\n                [event]=\"event\"\n                [date]=\"selectedDate\"                \n                [style.width.%]=\"event.grid?.width\"\n                [style.marginLeft.%]=\"event.grid?.offsetLeft\"\n                [style.marginTop.px]=\"event.grid?.offsetTop\"\n                [style.height.px]=\"event.grid?.durationOffset\"\n                (click)=\"onEventClick(event)\">\n            </event-display>\n        </div>\n    </div>\n</div>",
                    styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__lanes{display:flex;flex:1;flex-direction:row;padding-top:10px}.calendar__lanes .day__lane{display:flex;flex-direction:column;position:relative;flex:1;padding:0 .5rem;border-right:1px solid #efefef;transition:.25s;background-color:#f4f4f4}.calendar__lanes .day__lane .time-grid{position:absolute;top:0;left:0;width:100%}.calendar__lanes .day__lane .time-grid__cell{border-top:1px dotted #dbdbdb;width:100%}.calendar__lanes .day__lane--today{background-color:#eef7fb}.calendar__lanes .day__lane--today .time-grid__cell{border-top-color:#c5e3f1}"]
                },] }
    ];
    DayViewComponent.ctorParameters = function () { return [
        { type: FormattingService }
    ]; };

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
    EventDisplayComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'event-display',
                    template: "<ng-template #renderTarget></ng-template>",
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: [":host(event-display){overflow:hidden}event-render-day,event-render-week{height:100%}"]
                },] }
    ];
    EventDisplayComponent.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver }
    ]; };
    EventDisplayComponent.propDecorators = {
        event: [{ type: i0.Input }],
        date: [{ type: i0.Input }],
        component: [{ type: i0.Input }],
        renderTarget: [{ type: i0.ViewChild, args: ['renderTarget', { read: i0.ViewContainerRef, static: true },] }]
    };

    var MaterialModules = [
        icon.MatIconModule,
        tooltip.MatTooltipModule
    ];
    var SharedComponentsModule = /** @class */ (function () {
        function SharedComponentsModule() {
        }
        return SharedComponentsModule;
    }());
    SharedComponentsModule.decorators = [
        { type: i0.NgModule, args: [{
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
                },] }
    ];

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
    AllDayEventPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'allDayEventPipe'
                },] }
    ];

    var LimitPipe = /** @class */ (function () {
        function LimitPipe() {
        }
        LimitPipe.prototype.transform = function (items, limit) {
            return items.slice(0, limit);
        };
        return LimitPipe;
    }());
    LimitPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'limitPipe'
                },] }
    ];

    var PipesModule = /** @class */ (function () {
        function PipesModule() {
        }
        return PipesModule;
    }());
    PipesModule.decorators = [
        { type: i0.NgModule, args: [{
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
                },] }
    ];

    var DayViewModule = /** @class */ (function () {
        function DayViewModule() {
        }
        return DayViewModule;
    }());
    DayViewModule.decorators = [
        { type: i0.NgModule, args: [{
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
                },] }
    ];

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
    WeekViewComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'week-view',
                    template: "<div class=\"calendar__days\">\n    <div class=\"calendar__day\" *ngFor=\"let day of weekView.days;\">\n        <div class=\"day__header\" [ngClass]=\"{ 'day__header--today ': isToday(day.date) }\">\n            <span class=\"day-name\">{{ getDayName(day.date) }}</span> \n            <span class=\"day-number\" (click)=\"navigateToDayView(day.date)\">{{ getDayNumber(day.date) }}</span>\n        </div>\n    </div>\n</div> \n\n<div class=\"calendar__content\">\n    <div class=\"calendar__day-events\">\n        <div class=\"day__lane\" *ngFor=\"let day of weekView.days\">\n            <event-display\n                *ngFor=\"let event of day.events | allDayEventPipe: true\"\n                class=\"calendar__item\"\n                [component]=\"options.renderComponent.week\"\n                [event]=\"event\"\n                [date]=\"day.date\"\n                (click)=\"onEventClick(event)\">\n            </event-display>\n        </div>\n    </div>\n\n    <div class=\"calendar__lanes\">\n        <div class=\"calendar__times\">\n            <div class=\"time-cell\" *ngFor=\"let hour of hoursOfDay;\" [style.height.px]=\"getCellHeight(hour)\">\n                {{ hour.title }}\n            </div>\n        </div>\n\n        <div class=\"day__lane\"\n            *ngFor=\"let day of weekView.days\"\n            [ngClass]=\"{ 'day__lane--today': isToday(day.date) }\">\n\n            <div class=\"time-grid\">\n                <div class=\"time-grid__cell\" *ngFor=\"let hour of hoursOfDay;\" [style.height.px]=\"getCellHeight(hour)\"></div>\n            </div> \n\n            <div class=\"calendar__marker\" *ngIf=\"isToday(day.date)\" [style.marginTop.px]=\"markerPosition\"></div>\n            \n            <event-display\n                *ngFor=\"let event of day.events | allDayEventPipe: false\"\n                class=\"calendar__item\"\n                [component]=\"options.renderComponent.week\"\n                [event]=\"event\"\n                [date]=\"day.date\"                \n                [style.width.%]=\"event.grid?.width\"\n                [style.marginLeft.%]=\"event.grid?.offsetLeft\"\n                [style.marginTop.px]=\"event.grid?.offsetTop\"\n                [style.height.px]=\"event.grid?.durationOffset\"\n                (click)=\"onEventClick(event)\">\n            </event-display>\n        </div>\n    </div>\n</div>",
                    styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__lanes{display:flex;flex:1;flex-direction:row;padding-top:10px}.calendar__lanes .day__lane{display:flex;flex-direction:column;position:relative;flex:1;padding:0 .5rem;border-right:1px solid #efefef;transition:.25s}.calendar__lanes .day__lane:hover{background-color:#f4f4f4}.calendar__lanes .day__lane:hover .time-grid__cell{border-top-color:#dbdbdb}.calendar__lanes .day__lane .time-grid{position:absolute;top:0;left:0;width:100%}.calendar__lanes .day__lane .time-grid__cell{border-top:1px dotted #efefef;width:100%}.calendar__lanes .day__lane--today,.calendar__lanes .day__lane--today:hover{background-color:#eef7fb}.calendar__lanes .day__lane--today .time-grid__cell{border-top-color:#c5e3f1}.calendar__day{justify-content:center}.calendar__day .day__header:hover .day-number{cursor:pointer}"]
                },] }
    ];
    WeekViewComponent.ctorParameters = function () { return [
        { type: FormattingService }
    ]; };

    var WeekViewModule = /** @class */ (function () {
        function WeekViewModule() {
        }
        return WeekViewModule;
    }());
    WeekViewModule.decorators = [
        { type: i0.NgModule, args: [{
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
                },] }
    ];

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
    MonthViewComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'month-view',
                    template: "<div class=\"calendar__days\">\n    <div class=\"calendar__day\" *ngFor=\"let day of daysOfWeek;\">\n        <div class=\"day__header\">\n            <span class=\"day-name\">{{ day.title }}</span>\n        </div>\n    </div>\n</div>\n\n<div class=\"calendar__weeknumbers\">\n    <div class=\"week-number-cell\" *ngFor=\"let weekNumber of weekNumbers;\">\n        {{ weekNumber }}\n    </div>\n</div>\n\n<div class=\"calendar__content\">\n    <div class=\"calendar__blocks\" #calendarDayElement>\n        <div \n            *ngFor=\"let day of monthView.days\" \n            class=\"day__block\"\n            [class.is-today]=\"isToday(day.date)\">\n            <div class=\"day__block-content\" [class.not-current-month]=\"!isCurrentMonth(day.date)\">\n                <span class=\"day__block-date\" (click)=\"navigateToDayView(day.date)\">{{ getDayNumber(day.date) }}</span>\n            </div>\n\n            <div class=\"day__events\">\n                <event-display\n                    *ngFor=\"let event of day.events | limitPipe: maxEventsVisible - 1\"\n                    class=\"calendar__item\"\n                    [component]=\"options.renderComponent.month\"\n                    [event]=\"event\"\n                    [date]=\"day.date\"      \n                    (click)=\"onEventClick(event)\">\n                </event-display>\n\n                <span *ngIf=\"day.eventCount && maxEventsVisible > 0 && day.eventCount >= maxEventsVisible\">\n                    <div\n                        class=\"hidden-events-trigger\"                        \n                        (click)=\"toggleHiddenEvents(trigger, day)\"\n                        cdkOverlayOrigin\n                        #trigger=\"cdkOverlayOrigin\">\n                        {{ day.eventCount - maxEventsVisible + 1 }} more\n                    </div>\n                </span>  \n            </div>\n        </div>\n\n        <ng-template\n            cdkConnectedOverlay\n            (overlayOutsideClick)=\"closeHiddenEvents()\"\n            [cdkConnectedOverlayOffsetY]=\"-100\"\n            [cdkConnectedOverlayOffsetX]=\"-35\"\n            cdkConnectedOverlayPanelClass=\"hidden-events-overlay\"\n            [cdkConnectedOverlayOrigin]=\"hiddenEventsTriggerOrigin\"\n            [cdkConnectedOverlayOpen]=\"showHiddenEvents\">\n            <div\n                class=\"event-container\"\n                [class.is-today]=\"isToday(hiddenEventsDay.date)\"\n                [style.height.px]=\"getHiddenEventsHeight()\">\n\n                <span\n                    class=\"event-container__date\"\n                    (click)=\"navigateToDayView(hiddenEventsDay.date)\">\n                    {{ getDayNumber(hiddenEventsDay.date) }}\n                </span>\n\n                <event-display\n                    *ngFor=\"let event of hiddenEventsDay.events\"\n                    class=\"calendar__item\"\n                    [component]=\"options.renderComponent.month\"\n                    [event]=\"event\"\n                    [date]=\"hiddenEventsDay.date\"      \n                    (click)=\"onEventClick(event)\">\n                </event-display>\n            </div>\n        </ng-template>          \n    </div>\n</div>\n",
                    styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__content{display:flex;margin-left:4px;margin-top:15px;border-left:1px solid #efefef}.calendar__days{height:1.5rem;margin-left:38px}.calendar__days .day__header{flex:1}.calendar__weeknumbers{display:flex;flex-direction:column;justify-content:space-around;padding-top:1.5rem;text-align:center;width:22px;margin-right:12px}.calendar__weeknumbers .week-number-cell{color:#c8c8c8}.calendar__blocks{display:flex;flex:1;flex-wrap:wrap;flex-direction:row;padding-top:.5rem}.calendar__blocks .day__block{position:relative;display:flex;flex-direction:column;width:calc(100% / 7);padding-top:.5rem;overflow:hidden;border-right:1px solid #efefef;border-bottom:1px solid #efefef}.calendar__blocks .day__block .day__block-content{justify-content:center;display:flex}.calendar__blocks .day__block .day__block-date{display:flex;justify-content:center;align-items:center;text-align:center;width:25px;height:25px;color:#2a2a2a;font-size:.75rem}.calendar__blocks .day__block .day__block-date:hover{cursor:pointer}.calendar__blocks .day__block .day__events{position:absolute;overflow:hidden;top:2rem;width:100%}.calendar__blocks .day__block .not-current-month{opacity:.25}.calendar__blocks .day__block.is-today{background-color:#eef7fb}.calendar__blocks .day__block.is-today .day__block-date{border-radius:100%;background:#2a2a2a;color:#fff}.calendar__blocks .day__block .calendar__item{position:relative;padding:0 2px}.hidden-events-trigger{font-size:12px;padding:0 .5rem;font-weight:600}.hidden-events-trigger:hover{cursor:pointer;opacity:.7}"]
                },] }
    ];
    MonthViewComponent.ctorParameters = function () { return [
        { type: FormattingService }
    ]; };
    MonthViewComponent.propDecorators = {
        setCalendarOffset: [{ type: i0.Output }],
        calendarDayElement: [{ type: i0.ViewChild, args: ['calendarDayElement', { read: i0.ElementRef, static: true },] }],
        onResize: [{ type: i0.HostListener, args: ['window:resize', ['$event'],] }]
    };

    var MonthViewModule = /** @class */ (function () {
        function MonthViewModule() {
        }
        return MonthViewModule;
    }());
    MonthViewModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [
                        MonthViewComponent
                    ],
                    imports: [
                        platformBrowser.BrowserModule,
                        SharedComponentsModule,
                        overlay.OverlayModule,
                        PipesModule
                    ],
                    exports: [
                        MonthViewComponent
                    ],
                    entryComponents: [],
                    providers: [],
                    bootstrap: []
                },] }
    ];

    var LocaleDateAdapter = /** @class */ (function (_super) {
        __extends(LocaleDateAdapter, _super);
        function LocaleDateAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        LocaleDateAdapter.prototype.getFirstDayOfWeek = function () {
            return 1;
        };
        return LocaleDateAdapter;
    }(core.NativeDateAdapter));
    LocaleDateAdapter.decorators = [
        { type: i0.Injectable }
    ];

    var MaterialModules$1 = [
        card.MatCardModule,
        button.MatButtonModule,
        tooltip.MatTooltipModule,
        icon.MatIconModule,
        core.MatNativeDateModule,
        formField.MatFormFieldModule,
        input.MatInputModule,
        datepicker.MatDatepickerModule,
        select.MatSelectModule,
        menu.MatMenuModule,
        dialog.MatDialogModule,
        divider.MatDividerModule
    ];
    var ViewModules = [
        DayViewModule,
        WeekViewModule,
        MonthViewModule
    ];
    var ɵ0 = {
        useUtc: true
    };
    var NgxMatCalendarModule = /** @class */ (function () {
        function NgxMatCalendarModule() {
        }
        return NgxMatCalendarModule;
    }());
    NgxMatCalendarModule.decorators = [
        { type: i0.NgModule, args: [{
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
                            useValue: ɵ0
                        },
                        {
                            provide: core.DateAdapter,
                            useClass: LocaleDateAdapter
                        }
                    ],
                    bootstrap: []
                },] }
    ];

    /*
     * Public API Surface of ngx-mat-calendar
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.KeyboardShortcutDialogComponent = KeyboardShortcutDialogComponent;
    exports.NgxMatCalendarComponent = NgxMatCalendarComponent;
    exports.NgxMatCalendarModule = NgxMatCalendarModule;
    exports.ɵ0 = ɵ0;
    exports.ɵa = CalendarOptions;
    exports.ɵb = DayViewModule;
    exports.ɵc = DayViewComponent;
    exports.ɵd = BaseViewComponent;
    exports.ɵe = FormattingService;
    exports.ɵf = SharedComponentsModule;
    exports.ɵg = EventDisplayComponent;
    exports.ɵh = EventRenderDayComponent;
    exports.ɵi = EventRenderWeekComponent;
    exports.ɵj = EventRenderMonthComponent;
    exports.ɵk = PipesModule;
    exports.ɵl = LimitPipe;
    exports.ɵm = AllDayEventPipe;
    exports.ɵn = WeekViewModule;
    exports.ɵo = WeekViewComponent;
    exports.ɵp = MonthViewModule;
    exports.ɵq = MonthViewComponent;
    exports.ɵr = LocaleDateAdapter;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=arjentienkamp-ngx-mat-calendar.umd.js.map

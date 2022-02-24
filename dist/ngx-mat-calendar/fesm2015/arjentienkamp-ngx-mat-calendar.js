import { ɵɵdefineInjectable, Injectable, Component, Input, Inject, EventEmitter, ViewEncapsulation, Output, ViewChild, HostListener, ComponentFactoryResolver, ViewContainerRef, NgModule, Pipe, ElementRef } from '@angular/core';
import { format, isToday, isSameDay, isBefore, add, toDate, areIntervalsOverlapping, endOfDay, intervalToDuration, startOfDay, getHours, getMinutes, startOfWeek, eachWeekOfInterval, startOfMonth, endOfMonth, getWeek, sub, isSameMonth } from 'date-fns';
import { DateAdapter, NativeDateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { Subscription, interval, Subject, fromEvent } from 'rxjs';
import { tap, takeUntil, throttle } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { v4 } from 'uuid';
import { tap as tap$1 } from 'rxjs/internal/operators/tap';
import { OverlayModule } from '@angular/cdk/overlay';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';

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
FormattingService.ɵprov = ɵɵdefineInjectable({ factory: function FormattingService_Factory() { return new FormattingService(); }, token: FormattingService, providedIn: "root" });
FormattingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];

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
EventRenderDayComponent.decorators = [
    { type: Component, args: [{
                selector: 'event-render-day',
                template: "<div *ngIf=\"event\" class=\"event\" [class.all-day]=\"event.allDay\" [style.backgroundColor]=\"event.color\">\n    <div *ngIf=\"!event.allDay\">\n        <div class=\"event__header\">\n            <p>{{ event.title }}</p>\n        </div>\n\n        <div class=\"event__metadata\">\n            <p>{{ startTime }} - {{ endTime }}</p>\n\n            <div class=\"event__location\" *ngIf=\"event.location\">\n                <mat-icon>place</mat-icon>\n                <span>{{ event.location }}</span>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"event.allDay\">\n        <div class=\"event__header\">\n            <p class=\"title\">{{ event.title }}</p>\n        </div>\n    </div>\n\n    <div class=\"event__multiday\" *ngIf=\"!isSameDay && !endsToday\"></div>\n</div>",
                styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.event,:host(event-render){display:flex;flex-direction:column;height:100%}.event{justify-content:space-between;border-radius:4px;overflow:hidden}.event.all-day{height:auto}.event__header{display:flex;text-align:left;color:#546e7a;padding:.25rem;border-bottom:1px solid hsla(0,0%,100%,.5)}.event__header p{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}.event__metadata{display:flex;flex-direction:column;flex:1;font-weight:100;color:#546e7a;padding:.25rem}.event__metadata p{margin-bottom:.25rem}.event__location{display:flex;justify-content:flex-start;align-items:center}.event__location mat-icon{font-size:16px;height:16px;width:16px;margin-right:.25rem}.event__location span{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden}"]
            },] }
];
EventRenderDayComponent.ctorParameters = () => [
    { type: FormattingService }
];
EventRenderDayComponent.propDecorators = {
    event: [{ type: Input }],
    date: [{ type: Input }]
};

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
EventRenderMonthComponent.decorators = [
    { type: Component, args: [{
                selector: 'event-render-month',
                template: "<div *ngIf=\"event\" class=\"event\">\n    <div\n        class=\"even__line\"\n        [matTooltip]=\"eventTooltip\"\n        [ngStyle]=\"{'backgroundColor' : event.allDay ? event.color : '' }\"\n        [class.all-day]=\"event.allDay\"\n        [class.past-event]=\"isPastEvent()\">\n        <span class=\"event-color\" *ngIf=\"!event.allDay\" [style.backgroundColor]=\"event.color\"></span>\n        <p class=\"metadata\" *ngIf=\"!event.allDay\">{{ startTime }}</p>\n        <p class=\"title\">{{ event.title }}</p>\n    </div>\n\n    <div class=\"event__multiday\" *ngIf=\"!isSameDay && !endsToday\"></div>\n</div>",
                styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}:host(event-render){height:100%}.event,:host(event-render){display:flex;flex-direction:column}.event{justify-content:space-between;overflow:hidden;font-size:12px}.even__line{display:flex;align-items:center;text-align:left;color:#546e7a;padding:.25rem}.even__line.all-day{border-radius:2px;width:100%;overflow:hidden;margin-top:.25rem}.even__line.past-event{opacity:.7}.even__line .event-color{min-width:10px;height:10px;border-radius:10px;margin-right:.5rem}.even__line p.metadata{margin-right:.5rem;margin-bottom:0}.even__line p.title{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}"]
            },] }
];
EventRenderMonthComponent.ctorParameters = () => [
    { type: FormattingService }
];
EventRenderMonthComponent.propDecorators = {
    event: [{ type: Input }],
    date: [{ type: Input }]
};

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
EventRenderWeekComponent.decorators = [
    { type: Component, args: [{
                selector: 'event-render-week',
                template: "<div *ngIf=\"event\" class=\"event\" [class.all-day]=\"event.allDay\" [style.backgroundColor]=\"event.color\">\n    <div *ngIf=\"!event.allDay\">\n        <div class=\"event__header\">\n            <p>{{ event.title }}</p>\n        </div>\n\n        <div class=\"event__metadata\">\n            <p>{{ startTime }} - {{ endTime }}</p>\n\n            <div class=\"event__location\" *ngIf=\"event.location\">\n                <mat-icon>place</mat-icon>\n                <span>{{ event.location }}</span>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"event.allDay\">\n        <div class=\"event__header\">\n            <p class=\"title\">{{ event.title }}</p>\n        </div>\n    </div>\n\n    <div class=\"event__multiday\" *ngIf=\"!isSameDay && !endsToday\"></div>\n</div>",
                styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.event,:host(event-render){display:flex;flex-direction:column;height:100%}.event{justify-content:space-between;border-radius:4px;overflow:hidden}.event.all-day{height:auto}.event__header{display:flex;text-align:left;color:#546e7a;padding:.25rem;border-bottom:1px solid hsla(0,0%,100%,.5)}.event__header p{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}.event__metadata{display:flex;flex-direction:column;flex:1;font-weight:100;color:#546e7a;padding:.25rem}.event__metadata p{margin-bottom:.25rem}.event__location{display:flex;justify-content:flex-start;align-items:center}.event__location mat-icon{font-size:16px;height:16px;width:16px;margin-right:.25rem}.event__location span{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden}"]
            },] }
];
EventRenderWeekComponent.ctorParameters = () => [
    { type: FormattingService }
];
EventRenderWeekComponent.propDecorators = {
    event: [{ type: Input }],
    date: [{ type: Input }]
};

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

class KeyboardShortcutDialogComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() { }
}
KeyboardShortcutDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'keyboard-shortcut-dialog',
                template: "<h2 mat-dialog-title>Keyboard Shortcuts</h2>\n<mat-dialog-content class=\"mat-typography\">\n    <mat-divider></mat-divider>\n\n    <div class=\"content-row\">\n        <span>Switch to day view</span>\n        <span>\n            <span class=\"keyboard-shortcut\">d</span>\n        </span>\n    </div>\n\n    <div class=\"content-row\">\n        <span>Switch to week view</span>\n        <span>\n            <span class=\"keyboard-shortcut\">w</span>\n        </span>        \n    </div>\n\n    <div class=\"content-row\">\n        <span>Switch to month view</span>\n        <span>\n            <span class=\"keyboard-shortcut\">m</span>\n        </span>\n    </div>\n\n    <div class=\"content-row\">\n        <span>Go to today</span>\n        <span>\n            <span class=\"keyboard-shortcut\">t</span>\n        </span>\n    </div>\n\n    <div class=\"content-row\" *ngIf=\"data.enableAddEventButton\">\n        <span>Add event</span>\n        <span>\n            <span class=\"keyboard-shortcut\">n</span>\n        </span>\n    </div>\n</mat-dialog-content>",
                styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.mat-dialog-content{width:450px}.mat-dialog-content mat-divider{margin-bottom:1rem}.mat-dialog-content .content-row{display:flex;align-items:center;justify-content:space-between;height:50px}.mat-dialog-content .keyboard-shortcut{display:block;padding:.5rem 0;border:1px solid #efefef;border-radius:4px;width:40px;text-align:center}"]
            },] }
];
KeyboardShortcutDialogComponent.ctorParameters = () => [
    { type: CalendarOptions, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];

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
        this.subscriptions$.add(this.options$.pipe(tap((options) => {
            this.options = options;
            this.selectedView = options.view;
            this.initCalendar();
        })).subscribe());
        this.subscriptions$.add(this.events$.pipe(tap((events) => {
            this.events = events;
            this.parseDates(events);
        })).subscribe());
        this.subscriptions$.add(this.selectedDate$.pipe(tap(selectedDate => {
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
NgxMatCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-mat-calendar',
                template: "<div class=\"calendar\" *ngIf=\"events && options\">\n    <div class=\"calendar__toolbar\">\n         <button\n            mat-stroked-button\n            class=\"toolbar__button toolbar__button--today\"\n            color=\"primary\"\n            [matTooltip]=\"today\"\n            (click)=\"setCalendarToday()\">\n                Today\n        </button>\n\n        <button\n            mat-icon-button\n            class=\"toolbar__button toolbar__button--navigate\"\n            color=\"primary\"\n            (click)=\"setCalendarOffset('prev')\">\n            <mat-icon>chevron_left</mat-icon>\n        </button>\n\n        <button\n            mat-icon-button\n            class=\"toolbar__button toolbar__button--navigate\"\n            color=\"primary\"\n            (click)=\"setCalendarOffset('next')\">\n            <mat-icon>chevron_right</mat-icon>\n        </button>\n\n        <div class=\"toolbar__meta\">\n            <span class=\"toolbar__month\">{{ calendar.monthAndYear }}</span>\n            <span class=\"toolbar__week\" *ngIf=\"!getSelectedView('month')\">Week {{ calendar.weeknumber }}</span>\n        </div>\n\n        <div class=\"toolbar__right\">\n            <button\n                *ngIf=\"enableKeyboardShortcutDialog\"\n                mat-icon-button\n                matTooltip=\"Keyboard shortcuts\"\n                class=\"toolbar__button toolbar__button--keyboard-shortcut\"\n                color=\"primary\"\n                (click)=\"showKeyboardShortcutDialog()\">\n                <mat-icon>keyboard</mat-icon>\n            </button>\n\n            <mat-form-field\n                *ngIf=\"enableViewToggle\"\n                appearance=\"outline\"\n                class=\"toolbar__view-switch\">\n                <mat-select\n                    [value]=\"selectedView\"\n                    (selectionChange)=\"onViewChange(view.value)\"\n                    #view>\n                    <mat-option value=\"day\">Day</mat-option>\n                    <mat-option value=\"week\">Week</mat-option>\n                    <mat-option value=\"month\">Month</mat-option>\n                </mat-select>\n            </mat-form-field>\n\n            <mat-menu #datePickerMenu=\"matMenu\">\n                <div (click)=\"$event.stopPropagation()\">\n                    <mat-calendar (selectedChange)=\"onDatePickerChange($event)\"></mat-calendar>\n                </div>\n            </mat-menu>\n\n            <button\n                [matMenuTriggerFor]=\"datePickerMenu\"\n                matTooltip=\"Pick a date\"\n                *ngIf=\"enableDatePickerButton\"\n                mat-icon-button\n                class=\"toolbar__button\"\n                color=\"primary\">\n                <mat-icon>calendar_today</mat-icon>\n            </button>\n        </div>\n    </div>\n\n    <day-view\n        *ngIf=\"getSelectedView('day')\"\n        [events$]=\"events$\"\n        [selectedDate$]=\"selectedDate$\"\n        [options$]=\"options$\"\n        (eventClick)=\"onEventClick($event)\">\n    </day-view>\n\n    <week-view\n        *ngIf=\"getSelectedView('week')\"\n        [events$]=\"events$\"\n        [selectedDate$]=\"selectedDate$\"\n        [options$]=\"options$\"\n        (eventClick)=\"onEventClick($event)\"\n        (changeToDayView)=\"changeToDayView($event)\">\n    </week-view>\n\n    <month-view\n        *ngIf=\"getSelectedView('month')\"\n        [events$]=\"events$\"\n        [selectedDate$]=\"selectedDate$\"\n        [options$]=\"options$\"\n        (eventClick)=\"onEventClick($event)\"\n        (setCalendarOffset)=\"setCalendarOffset($event)\"\n        (changeToDayView)=\"changeToDayView($event)\">\n    </month-view>\n\n    <button\n        class=\"calendar__add-button\"\n        *ngIf=\"options.enableAddEventButton\"\n        mat-fab\n        color=\"primary\"\n        (click)=\"onAddButtonClick()\">\n        <mat-icon>add</mat-icon>\n    </button>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}:host(ngx-mat-calendar){flex:1;height:100%}.calendar{position:relative;display:flex;flex-direction:column;height:100%}day-view,month-view,week-view{display:flex;height:100%;overflow:hidden}[hidden]{display:none}.calendar__toolbar{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:1rem}.calendar__toolbar .toolbar__button,.calendar__toolbar .toolbar__month,.calendar__toolbar .toolbar__right{display:flex}.calendar__toolbar .toolbar__button{justify-content:center;margin-left:1rem}.calendar__toolbar .toolbar__button--today{margin-left:0;margin-right:1rem}.calendar__toolbar .toolbar__button--navigate{margin-left:0}.calendar__toolbar .toolbar__meta{display:flex;align-items:center;font-weight:200}.calendar__toolbar .toolbar__meta .toolbar__month{margin-left:1rem;font-size:1.25rem}.calendar__toolbar .toolbar__meta .toolbar__week{margin-left:1rem;font-size:1rem;padding:.25rem .5rem;font-size:.75rem;text-transform:uppercase;background-color:#efefef;border-radius:4px}.calendar__toolbar .toolbar__right{flex:1;justify-content:flex-end;align-items:center}.calendar__toolbar .toolbar__datepicker{position:absolute;right:60px}.calendar__toolbar .toolbar__datepicker .mat-form-field{font-size:12px}.calendar__toolbar .toolbar__datepicker .mat-form-field-wrapper{padding-bottom:0}.calendar__toolbar mat-form-field.toolbar__view-switch{margin-left:1rem;align-items:center}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-form-field-wrapper{margin:0;padding:0}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-form-field-infix{padding:.25rem 0 .5rem;width:90px}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-select-arrow{margin-top:.25rem}.calendar__add-button{position:absolute;z-index:1;right:-.5rem;bottom:-.5rem;width:80px;height:80px}.calendar__add-button mat-icon{transform:scale(1.25)}mat-calendar{padding:0 .75rem}.cdk-overlay-pane.hidden-events-overlay{width:calc((100% / 7) + 50px)}.cdk-overlay-pane.hidden-events-overlay .event-container{display:flex;flex-direction:column;position:absolute;background-color:#fff;padding:.5rem;border-radius:4px;overflow:hidden;width:100%;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.cdk-overlay-pane.hidden-events-overlay .event-container.is-today .event-container__date{border-radius:100%;background:#2a2a2a;color:#fff}.cdk-overlay-pane.hidden-events-overlay .event-container .event-container__date{display:flex;justify-content:center;align-items:center;align-self:center;margin-bottom:.5rem;width:40px;min-height:40px;border-radius:20px;margin-top:4px;background-color:#efefef;color:#2a2a2a;font-size:14px}.cdk-overlay-pane.hidden-events-overlay .event-container .event-container__date:hover{cursor:pointer}.cdk-overlay-pane.hidden-events-overlay event-display{position:relative}"]
            },] }
];
NgxMatCalendarComponent.ctorParameters = () => [
    { type: DateAdapter },
    { type: MatDialog }
];
NgxMatCalendarComponent.propDecorators = {
    options$: [{ type: Input }],
    events$: [{ type: Input }],
    selectedDate$: [{ type: Input }],
    dateChange: [{ type: Output }],
    eventClick: [{ type: Output }],
    addButtonClick: [{ type: Output }],
    datePickerMenu: [{ type: ViewChild, args: [MatMenuTrigger,] }],
    onKeyDown: [{ type: HostListener, args: ['window:keydown', ['$event'],] }]
};

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
        this.subscriptions$.add(this.options$.pipe(tap$1((options) => {
            this.options = options;
            this.markerPosition = this.calculateMarkerPosition();
            this.pixelsPerHour = this.options.getPixelsPerMinute * 60;
        })).subscribe());
        this.subscriptions$.add(this.selectedDate$.pipe(tap$1(selectedDate => {
            this.selectedDate = selectedDate;
        })).subscribe());
        this.subscriptions$.add(interval(60000).pipe(tap$1(() => {
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
BaseViewComponent.decorators = [
    { type: Component, args: [{
                template: ''
            },] }
];
BaseViewComponent.ctorParameters = () => [
    { type: FormattingService }
];
BaseViewComponent.propDecorators = {
    options$: [{ type: Input }],
    selectedDate$: [{ type: Input }],
    events$: [{ type: Input }],
    eventClick: [{ type: Output }],
    changeToDayView: [{ type: Output }]
};

class CalendarDay {
    constructor(init) {
        this.date = new Date();
        this.eventGroups = [];
        this.events = [];
        this.eventCount = 0;
        Object.assign(this, init);
    }
}

class DayViewComponent extends BaseViewComponent {
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
DayViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'day-view',
                template: "<div class=\"calendar__days\">\n    <div class=\"calendar__day\">\n        <div class=\"day__header\" [ngClass]=\"{ 'day__header--today ': isToday(selectedDate) }\">\n            <span class=\"day-name\">{{ getDayName(selectedDate) }}</span> \n            <span class=\"day-number\">{{ getDayNumber(selectedDate) }}</span>\n        </div>\n    </div>\n</div> \n\n<div class=\"calendar__content\">\n    <div class=\"calendar__day-events\">\n        <div class=\"day__lane\">\n            <event-display\n                *ngFor=\"let event of dayView.events | allDayEventPipe: true\"\n                class=\"calendar__item\"\n                [component]=\"options.renderComponent.day\"\n                [event]=\"event\"\n                [date]=\"selectedDate\"\n                (click)=\"onEventClick(event)\">\n            </event-display>\n        </div>\n    </div>\n\n    <div class=\"calendar__lanes\">\n        <div class=\"calendar__times\">\n            <div class=\"time-cell\" *ngFor=\"let hour of hoursOfDay;\" [style.height.px]=\"getCellHeight(hour)\">\n                {{ hour.title }}\n            </div>\n        </div>\n\n        <div class=\"day__lane\" [ngClass]=\"{ 'day__lane--today': isToday(selectedDate) }\">\n            <div class=\"time-grid\">\n                <div class=\"time-grid__cell\" *ngFor=\"let hour of hoursOfDay;\" [style.height.px]=\"getCellHeight(hour)\"></div>\n            </div> \n\n            <div class=\"calendar__marker\" *ngIf=\"isToday(selectedDate)\" [style.marginTop.px]=\"markerPosition\"></div>\n            \n            <event-display\n                *ngFor=\"let event of dayView.events | allDayEventPipe: false\"\n                class=\"calendar__item\"\n                [component]=\"options.renderComponent.day\"\n                [event]=\"event\"\n                [date]=\"selectedDate\"                \n                [style.width.%]=\"event.grid?.width\"\n                [style.marginLeft.%]=\"event.grid?.offsetLeft\"\n                [style.marginTop.px]=\"event.grid?.offsetTop\"\n                [style.height.px]=\"event.grid?.durationOffset\"\n                (click)=\"onEventClick(event)\">\n            </event-display>\n        </div>\n    </div>\n</div>",
                styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__lanes{display:flex;flex:1;flex-direction:row;padding-top:10px}.calendar__lanes .day__lane{display:flex;flex-direction:column;position:relative;flex:1;padding:0 .5rem;border-right:1px solid #efefef;transition:.25s;background-color:#f4f4f4}.calendar__lanes .day__lane .time-grid{position:absolute;top:0;left:0;width:100%}.calendar__lanes .day__lane .time-grid__cell{border-top:1px dotted #dbdbdb;width:100%}.calendar__lanes .day__lane--today{background-color:#eef7fb}.calendar__lanes .day__lane--today .time-grid__cell{border-top-color:#c5e3f1}"]
            },] }
];
DayViewComponent.ctorParameters = () => [
    { type: FormattingService }
];

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
EventDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'event-display',
                template: `<ng-template #renderTarget></ng-template>`,
                encapsulation: ViewEncapsulation.None,
                styles: [":host(event-display){overflow:hidden}event-render-day,event-render-week{height:100%}"]
            },] }
];
EventDisplayComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
EventDisplayComponent.propDecorators = {
    event: [{ type: Input }],
    date: [{ type: Input }],
    component: [{ type: Input }],
    renderTarget: [{ type: ViewChild, args: ['renderTarget', { read: ViewContainerRef, static: true },] }]
};

const MaterialModules = [
    MatIconModule,
    MatTooltipModule
];
class SharedComponentsModule {
}
SharedComponentsModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

class AllDayEventPipe {
    transform(items, allDay) {
        if (allDay) {
            return items.filter(item => item.allDay);
        }
        return items.filter(item => !item.allDay);
    }
}
AllDayEventPipe.decorators = [
    { type: Pipe, args: [{
                name: 'allDayEventPipe'
            },] }
];

class LimitPipe {
    transform(items, limit) {
        return items.slice(0, limit);
    }
}
LimitPipe.decorators = [
    { type: Pipe, args: [{
                name: 'limitPipe'
            },] }
];

class PipesModule {
}
PipesModule.decorators = [
    { type: NgModule, args: [{
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

class DayViewModule {
}
DayViewModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

class WeekViewComponent extends BaseViewComponent {
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
WeekViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'week-view',
                template: "<div class=\"calendar__days\">\n    <div class=\"calendar__day\" *ngFor=\"let day of weekView.days;\">\n        <div class=\"day__header\" [ngClass]=\"{ 'day__header--today ': isToday(day.date) }\">\n            <span class=\"day-name\">{{ getDayName(day.date) }}</span> \n            <span class=\"day-number\" (click)=\"navigateToDayView(day.date)\">{{ getDayNumber(day.date) }}</span>\n        </div>\n    </div>\n</div> \n\n<div class=\"calendar__content\">\n    <div class=\"calendar__day-events\">\n        <div class=\"day__lane\" *ngFor=\"let day of weekView.days\">\n            <event-display\n                *ngFor=\"let event of day.events | allDayEventPipe: true\"\n                class=\"calendar__item\"\n                [component]=\"options.renderComponent.week\"\n                [event]=\"event\"\n                [date]=\"day.date\"\n                (click)=\"onEventClick(event)\">\n            </event-display>\n        </div>\n    </div>\n\n    <div class=\"calendar__lanes\">\n        <div class=\"calendar__times\">\n            <div class=\"time-cell\" *ngFor=\"let hour of hoursOfDay;\" [style.height.px]=\"getCellHeight(hour)\">\n                {{ hour.title }}\n            </div>\n        </div>\n\n        <div class=\"day__lane\"\n            *ngFor=\"let day of weekView.days\"\n            [ngClass]=\"{ 'day__lane--today': isToday(day.date) }\">\n\n            <div class=\"time-grid\">\n                <div class=\"time-grid__cell\" *ngFor=\"let hour of hoursOfDay;\" [style.height.px]=\"getCellHeight(hour)\"></div>\n            </div> \n\n            <div class=\"calendar__marker\" *ngIf=\"isToday(day.date)\" [style.marginTop.px]=\"markerPosition\"></div>\n            \n            <event-display\n                *ngFor=\"let event of day.events | allDayEventPipe: false\"\n                class=\"calendar__item\"\n                [component]=\"options.renderComponent.week\"\n                [event]=\"event\"\n                [date]=\"day.date\"                \n                [style.width.%]=\"event.grid?.width\"\n                [style.marginLeft.%]=\"event.grid?.offsetLeft\"\n                [style.marginTop.px]=\"event.grid?.offsetTop\"\n                [style.height.px]=\"event.grid?.durationOffset\"\n                (click)=\"onEventClick(event)\">\n            </event-display>\n        </div>\n    </div>\n</div>",
                styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__lanes{display:flex;flex:1;flex-direction:row;padding-top:10px}.calendar__lanes .day__lane{display:flex;flex-direction:column;position:relative;flex:1;padding:0 .5rem;border-right:1px solid #efefef;transition:.25s}.calendar__lanes .day__lane:hover{background-color:#f4f4f4}.calendar__lanes .day__lane:hover .time-grid__cell{border-top-color:#dbdbdb}.calendar__lanes .day__lane .time-grid{position:absolute;top:0;left:0;width:100%}.calendar__lanes .day__lane .time-grid__cell{border-top:1px dotted #efefef;width:100%}.calendar__lanes .day__lane--today,.calendar__lanes .day__lane--today:hover{background-color:#eef7fb}.calendar__lanes .day__lane--today .time-grid__cell{border-top-color:#c5e3f1}.calendar__day{justify-content:center}.calendar__day .day__header:hover .day-number{cursor:pointer}"]
            },] }
];
WeekViewComponent.ctorParameters = () => [
    { type: FormattingService }
];

class WeekViewModule {
}
WeekViewModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

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
MonthViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'month-view',
                template: "<div class=\"calendar__days\">\n    <div class=\"calendar__day\" *ngFor=\"let day of daysOfWeek;\">\n        <div class=\"day__header\">\n            <span class=\"day-name\">{{ day.title }}</span>\n        </div>\n    </div>\n</div>\n\n<div class=\"calendar__weeknumbers\">\n    <div class=\"week-number-cell\" *ngFor=\"let weekNumber of weekNumbers;\">\n        {{ weekNumber }}\n    </div>\n</div>\n\n<div class=\"calendar__content\">\n    <div class=\"calendar__blocks\" #calendarDayElement>\n        <div \n            *ngFor=\"let day of monthView.days\" \n            class=\"day__block\"\n            [class.is-today]=\"isToday(day.date)\">\n            <div class=\"day__block-content\" [class.not-current-month]=\"!isCurrentMonth(day.date)\">\n                <span class=\"day__block-date\" (click)=\"navigateToDayView(day.date)\">{{ getDayNumber(day.date) }}</span>\n            </div>\n\n            <div class=\"day__events\">\n                <event-display\n                    *ngFor=\"let event of day.events | limitPipe: maxEventsVisible - 1\"\n                    class=\"calendar__item\"\n                    [component]=\"options.renderComponent.month\"\n                    [event]=\"event\"\n                    [date]=\"day.date\"      \n                    (click)=\"onEventClick(event)\">\n                </event-display>\n\n                <span *ngIf=\"day.eventCount && maxEventsVisible > 0 && day.eventCount >= maxEventsVisible\">\n                    <div\n                        class=\"hidden-events-trigger\"                        \n                        (click)=\"toggleHiddenEvents(trigger, day)\"\n                        cdkOverlayOrigin\n                        #trigger=\"cdkOverlayOrigin\">\n                        {{ day.eventCount - maxEventsVisible + 1 }} more\n                    </div>\n                </span>  \n            </div>\n        </div>\n\n        <ng-template\n            cdkConnectedOverlay\n            (overlayOutsideClick)=\"closeHiddenEvents()\"\n            [cdkConnectedOverlayOffsetY]=\"-100\"\n            [cdkConnectedOverlayOffsetX]=\"-35\"\n            cdkConnectedOverlayPanelClass=\"hidden-events-overlay\"\n            [cdkConnectedOverlayOrigin]=\"hiddenEventsTriggerOrigin\"\n            [cdkConnectedOverlayOpen]=\"showHiddenEvents\">\n            <div\n                class=\"event-container\"\n                [class.is-today]=\"isToday(hiddenEventsDay.date)\"\n                [style.height.px]=\"getHiddenEventsHeight()\">\n\n                <span\n                    class=\"event-container__date\"\n                    (click)=\"navigateToDayView(hiddenEventsDay.date)\">\n                    {{ getDayNumber(hiddenEventsDay.date) }}\n                </span>\n\n                <event-display\n                    *ngFor=\"let event of hiddenEventsDay.events\"\n                    class=\"calendar__item\"\n                    [component]=\"options.renderComponent.month\"\n                    [event]=\"event\"\n                    [date]=\"hiddenEventsDay.date\"      \n                    (click)=\"onEventClick(event)\">\n                </event-display>\n            </div>\n        </ng-template>          \n    </div>\n</div>\n",
                styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.calendar__content{display:flex;margin-left:4px;margin-top:15px;border-left:1px solid #efefef}.calendar__days{height:1.5rem;margin-left:38px}.calendar__days .day__header{flex:1}.calendar__weeknumbers{display:flex;flex-direction:column;justify-content:space-around;padding-top:1.5rem;text-align:center;width:22px;margin-right:12px}.calendar__weeknumbers .week-number-cell{color:#c8c8c8}.calendar__blocks{display:flex;flex:1;flex-wrap:wrap;flex-direction:row;padding-top:.5rem}.calendar__blocks .day__block{position:relative;display:flex;flex-direction:column;width:calc(100% / 7);padding-top:.5rem;overflow:hidden;border-right:1px solid #efefef;border-bottom:1px solid #efefef}.calendar__blocks .day__block .day__block-content{justify-content:center;display:flex}.calendar__blocks .day__block .day__block-date{display:flex;justify-content:center;align-items:center;text-align:center;width:25px;height:25px;color:#2a2a2a;font-size:.75rem}.calendar__blocks .day__block .day__block-date:hover{cursor:pointer}.calendar__blocks .day__block .day__events{position:absolute;overflow:hidden;top:2rem;width:100%}.calendar__blocks .day__block .not-current-month{opacity:.25}.calendar__blocks .day__block.is-today{background-color:#eef7fb}.calendar__blocks .day__block.is-today .day__block-date{border-radius:100%;background:#2a2a2a;color:#fff}.calendar__blocks .day__block .calendar__item{position:relative;padding:0 2px}.hidden-events-trigger{font-size:12px;padding:0 .5rem;font-weight:600}.hidden-events-trigger:hover{cursor:pointer;opacity:.7}"]
            },] }
];
MonthViewComponent.ctorParameters = () => [
    { type: FormattingService }
];
MonthViewComponent.propDecorators = {
    setCalendarOffset: [{ type: Output }],
    calendarDayElement: [{ type: ViewChild, args: ['calendarDayElement', { read: ElementRef, static: true },] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};

class MonthViewModule {
}
MonthViewModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

class LocaleDateAdapter extends NativeDateAdapter {
    getFirstDayOfWeek() {
        return 1;
    }
}
LocaleDateAdapter.decorators = [
    { type: Injectable }
];

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
const ɵ0 = {
    useUtc: true
};
class NgxMatCalendarModule {
}
NgxMatCalendarModule.decorators = [
    { type: NgModule, args: [{
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
                        useValue: ɵ0
                    },
                    {
                        provide: DateAdapter,
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

export { KeyboardShortcutDialogComponent, NgxMatCalendarComponent, NgxMatCalendarModule, ɵ0, CalendarOptions as ɵa, DayViewModule as ɵb, DayViewComponent as ɵc, BaseViewComponent as ɵd, FormattingService as ɵe, SharedComponentsModule as ɵf, EventDisplayComponent as ɵg, EventRenderDayComponent as ɵh, EventRenderWeekComponent as ɵi, EventRenderMonthComponent as ɵj, PipesModule as ɵk, LimitPipe as ɵl, AllDayEventPipe as ɵm, WeekViewModule as ɵn, WeekViewComponent as ɵo, MonthViewModule as ɵp, MonthViewComponent as ɵq, LocaleDateAdapter as ɵr };
//# sourceMappingURL=arjentienkamp-ngx-mat-calendar.js.map

import { Component, EventEmitter, HostListener, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { format, add, isToday, toDate } from 'date-fns';
import { MatMenuTrigger } from '@angular/material/menu';
import { DAY, WEEK, MONTH } from './models/Views';
import { Periods } from './models/Times';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PREVIOUS } from './models/Directions';
import { KeyboardShortcutDialogComponent } from './components/dialogs/keyboard-shortcut-dialog/keyboard-shortcut-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/menu";
import * as i8 from "@angular/material/datepicker";
import * as i9 from "@angular/material/form-field";
import * as i10 from "@angular/material/select";
import * as i11 from "./components/day-view/day-view.component";
import * as i12 from "./components/week-view/week-view.component";
import * as i13 from "./components/month-view/month-view.component";
function NgxMatCalendarComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Week ", ctx_r1.calendar.weeknumber, "");
} }
function NgxMatCalendarComponent_div_0_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function NgxMatCalendarComponent_div_0_button_15_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.showKeyboardShortcutDialog(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "keyboard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function NgxMatCalendarComponent_div_0_mat_form_field_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 21);
    i0.ɵɵelementStart(1, "mat-select", 22, 23);
    i0.ɵɵlistener("selectionChange", function NgxMatCalendarComponent_div_0_mat_form_field_16_Template_mat_select_selectionChange_1_listener() { i0.ɵɵrestoreView(_r14); const _r12 = i0.ɵɵreference(2); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.onViewChange(_r12.value); });
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
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r3.selectedView);
} }
function NgxMatCalendarComponent_div_0_button_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "calendar_today");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r4 = i0.ɵɵreference(18);
    i0.ɵɵproperty("matMenuTriggerFor", _r4);
} }
function NgxMatCalendarComponent_div_0_day_view_22_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "day-view", 28);
    i0.ɵɵlistener("eventClick", function NgxMatCalendarComponent_div_0_day_view_22_Template_day_view_eventClick_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); return ctx_r15.onEventClick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("events$", ctx_r6.events$)("selectedDate$", ctx_r6.selectedDate$)("options$", ctx_r6.options$);
} }
function NgxMatCalendarComponent_div_0_week_view_23_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "week-view", 29);
    i0.ɵɵlistener("eventClick", function NgxMatCalendarComponent_div_0_week_view_23_Template_week_view_eventClick_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.onEventClick($event); })("changeToDayView", function NgxMatCalendarComponent_div_0_week_view_23_Template_week_view_changeToDayView_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.changeToDayView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("events$", ctx_r7.events$)("selectedDate$", ctx_r7.selectedDate$)("options$", ctx_r7.options$);
} }
function NgxMatCalendarComponent_div_0_month_view_24_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "month-view", 30);
    i0.ɵɵlistener("eventClick", function NgxMatCalendarComponent_div_0_month_view_24_Template_month_view_eventClick_0_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.onEventClick($event); })("setCalendarOffset", function NgxMatCalendarComponent_div_0_month_view_24_Template_month_view_setCalendarOffset_0_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.setCalendarOffset($event); })("changeToDayView", function NgxMatCalendarComponent_div_0_month_view_24_Template_month_view_changeToDayView_0_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.changeToDayView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("events$", ctx_r8.events$)("selectedDate$", ctx_r8.selectedDate$)("options$", ctx_r8.options$);
} }
function NgxMatCalendarComponent_div_0_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function NgxMatCalendarComponent_div_0_button_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.onAddButtonClick(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function NgxMatCalendarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "button", 3);
    i0.ɵɵlistener("click", function NgxMatCalendarComponent_div_0_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.setCalendarToday(); });
    i0.ɵɵtext(3, " Today ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 4);
    i0.ɵɵlistener("click", function NgxMatCalendarComponent_div_0_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r27); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.setCalendarOffset("prev"); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "chevron_left");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 4);
    i0.ɵɵlistener("click", function NgxMatCalendarComponent_div_0_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r27); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.setCalendarOffset("next"); });
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
    i0.ɵɵlistener("selectedChange", function NgxMatCalendarComponent_div_0_Template_mat_calendar_selectedChange_20_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.onDatePickerChange($event); });
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
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
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
} }
export class NgxMatCalendarComponent {
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
NgxMatCalendarComponent.ɵfac = function NgxMatCalendarComponent_Factory(t) { return new (t || NgxMatCalendarComponent)(i0.ɵɵdirectiveInject(i1.DateAdapter), i0.ɵɵdirectiveInject(i2.MatDialog)); };
NgxMatCalendarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxMatCalendarComponent, selectors: [["ngx-mat-calendar"]], viewQuery: function NgxMatCalendarComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatMenuTrigger, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePickerMenu = _t.first);
    } }, hostBindings: function NgxMatCalendarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function NgxMatCalendarComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { options$: "options$", events$: "events$", selectedDate$: "selectedDate$" }, outputs: { dateChange: "dateChange", eventClick: "eventClick", addButtonClick: "addButtonClick" }, decls: 1, vars: 1, consts: [["class", "calendar", 4, "ngIf"], [1, "calendar"], [1, "calendar__toolbar"], ["mat-stroked-button", "", "color", "primary", 1, "toolbar__button", "toolbar__button--today", 3, "matTooltip", "click"], ["mat-icon-button", "", "color", "primary", 1, "toolbar__button", "toolbar__button--navigate", 3, "click"], [1, "toolbar__meta"], [1, "toolbar__month"], ["class", "toolbar__week", 4, "ngIf"], [1, "toolbar__right"], ["mat-icon-button", "", "matTooltip", "Keyboard shortcuts", "class", "toolbar__button toolbar__button--keyboard-shortcut", "color", "primary", 3, "click", 4, "ngIf"], ["appearance", "outline", "class", "toolbar__view-switch", 4, "ngIf"], ["datePickerMenu", "matMenu"], [3, "click"], [3, "selectedChange"], ["matTooltip", "Pick a date", "mat-icon-button", "", "class", "toolbar__button", "color", "primary", 3, "matMenuTriggerFor", 4, "ngIf"], [3, "events$", "selectedDate$", "options$", "eventClick", 4, "ngIf"], [3, "events$", "selectedDate$", "options$", "eventClick", "changeToDayView", 4, "ngIf"], [3, "events$", "selectedDate$", "options$", "eventClick", "setCalendarOffset", "changeToDayView", 4, "ngIf"], ["class", "calendar__add-button", "mat-fab", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "toolbar__week"], ["mat-icon-button", "", "matTooltip", "Keyboard shortcuts", "color", "primary", 1, "toolbar__button", "toolbar__button--keyboard-shortcut", 3, "click"], ["appearance", "outline", 1, "toolbar__view-switch"], [3, "value", "selectionChange"], ["view", ""], ["value", "day"], ["value", "week"], ["value", "month"], ["matTooltip", "Pick a date", "mat-icon-button", "", "color", "primary", 1, "toolbar__button", 3, "matMenuTriggerFor"], [3, "events$", "selectedDate$", "options$", "eventClick"], [3, "events$", "selectedDate$", "options$", "eventClick", "changeToDayView"], [3, "events$", "selectedDate$", "options$", "eventClick", "setCalendarOffset", "changeToDayView"], ["mat-fab", "", "color", "primary", 1, "calendar__add-button", 3, "click"]], template: function NgxMatCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxMatCalendarComponent_div_0_Template, 26, 10, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.events && ctx.options);
    } }, directives: [i3.NgIf, i4.MatButton, i5.MatTooltip, i6.MatIcon, i7.MatMenu, i8.MatCalendar, i9.MatFormField, i10.MatSelect, i1.MatOption, i7.MatMenuTrigger, i11.DayViewComponent, i12.WeekViewComponent, i13.MonthViewComponent], styles: ["*{box-sizing:border-box}.calendar__item{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item:hover{opacity:.75;cursor:pointer}.calendar__times{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell{display:flex;justify-content:center}.calendar__content{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day .day__header{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day .day__header .day-name{margin-bottom:.5rem}.calendar__day .day__header .day-number{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day .day__header--today .day-number{background-color:#263238;color:#fff}.calendar__day-events{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events .day__lane{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events .day__lane .calendar__item{position:relative}.calendar__day-events .day__lane .calendar__item .event__header{border-bottom:0}.calendar__marker{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}:host(ngx-mat-calendar){flex:1;height:100%}.calendar{position:relative;display:flex;flex-direction:column;height:100%}day-view,month-view,week-view{display:flex;height:100%;overflow:hidden}[hidden]{display:none}.calendar__toolbar{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:1rem}.calendar__toolbar .toolbar__button,.calendar__toolbar .toolbar__month,.calendar__toolbar .toolbar__right{display:flex}.calendar__toolbar .toolbar__button{justify-content:center;margin-left:1rem}.calendar__toolbar .toolbar__button--today{margin-left:0;margin-right:1rem}.calendar__toolbar .toolbar__button--navigate{margin-left:0}.calendar__toolbar .toolbar__meta{display:flex;align-items:center;font-weight:200}.calendar__toolbar .toolbar__meta .toolbar__month{margin-left:1rem;font-size:1.25rem}.calendar__toolbar .toolbar__meta .toolbar__week{margin-left:1rem;font-size:1rem;padding:.25rem .5rem;font-size:.75rem;text-transform:uppercase;background-color:#efefef;border-radius:4px}.calendar__toolbar .toolbar__right{flex:1;justify-content:flex-end;align-items:center}.calendar__toolbar .toolbar__datepicker{position:absolute;right:60px}.calendar__toolbar .toolbar__datepicker .mat-form-field{font-size:12px}.calendar__toolbar .toolbar__datepicker .mat-form-field-wrapper{padding-bottom:0}.calendar__toolbar mat-form-field.toolbar__view-switch{margin-left:1rem;align-items:center}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-form-field-wrapper{margin:0;padding:0}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-form-field-infix{padding:.25rem 0 .5rem;width:90px}.calendar__toolbar mat-form-field.toolbar__view-switch .mat-select-arrow{margin-top:.25rem}.calendar__add-button{position:absolute;z-index:1;right:-.5rem;bottom:-.5rem;width:80px;height:80px}.calendar__add-button mat-icon{transform:scale(1.25)}mat-calendar{padding:0 .75rem}.cdk-overlay-pane.hidden-events-overlay{width:calc((100% / 7) + 50px)}.cdk-overlay-pane.hidden-events-overlay .event-container{display:flex;flex-direction:column;position:absolute;background-color:#fff;padding:.5rem;border-radius:4px;overflow:hidden;width:100%;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.cdk-overlay-pane.hidden-events-overlay .event-container.is-today .event-container__date{border-radius:100%;background:#2a2a2a;color:#fff}.cdk-overlay-pane.hidden-events-overlay .event-container .event-container__date{display:flex;justify-content:center;align-items:center;align-self:center;margin-bottom:.5rem;width:40px;min-height:40px;border-radius:20px;margin-top:4px;background-color:#efefef;color:#2a2a2a;font-size:14px}.cdk-overlay-pane.hidden-events-overlay .event-container .event-container__date:hover{cursor:pointer}.cdk-overlay-pane.hidden-events-overlay event-display{position:relative}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxMatCalendarComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-mat-calendar',
                templateUrl: './ngx-mat-calendar.component.html',
                styleUrls: ['./ngx-mat-calendar.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.DateAdapter }, { type: i2.MatDialog }]; }, { options$: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1jYWxlbmRhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvbmd4LW1hdC1jYWxlbmRhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvbmd4LW1hdC1jYWxlbmRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSXhELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBUyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQStCLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGtGQUFrRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDZ0J2SCxnQ0FBOEQ7SUFBQSxZQUE4QjtJQUFBLGlCQUFPOzs7SUFBckMsZUFBOEI7SUFBOUIsOERBQThCOzs7O0lBSTVGLGtDQU0yQztJQUF2Qyx5TkFBc0M7SUFDdEMsZ0NBQVU7SUFBQSx3QkFBUTtJQUFBLGlCQUFXO0lB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TTtTQUNiO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7OzhGQWpNUSx1QkFBdUI7NERBQXZCLHVCQUF1Qjt1QkFTckIsY0FBYzs7Ozs7OEdBVGhCLHFCQUFpQjs7UUNyQjlCLDBFQThHTTs7UUE5R2lCLGdEQUF1Qjs7dUZEcUJqQyx1QkFBdUI7Y0FObkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN4QztzRkFFWSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUVJLFVBQVU7a0JBQW5CLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQUVvQixjQUFjO2tCQUF4QyxTQUFTO21CQUFDLGNBQWM7WUFpQnpCLFNBQVM7a0JBRFIsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmb3JtYXQsIGFkZCwgaXNUb2RheSwgdG9EYXRlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdE1lbnVUcmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9tb2RlbHMvQ2FsZW5kYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvQ2FsZW5kYXJPcHRpb25zJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICcuL21vZGVscy9DYWxlbmRhckV2ZW50JztcbmltcG9ydCB7IERBWSwgV0VFSywgTU9OVEgsIFZpZXdzIH0gZnJvbSAnLi9tb2RlbHMvVmlld3MnO1xuaW1wb3J0IHsgUGVyaW9kcyB9IGZyb20gJy4vbW9kZWxzL1RpbWVzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQUkVWSU9VUyB9IGZyb20gJy4vbW9kZWxzL0RpcmVjdGlvbnMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9ncy9rZXlib2FyZC1zaG9ydGN1dC1kaWFsb2cva2V5Ym9hcmQtc2hvcnRjdXQtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LW1hdC1jYWxlbmRhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25neC1tYXQtY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25neC1tYXQtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE5neE1hdENhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIG9wdGlvbnMkOiBPYnNlcnZhYmxlPENhbGVuZGFyT3B0aW9ucz47XG4gICAgQElucHV0KCkgZXZlbnRzJDogT2JzZXJ2YWJsZTxDYWxlbmRhckV2ZW50W10+O1xuICAgIEBJbnB1dCgpIHNlbGVjdGVkRGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxEYXRlPjtcblxuICAgIEBPdXRwdXQoKSBkYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGV2ZW50Q2xpY2s6IEV2ZW50RW1pdHRlcjxDYWxlbmRhckV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgYWRkQnV0dG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQFZpZXdDaGlsZChNYXRNZW51VHJpZ2dlcikgZGF0ZVBpY2tlck1lbnU6IE1hdE1lbnVUcmlnZ2VyO1xuXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zJDogU3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gICAgZGlmZmVyOiBhbnk7XG4gICAgdmlld3M6IFZpZXdzO1xuICAgIG9wdGlvbnM6IENhbGVuZGFyT3B0aW9ucztcbiAgICBldmVudHM6IENhbGVuZGFyRXZlbnRbXTtcbiAgICBzZWxlY3RlZFZpZXc6IFZpZXdzO1xuICAgIHNlbGVjdGVkRGF0ZTogRGF0ZTtcbiAgICBlbmFibGVEYXRlUGlja2VyQnV0dG9uOiBib29sZWFuO1xuICAgIGVuYWJsZVZpZXdUb2dnbGU6IGJvb2xlYW47XG4gICAgZW5hYmxlS2V5Ym9hcmRTaG9ydGN1dERpYWxvZzogYm9vbGVhbjtcbiAgICBjYWxlbmRhciA9IHt9IGFzIENhbGVuZGFyO1xuICAgIHRvZGF5ID0gZm9ybWF0KG5ldyBEYXRlKCksICdFRUVFLCBkIE1NTU0nKTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlib2FyZEV2ZW50cyhldmVudCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyPERhdGU+LFxuICAgICAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXG4gICAgKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyQuYWRkKFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zJC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCgob3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmlldyA9IG9wdGlvbnMudmlldztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0Q2FsZW5kYXIoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyQuYWRkKFxuICAgICAgICAgICAgdGhpcy5ldmVudHMkLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKChldmVudHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VEYXRlcyhldmVudHMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnN1YnNjcmliZSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zJC5hZGQoXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSQucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoc2VsZWN0ZWREYXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBzZWxlY3RlZERhdGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdENhbGVuZGFyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlICE9PSBzZWxlY3RlZERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnN1YnNjcmliZSgpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaW5pdENhbGVuZGFyKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZURhdGVQaWNrZXJCdXR0b24gPSB0aGlzLm9wdGlvbnMuZW5hYmxlRGF0ZVBpY2tlckJ1dHRvbjtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlVmlld1RvZ2dsZSA9IHRoaXMub3B0aW9ucy5lbmFibGVWaWV3VG9nZ2xlO1xuICAgICAgICAgICAgdGhpcy5lbmFibGVLZXlib2FyZFNob3J0Y3V0RGlhbG9nID0gdGhpcy5vcHRpb25zLmVuYWJsZUtleWJvYXJkU2hvcnRjdXREaWFsb2c7XG4gICAgICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLnNldExvY2FsZSh0aGlzLm9wdGlvbnMubG9jYWxlKTtcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDYWxlbmRhcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyID0geyAvLyBAVE9ETzogbmV3IGNsYXNzIGluc3RhbmNlXG4gICAgICAgICAgICAgICAgbW9udGhBbmRZZWFyOiBmb3JtYXQodGhpcy5zZWxlY3RlZERhdGUsICdNTU1NIHl5eXknKSxcbiAgICAgICAgICAgICAgICB3ZWVrbnVtYmVyOiBmb3JtYXQodGhpcy5zZWxlY3RlZERhdGUsICdJJylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJzZURhdGVzKGV2ZW50czogQ2FsZW5kYXJFdmVudFtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzLm1hcCgoZXZlbnQ6IENhbGVuZGFyRXZlbnQpID0+IHtcbiAgICAgICAgICAgICBldmVudC5kYXRlID0gbmV3IERhdGUoZXZlbnQuZGF0ZSk7XG4gICAgICAgICAgICAgZXZlbnQuc3RhcnRUaW1lID0gbmV3IERhdGUoZXZlbnQuc3RhcnRUaW1lKTtcbiAgICAgICAgICAgICBldmVudC5lbmRUaW1lID0gbmV3IERhdGUoZXZlbnQuZW5kVGltZSk7XG5cbiAgICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlzVG9kYXkoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gaXNUb2RheShkYXRlKTtcbiAgICB9XG5cbiAgICBzZXRDYWxlbmRhclRvZGF5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlJC5uZXh0KHRoaXMuc2VsZWN0ZWREYXRlKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDYWxlbmRhclNldCgpO1xuICAgIH1cblxuICAgIHNldENhbGVuZGFyT2Zmc2V0KGRpcmVjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IFBlcmlvZHNbdGhpcy5zZWxlY3RlZFZpZXddO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gYWRkKHRoaXMuc2VsZWN0ZWREYXRlLCB7XG4gICAgICAgICAgICBbb2Zmc2V0XTogZGlyZWN0aW9uID09PSBQUkVWSU9VUyA/IC0xIDogMVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSQubmV4dCh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2FsZW5kYXJTZXQoKTtcbiAgICB9XG5cbiAgICBzZXRDYWxlbmRhcihkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSQubmV4dChkYXRlKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2FsZW5kYXJTZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNhbGVuZGFyU2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcbiAgICAgICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZERhdGUpO1xuICAgIH1cblxuICAgIG9uVmlld0NoYW5nZSh2aWV3OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZpZXcgPSB2aWV3O1xuICAgIH1cblxuICAgIGNoYW5nZVRvRGF5VmlldyhkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3ID0gREFZO1xuICAgICAgICB0aGlzLnNldENhbGVuZGFyKGRhdGUpO1xuICAgIH1cblxuICAgIGdldFNlbGVjdGVkVmlldyh2aWV3OiBWaWV3cyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFZpZXcgPT09IHZpZXc7XG4gICAgfVxuXG4gICAgb25FdmVudENsaWNrKGV2ZW50OiBDYWxlbmRhckV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXZlbnRDbGljay5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBvbkFkZEJ1dHRvbkNsaWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEJ1dHRvbkNsaWNrLmVtaXQoKTtcbiAgICB9XG5cbiAgICBvbkRhdGVQaWNrZXJDaGFuZ2UoZGF0ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0Q2FsZW5kYXIodG9EYXRlKGRhdGUpKTtcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyTWVudS5jbG9zZU1lbnUoKTtcbiAgICB9XG5cbiAgICBzaG93S2V5Ym9hcmRTaG9ydGN1dERpYWxvZygpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihLZXlib2FyZFNob3J0Y3V0RGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkYXRhOiB0aGlzLm9wdGlvbnNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5Ym9hcmRFdmVudHMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3ID0gREFZO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmlldyA9IFdFRUs7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ20nOlxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3ID0gTU9OVEg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3QnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FsZW5kYXJUb2RheSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICduJzpcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEJ1dHRvbkNsaWNrLmVtaXQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNhbGVuZGFyXCIgKm5nSWY9XCJldmVudHMgJiYgb3B0aW9uc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhcl9fdG9vbGJhclwiPlxuICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbWF0LXN0cm9rZWQtYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInRvb2xiYXJfX2J1dHRvbiB0b29sYmFyX19idXR0b24tLXRvZGF5XCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJ0b2RheVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0Q2FsZW5kYXJUb2RheSgpXCI+XG4gICAgICAgICAgICAgICAgVG9kYXlcbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInRvb2xiYXJfX2J1dHRvbiB0b29sYmFyX19idXR0b24tLW5hdmlnYXRlXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0Q2FsZW5kYXJPZmZzZXQoJ3ByZXYnKVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmNoZXZyb25fbGVmdDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJ0b29sYmFyX19idXR0b24gdG9vbGJhcl9fYnV0dG9uLS1uYXZpZ2F0ZVwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgKGNsaWNrKT1cInNldENhbGVuZGFyT2Zmc2V0KCduZXh0JylcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5jaGV2cm9uX3JpZ2h0PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xiYXJfX21ldGFcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbGJhcl9fbW9udGhcIj57eyBjYWxlbmRhci5tb250aEFuZFllYXIgfX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvb2xiYXJfX3dlZWtcIiAqbmdJZj1cIiFnZXRTZWxlY3RlZFZpZXcoJ21vbnRoJylcIj5XZWVrIHt7IGNhbGVuZGFyLndlZWtudW1iZXIgfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sYmFyX19yaWdodFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZW5hYmxlS2V5Ym9hcmRTaG9ydGN1dERpYWxvZ1wiXG4gICAgICAgICAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgbWF0VG9vbHRpcD1cIktleWJvYXJkIHNob3J0Y3V0c1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0b29sYmFyX19idXR0b24gdG9vbGJhcl9fYnV0dG9uLS1rZXlib2FyZC1zaG9ydGN1dFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2hvd0tleWJvYXJkU2hvcnRjdXREaWFsb2coKVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZDwvbWF0LWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJlbmFibGVWaWV3VG9nZ2xlXCJcbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0b29sYmFyX192aWV3LXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJzZWxlY3RlZFZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cIm9uVmlld0NoYW5nZSh2aWV3LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICN2aWV3PlxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImRheVwiPkRheTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ3ZWVrXCI+V2VlazwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJtb250aFwiPk1vbnRoPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgICAgIDxtYXQtbWVudSAjZGF0ZVBpY2tlck1lbnU9XCJtYXRNZW51XCI+XG4gICAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxtYXQtY2FsZW5kYXIgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uRGF0ZVBpY2tlckNoYW5nZSgkZXZlbnQpXCI+PC9tYXQtY2FsZW5kYXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21hdC1tZW51PlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgW21hdE1lbnVUcmlnZ2VyRm9yXT1cImRhdGVQaWNrZXJNZW51XCJcbiAgICAgICAgICAgICAgICBtYXRUb29sdGlwPVwiUGljayBhIGRhdGVcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZW5hYmxlRGF0ZVBpY2tlckJ1dHRvblwiXG4gICAgICAgICAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0b29sYmFyX19idXR0b25cIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5jYWxlbmRhcl90b2RheTwvbWF0LWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGF5LXZpZXdcbiAgICAgICAgKm5nSWY9XCJnZXRTZWxlY3RlZFZpZXcoJ2RheScpXCJcbiAgICAgICAgW2V2ZW50cyRdPVwiZXZlbnRzJFwiXG4gICAgICAgIFtzZWxlY3RlZERhdGUkXT1cInNlbGVjdGVkRGF0ZSRcIlxuICAgICAgICBbb3B0aW9ucyRdPVwib3B0aW9ucyRcIlxuICAgICAgICAoZXZlbnRDbGljayk9XCJvbkV2ZW50Q2xpY2soJGV2ZW50KVwiPlxuICAgIDwvZGF5LXZpZXc+XG5cbiAgICA8d2Vlay12aWV3XG4gICAgICAgICpuZ0lmPVwiZ2V0U2VsZWN0ZWRWaWV3KCd3ZWVrJylcIlxuICAgICAgICBbZXZlbnRzJF09XCJldmVudHMkXCJcbiAgICAgICAgW3NlbGVjdGVkRGF0ZSRdPVwic2VsZWN0ZWREYXRlJFwiXG4gICAgICAgIFtvcHRpb25zJF09XCJvcHRpb25zJFwiXG4gICAgICAgIChldmVudENsaWNrKT1cIm9uRXZlbnRDbGljaygkZXZlbnQpXCJcbiAgICAgICAgKGNoYW5nZVRvRGF5Vmlldyk9XCJjaGFuZ2VUb0RheVZpZXcoJGV2ZW50KVwiPlxuICAgIDwvd2Vlay12aWV3PlxuXG4gICAgPG1vbnRoLXZpZXdcbiAgICAgICAgKm5nSWY9XCJnZXRTZWxlY3RlZFZpZXcoJ21vbnRoJylcIlxuICAgICAgICBbZXZlbnRzJF09XCJldmVudHMkXCJcbiAgICAgICAgW3NlbGVjdGVkRGF0ZSRdPVwic2VsZWN0ZWREYXRlJFwiXG4gICAgICAgIFtvcHRpb25zJF09XCJvcHRpb25zJFwiXG4gICAgICAgIChldmVudENsaWNrKT1cIm9uRXZlbnRDbGljaygkZXZlbnQpXCJcbiAgICAgICAgKHNldENhbGVuZGFyT2Zmc2V0KT1cInNldENhbGVuZGFyT2Zmc2V0KCRldmVudClcIlxuICAgICAgICAoY2hhbmdlVG9EYXlWaWV3KT1cImNoYW5nZVRvRGF5VmlldygkZXZlbnQpXCI+XG4gICAgPC9tb250aC12aWV3PlxuXG4gICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cImNhbGVuZGFyX19hZGQtYnV0dG9uXCJcbiAgICAgICAgKm5nSWY9XCJvcHRpb25zLmVuYWJsZUFkZEV2ZW50QnV0dG9uXCJcbiAgICAgICAgbWF0LWZhYlxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAoY2xpY2spPVwib25BZGRCdXR0b25DbGljaygpXCI+XG4gICAgICAgIDxtYXQtaWNvbj5hZGQ8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuPC9kaXY+Il19
import { Component, EventEmitter, HostListener, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { format, add, isToday, toDate } from 'date-fns';
import { DateAdapter } from '@angular/material/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { DAY, WEEK, MONTH } from './models/Views';
import { Periods } from './models/Times';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PREVIOUS } from './models/Directions';
import { MatDialog } from '@angular/material/dialog';
import { KeyboardShortcutDialogComponent } from './components/dialogs/keyboard-shortcut-dialog/keyboard-shortcut-dialog.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1jYWxlbmRhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvbmd4LW1hdC1jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFJeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBK0IsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBUW5JLE1BQU0sT0FBTyx1QkFBdUI7SUE4QmhDLFlBQ1ksV0FBOEIsRUFDOUIsTUFBaUI7UUFEakIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVc7UUEzQm5CLGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVB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LENBQUM7Z0JBQ3hCLE1BQU07WUFFVixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU07WUFFVixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLE1BQU07WUFFVixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3hCLE1BQU07WUFFVixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDM0IsTUFBTTtZQUVWO2dCQUNJLE1BQU07U0FDYjtJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7WUF2TUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGszSEFBZ0Q7Z0JBRWhELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN4Qzs7O1lBbEJRLFdBQVc7WUFVWCxTQUFTOzs7dUJBVWIsS0FBSztzQkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBRUwsTUFBTTt5QkFDTixNQUFNOzZCQUNOLE1BQU07NkJBRU4sU0FBUyxTQUFDLGNBQWM7d0JBZ0J4QixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZm9ybWF0LCBhZGQsIGlzVG9kYXksIHRvRGF0ZSB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRNZW51VHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4vbW9kZWxzL0NhbGVuZGFyJztcbmltcG9ydCB7IENhbGVuZGFyT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL0NhbGVuZGFyT3B0aW9ucyc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnLi9tb2RlbHMvQ2FsZW5kYXJFdmVudCc7XG5pbXBvcnQgeyBEQVksIFdFRUssIE1PTlRILCBWaWV3cyB9IGZyb20gJy4vbW9kZWxzL1ZpZXdzJztcbmltcG9ydCB7IFBlcmlvZHMgfSBmcm9tICcuL21vZGVscy9UaW1lcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUFJFVklPVVMgfSBmcm9tICcuL21vZGVscy9EaXJlY3Rpb25zJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBLZXlib2FyZFNob3J0Y3V0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RpYWxvZ3Mva2V5Ym9hcmQtc2hvcnRjdXQtZGlhbG9nL2tleWJvYXJkLXNob3J0Y3V0LWRpYWxvZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1tYXQtY2FsZW5kYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZ3gtbWF0LWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZ3gtbWF0LWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBvcHRpb25zJDogT2JzZXJ2YWJsZTxDYWxlbmRhck9wdGlvbnM+O1xuICAgIEBJbnB1dCgpIGV2ZW50cyQ6IE9ic2VydmFibGU8Q2FsZW5kYXJFdmVudFtdPjtcbiAgICBASW5wdXQoKSBzZWxlY3RlZERhdGUkOiBCZWhhdmlvclN1YmplY3Q8RGF0ZT47XG5cbiAgICBAT3V0cHV0KCkgZGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoKSBldmVudENsaWNrOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgpIGFkZEJ1dHRvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBWaWV3Q2hpbGQoTWF0TWVudVRyaWdnZXIpIGRhdGVQaWNrZXJNZW51OiBNYXRNZW51VHJpZ2dlcjtcblxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9ucyQ6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAgIGRpZmZlcjogYW55O1xuICAgIHZpZXdzOiBWaWV3cztcbiAgICBvcHRpb25zOiBDYWxlbmRhck9wdGlvbnM7XG4gICAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W107XG4gICAgc2VsZWN0ZWRWaWV3OiBWaWV3cztcbiAgICBzZWxlY3RlZERhdGU6IERhdGU7XG4gICAgZW5hYmxlRGF0ZVBpY2tlckJ1dHRvbjogYm9vbGVhbjtcbiAgICBlbmFibGVWaWV3VG9nZ2xlOiBib29sZWFuO1xuICAgIGVuYWJsZUtleWJvYXJkU2hvcnRjdXREaWFsb2c6IGJvb2xlYW47XG4gICAgY2FsZW5kYXIgPSB7fSBhcyBDYWxlbmRhcjtcbiAgICB0b2RheSA9IGZvcm1hdChuZXcgRGF0ZSgpLCAnRUVFRSwgZCBNTU1NJyk7XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGFuZGxlS2V5Ym9hcmRFdmVudHMoZXZlbnQpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcjxEYXRlPixcbiAgICAgICAgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZ1xuICAgICkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLmFkZChcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyQucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoKG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZpZXcgPSBvcHRpb25zLnZpZXc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdENhbGVuZGFyKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKClcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLmFkZChcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzJC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCgoZXZlbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRGF0ZXMoZXZlbnRzKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyQuYWRkKFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUkLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFwKHNlbGVjdGVkRGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gc2VsZWN0ZWREYXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRDYWxlbmRhcigpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0ZSAhPT0gc2VsZWN0ZWREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGluaXRDYWxlbmRhcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVEYXRlUGlja2VyQnV0dG9uID0gdGhpcy5vcHRpb25zLmVuYWJsZURhdGVQaWNrZXJCdXR0b247XG4gICAgICAgICAgICB0aGlzLmVuYWJsZVZpZXdUb2dnbGUgPSB0aGlzLm9wdGlvbnMuZW5hYmxlVmlld1RvZ2dsZTtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlS2V5Ym9hcmRTaG9ydGN1dERpYWxvZyA9IHRoaXMub3B0aW9ucy5lbmFibGVLZXlib2FyZFNob3J0Y3V0RGlhbG9nO1xuICAgICAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5zZXRMb2NhbGUodGhpcy5vcHRpb25zLmxvY2FsZSk7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRlQ2FsZW5kYXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jYWxlbmRhciA9IHsgLy8gQFRPRE86IG5ldyBjbGFzcyBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIG1vbnRoQW5kWWVhcjogZm9ybWF0KHRoaXMuc2VsZWN0ZWREYXRlLCAnTU1NTSB5eXl5JyksXG4gICAgICAgICAgICAgICAgd2Vla251bWJlcjogZm9ybWF0KHRoaXMuc2VsZWN0ZWREYXRlLCAnSScpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGFyc2VEYXRlcyhldmVudHM6IENhbGVuZGFyRXZlbnRbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cy5tYXAoKGV2ZW50OiBDYWxlbmRhckV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgZXZlbnQuZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LmRhdGUpO1xuICAgICAgICAgICAgIGV2ZW50LnN0YXJ0VGltZSA9IG5ldyBEYXRlKGV2ZW50LnN0YXJ0VGltZSk7XG4gICAgICAgICAgICAgZXZlbnQuZW5kVGltZSA9IG5ldyBEYXRlKGV2ZW50LmVuZFRpbWUpO1xuXG4gICAgICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc1RvZGF5KGRhdGU6IERhdGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGlzVG9kYXkoZGF0ZSk7XG4gICAgfVxuXG4gICAgc2V0Q2FsZW5kYXJUb2RheSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSQubmV4dCh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2FsZW5kYXJTZXQoKTtcbiAgICB9XG5cbiAgICBzZXRDYWxlbmRhck9mZnNldChkaXJlY3Rpb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBQZXJpb2RzW3RoaXMuc2VsZWN0ZWRWaWV3XTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGFkZCh0aGlzLnNlbGVjdGVkRGF0ZSwge1xuICAgICAgICAgICAgW29mZnNldF06IGRpcmVjdGlvbiA9PT0gUFJFVklPVVMgPyAtMSA6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUkLm5leHQodGhpcy5zZWxlY3RlZERhdGUpO1xuICAgICAgICB0aGlzLmhhbmRsZUNhbGVuZGFyU2V0KCk7XG4gICAgfVxuXG4gICAgc2V0Q2FsZW5kYXIoZGF0ZTogRGF0ZSk6IHZvaWQge1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUkLm5leHQoZGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNhbGVuZGFyU2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVDYWxlbmRhclNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKCk7XG4gICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWREYXRlKTtcbiAgICB9XG5cbiAgICBvblZpZXdDaGFuZ2UodmlldzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWaWV3ID0gdmlldztcbiAgICB9XG5cbiAgICBjaGFuZ2VUb0RheVZpZXcoZGF0ZTogRGF0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmlldyA9IERBWTtcbiAgICAgICAgdGhpcy5zZXRDYWxlbmRhcihkYXRlKTtcbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZFZpZXcodmlldzogVmlld3MpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWaWV3ID09PSB2aWV3O1xuICAgIH1cblxuICAgIG9uRXZlbnRDbGljayhldmVudDogQ2FsZW5kYXJFdmVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmV2ZW50Q2xpY2suZW1pdChldmVudCk7XG4gICAgfVxuXG4gICAgb25BZGRCdXR0b25DbGljaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRCdXR0b25DbGljay5lbWl0KCk7XG4gICAgfVxuXG4gICAgb25EYXRlUGlja2VyQ2hhbmdlKGRhdGU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnNldENhbGVuZGFyKHRvRGF0ZShkYXRlKSk7XG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlck1lbnUuY2xvc2VNZW51KCk7XG4gICAgfVxuXG4gICAgc2hvd0tleWJvYXJkU2hvcnRjdXREaWFsb2coKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oS2V5Ym9hcmRTaG9ydGN1dERpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgICAgICAgZGF0YTogdGhpcy5vcHRpb25zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUtleWJvYXJkRXZlbnRzKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmlldyA9IERBWTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZpZXcgPSBXRUVLO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmlldyA9IE1PTlRIO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhbGVuZGFyVG9kYXkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbic6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRCdXR0b25DbGljay5lbWl0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbn1cbiJdfQ==
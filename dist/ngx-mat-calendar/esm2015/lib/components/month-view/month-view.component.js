import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { add, eachWeekOfInterval, endOfMonth, getWeek, isSameMonth, startOfMonth, sub } from 'date-fns';
import { fromEvent, interval, Subject } from 'rxjs';
import { takeUntil, tap, throttle } from 'rxjs/operators';
import { CalendarDay } from '../../models/CalendarDay';
import { NEXT, PREVIOUS } from '../../models/Directions';
import { daysOfWeek } from '../../models/Times';
import { FormattingService } from '../../services/formatting.service';
import { BaseViewComponent } from '../shared/base-view/base-view.component';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvY29tcG9uZW50cy9tb250aC12aWV3L21vbnRoLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFDbkMsWUFBWSxFQUFxQixNQUFNLEVBQWEsU0FBUyxFQUNoRSxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDeEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQU81RSxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsaUJBQWlCO0lBcUJyRCxZQUNJLGlCQUFvQztRQUVwQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQXZCbkIsc0JBQWlCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkUsY0FBUyxHQUFHLEVBQWUsQ0FBQztR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UUFDL0QsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHlCQUF5QixDQUFDO1FBQzNELElBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNuRCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDO0lBRUQscUJBQXFCO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVELHdCQUF3Qjs7UUFDcEIsTUFBTSxjQUFjLFNBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLDBDQUFFLHFCQUFxQixHQUFHLE1BQU0sQ0FBQztRQUN6RyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7WUF2S0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0Qix5cUdBQTBDOzthQUU3Qzs7O1lBUFEsaUJBQWlCOzs7Z0NBU3JCLE1BQU07aUNBZU4sU0FBUyxTQUFDLG9CQUFvQixFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO3VCQUNoRSxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlcixcbiAgICBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhZGQsIGVhY2hXZWVrT2ZJbnRlcnZhbCwgZW5kT2ZNb250aCwgZ2V0V2VlaywgaXNTYW1lTW9udGgsIHN0YXJ0T2ZNb250aCwgc3ViIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBpbnRlcnZhbCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsLCB0YXAsIHRocm90dGxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTW9udGhWaWV3IH0gZnJvbSAnLi4vLi4vbW9kZWxzL0NhbGVuZGFyJztcbmltcG9ydCB7IENhbGVuZGFyRGF5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL0NhbGVuZGFyRGF5JztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvQ2FsZW5kYXJFdmVudCc7XG5pbXBvcnQgeyBORVhULCBQUkVWSU9VUyB9IGZyb20gJy4uLy4uL21vZGVscy9EaXJlY3Rpb25zJztcbmltcG9ydCB7IGRheXNPZldlZWsgfSBmcm9tICcuLi8uLi9tb2RlbHMvVGltZXMnO1xuaW1wb3J0IHsgRm9ybWF0dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mb3JtYXR0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvYmFzZS12aWV3L2Jhc2Utdmlldy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21vbnRoLXZpZXcnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb250aC12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9tb250aC12aWV3LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3Q29tcG9uZW50IGV4dGVuZHMgQmFzZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQE91dHB1dCgpIHNldENhbGVuZGFyT2Zmc2V0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIG1vbnRoVmlldyA9IHt9IGFzIE1vbnRoVmlldztcbiAgICBkYXlzT2ZXZWVrID0gZGF5c09mV2VlaztcbiAgICBkYXlCbG9ja0hlaWdodCA9IDA7XG4gICAgd2Vla051bWJlcnM6IG51bWJlcltdID0gW107XG4gICAgc2hvd0hpZGRlbkV2ZW50cyA9IGZhbHNlO1xuICAgIGhpZGRlbkV2ZW50c1RyaWdnZXJPcmlnaW46IGFueTtcbiAgICBoaWRkZW5FdmVudHNEYXk6IENhbGVuZGFyRGF5O1xuICAgIG1heEV2ZW50c1Zpc2libGUgPSAwO1xuICAgIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuXG4gICAgc2Nyb2xsTGlzdGVuZXIgPSBuZXcgU3ViamVjdCgpO1xuICAgIHNjcm9sbExpc3RlbmVyJCA9IHRoaXMuc2Nyb2xsTGlzdGVuZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBAVmlld0NoaWxkKCdjYWxlbmRhckRheUVsZW1lbnQnLCB7cmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlfSkgY2FsZW5kYXJEYXlFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKSBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVNYXhFdmVudHNQZXJEYXkoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZm9ybWF0dGluZ1NlcnZpY2U6IEZvcm1hdHRpbmdTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGZvcm1hdHRpbmdTZXJ2aWNlKTtcblxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAnd2hlZWwnKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuc2Nyb2xsTGlzdGVuZXIkKSxcbiAgICAgICAgICAgICAgICB0aHJvdHRsZShlID0+IGludGVydmFsKDEwMDApKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZTogYW55KSA9PiB0aGlzLmhhbmRsZVNjcm9sbChlKSk7XG5cbiAgICAgICAgdGhpcy5oaWRkZW5FdmVudHNEYXkgPSBuZXcgQ2FsZW5kYXJEYXkoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVZpZXcoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ub0NhbGVuZGFyVmlld3BvcnRDaGFuZ2VzKCk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zJC5hZGQoXG4gICAgICAgICAgICB0aGlzLmV2ZW50cyQucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoZXZlbnRzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVWaWV3KCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKClcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLmFkZChcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlJC5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VIaWRkZW5FdmVudHMoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKS5zdWJzY3JpYmUoKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGxpc3RlblRvQ2FsZW5kYXJWaWV3cG9ydENoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlciggbGlzdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZU1heEV2ZW50c1BlckRheSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5jYWxlbmRhckRheUVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVWaWV3KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5RGF5cyA9IHRoaXMuZ2VuZXJhdGVEYXlzKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlTW9udGhWaWV3KGVtcHR5RGF5cyk7XG4gICAgICAgICAgICB0aGlzLmdldFdlZWtOdW1iZXJzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlTWF4RXZlbnRzUGVyRGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRXZWVrTnVtYmVycygpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgd2Vla3NPZk1vbnRoID0gZWFjaFdlZWtPZkludGVydmFsKHtcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydE9mTW9udGgodGhpcy5zZWxlY3RlZERhdGUpLFxuICAgICAgICAgICAgZW5kOiBlbmRPZk1vbnRoKHRoaXMuc2VsZWN0ZWREYXRlKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLndlZWtOdW1iZXJzID0gW107XG4gICAgICAgIHdlZWtzT2ZNb250aC5mb3JFYWNoKHdlZWsgPT4ge1xuICAgICAgICAgICAgdGhpcy53ZWVrTnVtYmVycy5wdXNoKGdldFdlZWsod2VlaywgeyB3ZWVrU3RhcnRzT246IDEgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZU1vbnRoVmlldyhlbXB0eURheXM6IENhbGVuZGFyRGF5W10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgcG9wdWxhdGVkRGF5czogQ2FsZW5kYXJEYXlbXSA9IGVtcHR5RGF5cztcblxuICAgICAgICBwb3B1bGF0ZWREYXlzLmZvckVhY2goZGF5ID0+IHtcbiAgICAgICAgICAgIGRheS5ldmVudHMgPSB0aGlzLmV2ZW50cy5maWx0ZXIoKGV2ZW50OiBDYWxlbmRhckV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNTYW1lRGF5KGRheS5kYXRlLCBldmVudC5zdGFydFRpbWUsIGV2ZW50LmVuZFRpbWUpO1xuICAgICAgICAgICAgfSkubWFwKChldmVudDogQ2FsZW5kYXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBvcHVsYXRlRXZlbnRzKGV2ZW50LCBkYXkpO1xuICAgICAgICAgICAgfSkuc29ydCgoYTogQ2FsZW5kYXJFdmVudCwgYjogQ2FsZW5kYXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNvcnRCeVRpbWUoYSwgYik7XG4gICAgICAgICAgICB9KS5zb3J0KGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zb3J0QnlBbGxEYXkoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRheSA9IHRoaXMuY3JlYXRlRXZlbnRHcm91cHMoZGF5KTtcbiAgICAgICAgICAgIGRheS5ldmVudENvdW50ID0gZGF5LmV2ZW50cy5sZW5ndGg7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9udGhWaWV3LmRheXMgPSBwb3B1bGF0ZWREYXlzO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGF5cygpOiBDYWxlbmRhckRheVtdIHtcbiAgICAgICAgY29uc3QgZGF5T2ZXZWVrID0gYWRkKHN0YXJ0T2ZNb250aCh0aGlzLnNlbGVjdGVkRGF0ZSksIHsgZGF5czogNyB9KS5nZXREYXkoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRNb250aFN0YXJ0ID0gc3ViKHN0YXJ0T2ZNb250aCh0aGlzLnNlbGVjdGVkRGF0ZSksIHsgZGF5czogZGF5T2ZXZWVrIC0gMSB9KTtcbiAgICAgICAgY29uc3QgZGF5cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzU7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShzZWxlY3RlZE1vbnRoU3RhcnQpO1xuICAgICAgICAgICAgZGF0ZSA9IGFkZChkYXRlLCB7IGRheXM6IGkgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRheTogQ2FsZW5kYXJEYXkgPSB7XG4gICAgICAgICAgICAgICAgZGF0ZSxcbiAgICAgICAgICAgICAgICBldmVudEdyb3VwczogW10sXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgICAgICAgICBldmVudENvdW50OiAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkYXlzLnB1c2goZGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuICAgIGlzQ3VycmVudE1vbnRoKGRhdGU6IERhdGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGlzU2FtZU1vbnRoKGRhdGUsIHRoaXMuc2VsZWN0ZWREYXRlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVTY3JvbGwoZTogV2hlZWxFdmVudCk6IHZvaWQge1xuICAgICAgICBlLmRlbHRhWSA+IDAgPyB0aGlzLnNldENhbGVuZGFyT2Zmc2V0LmVtaXQoTkVYVCkgOiB0aGlzLnNldENhbGVuZGFyT2Zmc2V0LmVtaXQoUFJFVklPVVMpO1xuICAgIH1cblxuICAgIHRvZ2dsZUhpZGRlbkV2ZW50cyhoaWRkZW5FdmVudHNUcmlnZ2VyT3JpZ2luOiBhbnksIGRheTogQ2FsZW5kYXJEYXkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWRkZW5FdmVudHNUcmlnZ2VyT3JpZ2luID0gaGlkZGVuRXZlbnRzVHJpZ2dlck9yaWdpbjtcbiAgICAgICAgdGhpcy5oaWRkZW5FdmVudHNEYXkgPSBkYXk7XG4gICAgICAgIHRoaXMuc2hvd0hpZGRlbkV2ZW50cyA9ICF0aGlzLnNob3dIaWRkZW5FdmVudHM7XG4gICAgfVxuXG4gICAgY2xvc2VIaWRkZW5FdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2hvd0hpZGRlbkV2ZW50cyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldEhpZGRlbkV2ZW50c0hlaWdodCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKHRoaXMuaGlkZGVuRXZlbnRzRGF5LmV2ZW50Q291bnQgKiAzMCkgKyA4NTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVNYXhFdmVudHNQZXJEYXkoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRheUJsb2NrSGVpZ2h0ID0gdGhpcy5jYWxlbmRhckRheUVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXT8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB0aGlzLm1heEV2ZW50c1Zpc2libGUgPSBNYXRoLmZsb29yKChkYXlCbG9ja0hlaWdodCAtIDI1KSAvIDMwKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zY3JvbGxMaXN0ZW5lci5uZXh0KCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbn1cbiJdfQ==
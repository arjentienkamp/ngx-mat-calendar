import { Component, EventEmitter, Input, Output } from '@angular/core';
import { areIntervalsOverlapping, endOfDay, getHours, getMinutes, intervalToDuration, isSameDay, startOfDay } from 'date-fns';
import { CalendarEvent, CalendarEventGrid } from '../../../models/CalendarEvent';
import { v4 as uuidv4 } from 'uuid';
import { hoursOfDay } from '../../../models/Times';
import { FormattingService } from '../../../services/formatting.service';
import { interval, Subscription } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
export class BaseViewComponent {
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
            const uuid = uuidv4();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1tYXQtY2FsZW5kYXIvc3JjL2xpYi9jb21wb25lbnRzL3NoYXJlZC9iYXNlLXZpZXcvYmFzZS12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUU5SCxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakYsT0FBTyxFQUFFLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzFELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUtsRCxNQUFNLE9BQWdCLGlCQUFpQjtJQWlCbkMsWUFDYyxpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWJ4QyxlQUFVLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0Qsb0JBQWUsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6RCxtQkFBYyxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JELG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRzFCLGVBQVUsR0FBRyxV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TSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFUyxTQUFTLENBQUMsSUFBVSxFQUFFLFNBQWUsRUFBRSxPQUFhO1FBQzFELE9BQU8sU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVELFdBQVc7UUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JDLENBQUM7OztZQTVOSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLEVBQUU7YUFDZjs7O1lBTlEsaUJBQWlCOzs7dUJBUXJCLEtBQUs7NEJBQ0wsS0FBSztzQkFDTCxLQUFLO3lCQUVMLE1BQU07OEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYXJlSW50ZXJ2YWxzT3ZlcmxhcHBpbmcsIGVuZE9mRGF5LCBnZXRIb3VycywgZ2V0TWludXRlcywgaW50ZXJ2YWxUb0R1cmF0aW9uLCBpc1NhbWVEYXksIHN0YXJ0T2ZEYXkgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBDYWxlbmRhckRheSB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9DYWxlbmRhckRheSc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50LCBDYWxlbmRhckV2ZW50R3JpZCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9DYWxlbmRhckV2ZW50JztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0NhbGVuZGFyT3B0aW9ucyc7XG5pbXBvcnQgeyBob3Vyc09mRGF5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1RpbWVzJztcbmltcG9ydCB7IEZvcm1hdHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IGludGVydmFsLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb3BlcmF0b3JzL3RhcCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBvcHRpb25zJDogT2JzZXJ2YWJsZTxDYWxlbmRhck9wdGlvbnM+O1xuICAgIEBJbnB1dCgpIHNlbGVjdGVkRGF0ZSQ6IE9ic2VydmFibGU8RGF0ZT47XG4gICAgQElucHV0KCkgZXZlbnRzJDogT2JzZXJ2YWJsZTxDYWxlbmRhckV2ZW50W10+O1xuXG4gICAgQE91dHB1dCgpIGV2ZW50Q2xpY2s6IEV2ZW50RW1pdHRlcjxDYWxlbmRhckV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCkgY2hhbmdlVG9EYXlWaWV3OiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9ucyQ6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICBwdWJsaWMgbWFya2VyUG9zaXRpb24gPSAwO1xuXG4gICAgb3B0aW9uczogQ2FsZW5kYXJPcHRpb25zO1xuICAgIGhvdXJzT2ZEYXkgPSBob3Vyc09mRGF5O1xuICAgIHBpeGVsc1BlckhvdXIgPSAwO1xuICAgIHNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZXZlbnRzOiBDYWxlbmRhckV2ZW50W10gPSBbXTtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGZvcm1hdHRpbmdTZXJ2aWNlOiBGb3JtYXR0aW5nU2VydmljZVxuICAgICkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLmFkZChcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyQucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoKG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJQb3NpdGlvbiA9IHRoaXMuY2FsY3VsYXRlTWFya2VyUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waXhlbHNQZXJIb3VyID0gdGhpcy5vcHRpb25zLmdldFBpeGVsc1Blck1pbnV0ZSAqIDYwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnN1YnNjcmliZSgpXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zJC5hZGQoXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSQucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoc2VsZWN0ZWREYXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBzZWxlY3RlZERhdGU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKClcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMkLmFkZChcbiAgICAgICAgICAgIGludGVydmFsKDYwMDAwKS5waXBlKFxuICAgICAgICAgICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFya2VyUG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZU1hcmtlclBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRXZlbnRHcm91cHMoZGF5OiBDYWxlbmRhckRheSk6IENhbGVuZGFyRGF5IHtcbiAgICAgICAgZGF5LmV2ZW50cy5tYXAoKGV2ZW50OiBDYWxlbmRhckV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1dWlkID0gdXVpZHY0KCk7XG4gICAgICAgICAgICBsZXQgZXZlbnRHcm91cDogQ2FsZW5kYXJFdmVudFtdID0gW107XG5cbiAgICAgICAgICAgIGlmIChldmVudC5ncmlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnRzTm90QWxsRGF5ID0gZGF5LmV2ZW50cy5maWx0ZXIoeCA9PiAheC5hbGxEYXkpO1xuICAgICAgICAgICAgICAgIGV2ZW50R3JvdXAgPSB0aGlzLmdldE92ZXJsYXBwaW5nRXZlbnRzKGV2ZW50LCBldmVudHNOb3RBbGxEYXksIGV2ZW50LmdyaWQuZXZlbnRHcm91cHMpO1xuXG4gICAgICAgICAgICAgICAgZXZlbnRHcm91cC5tYXAoKG92ZXJsYXBFdmVudDogQ2FsZW5kYXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmxhcEV2ZW50LmdyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXBFdmVudC5ncmlkLmV2ZW50R3JvdXBzLnB1c2godXVpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGFwRXZlbnQuZ3JpZC5ldmVudHNJbkdyb3VwID0gZXZlbnRHcm91cC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRheS5ldmVudEdyb3Vwcy5pbmNsdWRlcyh1dWlkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF5LmV2ZW50R3JvdXBzLnB1c2godXVpZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRFdmVudFNpemVzKGRheSk7XG5cbiAgICAgICAgcmV0dXJuIGRheTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcG9wdWxhdGVFdmVudHMoZXZlbnQ6IENhbGVuZGFyRXZlbnQsIGRheTogQ2FsZW5kYXJEYXkpOiBDYWxlbmRhckV2ZW50IHtcbiAgICAgICAgY29uc3QgcG9wdWxhdGVkRXZlbnQgPSBuZXcgQ2FsZW5kYXJFdmVudCh7XG4gICAgICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgICAgIGdyaWQ6IHRoaXMuY2FsY3VsYXRlUGl4ZWxzT2Zmc2V0Rm9yRXZlbnQoZXZlbnQsIGRheSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlZEV2ZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0T3ZlcmxhcHBpbmdFdmVudHMoZXZlbnQ6IENhbGVuZGFyRXZlbnQsIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdLCBldmVudEdyb3Vwczogc3RyaW5nW10pOiBDYWxlbmRhckV2ZW50W10ge1xuICAgICAgICByZXR1cm4gZXZlbnRzLmZpbHRlcigoY29tcGFyZUV2ZW50OiBDYWxlbmRhckV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBldmVudHNEb092ZXJsYXAgPSBhcmVJbnRlcnZhbHNPdmVybGFwcGluZyhcbiAgICAgICAgICAgICAgICB7IHN0YXJ0OiBldmVudC5zdGFydFRpbWUsIGVuZDogZXZlbnQuZW5kVGltZSB9LFxuICAgICAgICAgICAgICAgIHsgc3RhcnQ6IGNvbXBhcmVFdmVudC5zdGFydFRpbWUsIGVuZDogY29tcGFyZUV2ZW50LmVuZFRpbWUgfSxcbiAgICAgICAgICAgICAgICB7IGluY2x1c2l2ZTogdHJ1ZSB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBsZXQgaXNBbHJlYWR5SW5FdmVudEdyb3VwID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoY29tcGFyZUV2ZW50LmdyaWQpIHtcbiAgICAgICAgICAgICAgICBpc0FscmVhZHlJbkV2ZW50R3JvdXAgPSBjb21wYXJlRXZlbnQuZ3JpZC5ldmVudEdyb3Vwcy5zb21lKChldmVudEdyb3VwOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50R3JvdXBzLmluY2x1ZGVzKGV2ZW50R3JvdXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnRzRG9PdmVybGFwICYmICFpc0FscmVhZHlJbkV2ZW50R3JvdXA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RXZlbnRTaXplcyhkYXk6IENhbGVuZGFyRGF5KTogdm9pZCB7XG4gICAgICAgIGRheS5ldmVudEdyb3Vwcy5mb3JFYWNoKGV2ZW50R3JvdXAgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRHcm91cEV2ZW50cyA9IGRheS5ldmVudHMuZmlsdGVyKChldmVudDogQ2FsZW5kYXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5ncmlkPy5ldmVudEdyb3Vwcy5pbmNsdWRlcyhldmVudEdyb3VwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAgICAgZXZlbnRHcm91cEV2ZW50cy5mb3JFYWNoKChldmVudDogQ2FsZW5kYXJFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5ncmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmdyaWQud2lkdGggPSAxMDAgLyAoZXZlbnRHcm91cEV2ZW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5ncmlkLm9mZnNldExlZnQgPSBldmVudC5ncmlkLndpZHRoICogaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgYWxyZWFkeSBoYXMgYSB3aWR0aC9vZmZzZXRMZWZ0IHRvIGRldGVybWluZSBpZiBpdCdzIGluIGV2ZW50Z3JvdXAgQSBvciBCXG5cbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlUGl4ZWxzT2Zmc2V0Rm9yRXZlbnQoZXZlbnQ6IENhbGVuZGFyRXZlbnQsIGRheTogQ2FsZW5kYXJEYXkpOiBDYWxlbmRhckV2ZW50R3JpZCB7XG4gICAgICAgIGxldCBncmlkID0gbmV3IENhbGVuZGFyRXZlbnRHcmlkKCk7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gZXZlbnQuc3RhcnRUaW1lO1xuICAgICAgICBjb25zdCBlbmRUaW1lID0gaXNTYW1lRGF5KGV2ZW50LnN0YXJ0VGltZSwgZXZlbnQuZW5kVGltZSkgP1xuICAgICAgICAgICAgZXZlbnQuZW5kVGltZSA6XG4gICAgICAgICAgICBlbmRPZkRheShldmVudC5zdGFydFRpbWUpO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50RHVyYXRpb25Gcm9tU3RhcnRUaW1lID0gaW50ZXJ2YWxUb0R1cmF0aW9uKHtcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydFRpbWUsXG4gICAgICAgICAgICBlbmQ6IGVuZFRpbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZXZlbnREdXJhdGlvbkZyb21NaWRuaWdodCA9IGludGVydmFsVG9EdXJhdGlvbih7XG4gICAgICAgICAgICBzdGFydDogc3RhcnRPZkRheShkYXkuZGF0ZSksXG4gICAgICAgICAgICBlbmQ6IGV2ZW50LmVuZFRpbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXZlbnREdXJhdGlvbkZyb21TdGFydFRpbWUuaG91cnMgPSBldmVudER1cmF0aW9uRnJvbVN0YXJ0VGltZS5ob3VycyB8fCAwO1xuICAgICAgICBldmVudER1cmF0aW9uRnJvbVN0YXJ0VGltZS5taW51dGVzID0gZXZlbnREdXJhdGlvbkZyb21TdGFydFRpbWUubWludXRlcyB8fCAwO1xuICAgICAgICBldmVudER1cmF0aW9uRnJvbU1pZG5pZ2h0LmhvdXJzID0gZXZlbnREdXJhdGlvbkZyb21NaWRuaWdodC5ob3VycyB8fCAwO1xuICAgICAgICBldmVudER1cmF0aW9uRnJvbU1pZG5pZ2h0Lm1pbnV0ZXMgPSBldmVudER1cmF0aW9uRnJvbU1pZG5pZ2h0Lm1pbnV0ZXMgfHwgMDtcblxuICAgICAgICBjb25zdCBvZmZzZXRJbk1pbnV0ZXMgPSAhaXNTYW1lRGF5KGV2ZW50LnN0YXJ0VGltZSwgZXZlbnQuZW5kVGltZSkgJiYgaXNTYW1lRGF5KGV2ZW50LmVuZFRpbWUsIGRheS5kYXRlKSA/XG4gICAgICAgICAgICAwIDogTWF0aC5hYnMoZ2V0SG91cnMoc3RhcnRUaW1lKSkgKiA2MCArIGdldE1pbnV0ZXMoc3RhcnRUaW1lKTtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbk9mZnNldCA9ICFpc1NhbWVEYXkoZXZlbnQuc3RhcnRUaW1lLCBldmVudC5lbmRUaW1lKSAmJiBpc1NhbWVEYXkoZXZlbnQuZW5kVGltZSwgZGF5LmRhdGUpID9cbiAgICAgICAgICAgIGV2ZW50RHVyYXRpb25Gcm9tTWlkbmlnaHQuaG91cnMgKiA2MCArIGV2ZW50RHVyYXRpb25Gcm9tTWlkbmlnaHQubWludXRlcyA6XG4gICAgICAgICAgICBldmVudER1cmF0aW9uRnJvbVN0YXJ0VGltZS5ob3VycyAqIDYwICsgZXZlbnREdXJhdGlvbkZyb21TdGFydFRpbWUubWludXRlcztcblxuICAgICAgICBncmlkID0ge1xuICAgICAgICAgICAgLi4uZ3JpZCxcbiAgICAgICAgICAgIG9mZnNldFRvcDogb2Zmc2V0SW5NaW51dGVzICogdGhpcy5vcHRpb25zLmdldFBpeGVsc1Blck1pbnV0ZSxcbiAgICAgICAgICAgIGR1cmF0aW9uT2Zmc2V0OiBkdXJhdGlvbk9mZnNldCAqIHRoaXMub3B0aW9ucy5nZXRQaXhlbHNQZXJNaW51dGVcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2VsbEhlaWdodCh0aW1lOiBhbnkpOiBudW1iZXIge1xuICAgICAgICBpZiAodGltZS5pc0VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIDIwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGl4ZWxzUGVySG91cjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2FsY3VsYXRlTWFya2VyUG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gKGdldEhvdXJzKG5vdykgKiA2MCArIGdldE1pbnV0ZXMobm93KSkgKiB0aGlzLm9wdGlvbnMuZ2V0UGl4ZWxzUGVyTWludXRlO1xuXG4gICAgICAgIHJldHVybiBvZmZzZXRUb3A7XG4gICAgfVxuXG4gICAgcHVibGljIGlzVG9kYXkoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0aW5nU2VydmljZS5pc1RvZGF5KGRhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXlOYW1lKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0aW5nU2VydmljZS5nZXREYXlOYW1lKGRhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXlOdW1iZXIoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRpbmdTZXJ2aWNlLmdldERheU51bWJlcihkYXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VGltZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGluZ1NlcnZpY2UuZ2V0VGltZShkYXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25FdmVudENsaWNrKGV2ZW50OiBDYWxlbmRhckV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXZlbnRDbGljay5lbWl0KGV2ZW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVUb0RheVZpZXcoZGF0ZTogRGF0ZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYW5nZVRvRGF5Vmlldy5lbWl0KGRhdGUpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzb3J0QnlUaW1lKGE6IENhbGVuZGFyRXZlbnQsIGI6IENhbGVuZGFyRXZlbnQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gYS5zdGFydFRpbWUuZ2V0VGltZSgpIC0gYi5zdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzb3J0QnlBbGxEYXkoZXZlbnQ6IENhbGVuZGFyRXZlbnQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gZXZlbnQuYWxsRGF5ID8gLTEgOiAxO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpc1NhbWVEYXkoZGF0ZTogRGF0ZSwgc3RhcnRUaW1lOiBEYXRlLCBlbmRUaW1lOiBEYXRlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpc1NhbWVEYXkobmV3IERhdGUoZGF0ZSksIG5ldyBEYXRlKHN0YXJ0VGltZSkpIHx8IGlzU2FtZURheShuZXcgRGF0ZShkYXRlKSwgbmV3IERhdGUoZW5kVGltZSkpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG4iXX0=
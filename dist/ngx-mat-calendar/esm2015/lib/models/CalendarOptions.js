import { EventRenderDayComponent } from '../components/shared/event-render/event-render-day/event-render-day.component';
import { EventRenderMonthComponent } from '../components/shared/event-render/event-render-month/event-render-month.component';
import { EventRenderWeekComponent } from '../components/shared/event-render/event-render-week/event-render-week.component';
import { CalendarEvent } from './CalendarEvent';
import { MONTH } from './Views';
export class CalendarOptions {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXJPcHRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL21vZGVscy9DYWxlbmRhck9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDeEgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFDOUgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDM0gsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxLQUFLLEVBQVMsTUFBTSxTQUFTLENBQUM7QUFFdkMsTUFBTSxPQUFPLGVBQWU7SUFtQnhCLFlBQVksSUFBK0I7UUFsQjNDLG9CQUFlLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIsZUFBVSxHQUFHLE9BQU8sQ0FBQztRQUNyQixvQkFBZSxHQUFHO1lBQ2QsR0FBRyxFQUFFLHVCQUF1QjtZQUM1QixJQUFJLEVBQUUsd0JBQXdCO1lBQzlCLEtBQUssRUFBRSx5QkFBeUI7U0FDbkMsQ0FBQztRQUNGLHNCQUFpQixHQUFHLE9BQU8sYUFBYSxDQUFDO1FBQ3pDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsMkJBQXNCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsaUNBQTRCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQUksR0FBVSxLQUFLLENBQUM7UUFHaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQUksa0JBQWtCO1FBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7U0FDbkM7UUFFRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDaEMsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRSZW5kZXJEYXlDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9ldmVudC1yZW5kZXIvZXZlbnQtcmVuZGVyLWRheS9ldmVudC1yZW5kZXItZGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdmVudFJlbmRlck1vbnRoQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvZXZlbnQtcmVuZGVyL2V2ZW50LXJlbmRlci1tb250aC9ldmVudC1yZW5kZXItbW9udGguY29tcG9uZW50JztcbmltcG9ydCB7IEV2ZW50UmVuZGVyV2Vla0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL2V2ZW50LXJlbmRlci9ldmVudC1yZW5kZXItd2Vlay9ldmVudC1yZW5kZXItd2Vlay5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJy4vQ2FsZW5kYXJFdmVudCc7XG5pbXBvcnQgeyBNT05USCwgVmlld3MgfSBmcm9tICcuL1ZpZXdzJztcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyT3B0aW9ucyB7XG4gICAgcGl4ZWxzUGVyTWludXRlID0gMS4zO1xuICAgIGRhdGVGb3JtYXQgPSAnREQtTU0tWVlZWSc7XG4gICAgdGltZUZvcm1hdCA9ICdISDptbSc7XG4gICAgcmVuZGVyQ29tcG9uZW50ID0ge1xuICAgICAgICBkYXk6IEV2ZW50UmVuZGVyRGF5Q29tcG9uZW50LFxuICAgICAgICB3ZWVrOiBFdmVudFJlbmRlcldlZWtDb21wb25lbnQsXG4gICAgICAgIG1vbnRoOiBFdmVudFJlbmRlck1vbnRoQ29tcG9uZW50XG4gICAgfTtcbiAgICBjYWxlbmRhckV2ZW50VHlwZSA9IHR5cGVvZiBDYWxlbmRhckV2ZW50O1xuICAgIGp1bXBUb1NweSA9IHRydWU7XG4gICAgZW5hYmxlRGF0ZVBpY2tlckJ1dHRvbiA9IHRydWU7XG4gICAgZW5hYmxlQWRkRXZlbnRCdXR0b24gPSB0cnVlO1xuICAgIGVuYWJsZVZpZXdUb2dnbGUgPSB0cnVlO1xuICAgIGVuYWJsZUtleWJvYXJkU2hvcnRjdXREaWFsb2cgPSB0cnVlO1xuICAgIGxvY2FsZSA9ICdubCc7XG4gICAgY29tcGFjdCA9IGZhbHNlO1xuICAgIHZpZXc6IFZpZXdzID0gTU9OVEg7XG5cbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxDYWxlbmRhck9wdGlvbnM+KSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XG4gICAgfVxuXG4gICAgZ2V0IGdldFBpeGVsc1Blck1pbnV0ZSgpOiBudW1iZXIge1xuICAgICAgICBpZiAodGhpcy5jb21wYWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waXhlbHNQZXJNaW51dGUgLyAyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGl4ZWxzUGVyTWludXRlO1xuICAgIH1cbn1cbiJdfQ==
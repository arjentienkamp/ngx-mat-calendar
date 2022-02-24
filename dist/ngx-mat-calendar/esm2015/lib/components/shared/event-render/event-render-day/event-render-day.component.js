import { Component, Input } from '@angular/core';
import { isSameDay } from 'date-fns';
import { FormattingService } from '../../../../services/formatting.service';
export class EventRenderDayComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtcmVuZGVyLWRheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvY29tcG9uZW50cy9zaGFyZWQvZXZlbnQtcmVuZGVyL2V2ZW50LXJlbmRlci1kYXkvZXZlbnQtcmVuZGVyLWRheS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQU81RSxNQUFNLE9BQU8sdUJBQXVCO0lBU2hDLFlBQ1csaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDNUMsQ0FBQztJQUVKLFFBQVE7UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUF2QkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHF5QkFBZ0Q7O2FBRW5EOzs7WUFOUSxpQkFBaUI7OztvQkFRckIsS0FBSzttQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL0NhbGVuZGFyRXZlbnQnO1xuaW1wb3J0IHsgRm9ybWF0dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0aW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2ZW50LXJlbmRlci1kYXknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ldmVudC1yZW5kZXItZGF5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9ldmVudC1yZW5kZXItZGF5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRSZW5kZXJEYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICAgIEBJbnB1dCgpIGRhdGU6IERhdGU7XG5cbiAgICBzdGFydFRpbWU6IHN0cmluZztcbiAgICBlbmRUaW1lOiBzdHJpbmc7XG4gICAgaXNTYW1lRGF5OiBib29sZWFuO1xuICAgIGVuZHNUb2RheTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZm9ybWF0dGluZ1NlcnZpY2U6IEZvcm1hdHRpbmdTZXJ2aWNlLFxuICAgICkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMuZm9ybWF0dGluZ1NlcnZpY2UuZ2V0VGltZSh0aGlzLmV2ZW50LnN0YXJ0VGltZSk7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IHRoaXMuZm9ybWF0dGluZ1NlcnZpY2UuZ2V0VGltZSh0aGlzLmV2ZW50LmVuZFRpbWUpO1xuICAgICAgICB0aGlzLmlzU2FtZURheSA9IGlzU2FtZURheSh0aGlzLmV2ZW50LnN0YXJ0VGltZSwgdGhpcy5ldmVudC5lbmRUaW1lKTtcbiAgICAgICAgdGhpcy5lbmRzVG9kYXkgPSBpc1NhbWVEYXkodGhpcy5kYXRlLCB0aGlzLmV2ZW50LmVuZFRpbWUpO1xuICAgIH1cbn1cbiJdfQ==
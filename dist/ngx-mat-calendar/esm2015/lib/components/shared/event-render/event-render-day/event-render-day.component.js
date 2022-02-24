import { Component, Input } from '@angular/core';
import { isSameDay } from 'date-fns';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatting.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/icon";
function EventRenderDayComponent_div_0_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "place");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.event.location);
} }
function EventRenderDayComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.event.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.startTime, " - ", ctx_r1.endTime, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.event.location);
} }
function EventRenderDayComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "p", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.event.title);
} }
function EventRenderDayComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} }
function EventRenderDayComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, EventRenderDayComponent_div_0_div_1_Template, 8, 4, "div", 2);
    i0.ɵɵtemplate(2, EventRenderDayComponent_div_0_div_2_Template, 4, 1, "div", 2);
    i0.ɵɵtemplate(3, EventRenderDayComponent_div_0_div_3_Template, 1, 0, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("background-color", ctx_r0.event.color);
    i0.ɵɵclassProp("all-day", ctx_r0.event.allDay);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.event.allDay);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.event.allDay);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isSameDay && !ctx_r0.endsToday);
} }
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
EventRenderDayComponent.ɵfac = function EventRenderDayComponent_Factory(t) { return new (t || EventRenderDayComponent)(i0.ɵɵdirectiveInject(i1.FormattingService)); };
EventRenderDayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EventRenderDayComponent, selectors: [["event-render-day"]], inputs: { event: "event", date: "date" }, decls: 1, vars: 1, consts: [["class", "event", 3, "all-day", "backgroundColor", 4, "ngIf"], [1, "event"], [4, "ngIf"], ["class", "event__multiday", 4, "ngIf"], [1, "event__header"], [1, "event__metadata"], ["class", "event__location", 4, "ngIf"], [1, "event__location"], [1, "title"], [1, "event__multiday"]], template: function EventRenderDayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EventRenderDayComponent_div_0_Template, 4, 7, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.event);
    } }, directives: [i2.NgIf, i3.MatIcon], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.event[_ngcontent-%COMP%], event-render[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.event[_ngcontent-%COMP%]{justify-content:space-between;border-radius:4px;overflow:hidden}.event.all-day[_ngcontent-%COMP%]{height:auto}.event__header[_ngcontent-%COMP%]{display:flex;text-align:left;color:#546e7a;padding:.25rem;border-bottom:1px solid hsla(0,0%,100%,.5)}.event__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}.event__metadata[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;font-weight:100;color:#546e7a;padding:.25rem}.event__metadata[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.25rem}.event__location[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.event__location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px;margin-right:.25rem}.event__location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventRenderDayComponent, [{
        type: Component,
        args: [{
                selector: 'event-render-day',
                templateUrl: './event-render-day.component.html',
                styleUrls: ['./event-render-day.component.scss']
            }]
    }], function () { return [{ type: i1.FormattingService }]; }, { event: [{
            type: Input
        }], date: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtcmVuZGVyLWRheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvY29tcG9uZW50cy9zaGFyZWQvZXZlbnQtcmVuZGVyL2V2ZW50LXJlbmRlci1kYXkvZXZlbnQtcmVuZGVyLWRheS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvY29tcG9uZW50cy9zaGFyZWQvZXZlbnQtcmVuZGVyL2V2ZW50LXJlbmRlci1kYXkvZXZlbnQtcmVuZGVyLWRheS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7SUNRekIsOEJBQW9EO0lBQ2hELGdDQUFVO0lBQUEscUJBQUs7SUFBQSxpQkFBVztJQUMxQiw0QkFBTTtJQUFBLFlBQW9CO0lBQUEsaUJBQU87SUFDckMsaUJBQU07OztJQURJLGVBQW9CO0lBQXBCLDJDQUFvQjs7O0lBVnRDLDJCQUEyQjtJQUN2Qiw4QkFBMkI7SUFDdkIseUJBQUc7SUFBQSxZQUFpQjtJQUFBLGlCQUFJO0lBQzVCLGlCQUFNO0lBRU4sOEJBQTZCO0lBQ3pCLHlCQUFHO0lBQUEsWUFBK0I7SUFBQSxpQkFBSTtJQUV0QyxvRkFHTTtJQUNWLGlCQUFNO0lBQ1YsaUJBQU07OztJQVhLLGVBQWlCO0lBQWpCLHdDQUFpQjtJQUlqQixlQUErQjtJQUEvQixzRUFBK0I7SUFFSixlQUFvQjtJQUFwQiw0Q0FBb0I7OztJQU8xRCwyQkFBMEI7SUFDdEIsOEJBQTJCO0lBQ3ZCLDRCQUFpQjtJQUFBLFlBQWlCO0lBQUEsaUJBQUk7SUFDMUMsaUJBQU07SUFDVixpQkFBTTs7O0lBRm1CLGVBQWlCO0lBQWpCLHdDQUFpQjs7O0lBSTFDLHlCQUFvRTs7O0lBdEJ4RSw4QkFBc0c7SUFDbEcsOEVBYU07SUFFTiw4RUFJTTtJQUVOLDhFQUFvRTtJQUN4RSxpQkFBTTs7O0lBdkIwRCxzREFBcUM7SUFBcEUsOENBQThCO0lBQ3JELGVBQW1CO0lBQW5CLDJDQUFtQjtJQWVuQixlQUFrQjtJQUFsQiwwQ0FBa0I7SUFNTSxlQUE4QjtJQUE5Qiw2REFBOEI7O0FEWmhFLE1BQU0sT0FBTyx1QkFBdUI7SUFTaEMsWUFDVyxpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM1QyxDQUFDO0lBRUosUUFBUTtRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7OzhGQWxCUSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1ZwQyx3RUF1Qk07O1FBdkJBLGdDQUFXOzt1RkRVSix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ25EO29FQUVZLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNTYW1lRGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9DYWxlbmRhckV2ZW50JztcbmltcG9ydCB7IEZvcm1hdHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldmVudC1yZW5kZXItZGF5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXZlbnQtcmVuZGVyLWRheS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZXZlbnQtcmVuZGVyLWRheS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50UmVuZGVyRGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgICBASW5wdXQoKSBkYXRlOiBEYXRlO1xuXG4gICAgc3RhcnRUaW1lOiBzdHJpbmc7XG4gICAgZW5kVGltZTogc3RyaW5nO1xuICAgIGlzU2FtZURheTogYm9vbGVhbjtcbiAgICBlbmRzVG9kYXk6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGZvcm1hdHRpbmdTZXJ2aWNlOiBGb3JtYXR0aW5nU2VydmljZSxcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLmZvcm1hdHRpbmdTZXJ2aWNlLmdldFRpbWUodGhpcy5ldmVudC5zdGFydFRpbWUpO1xuICAgICAgICB0aGlzLmVuZFRpbWUgPSB0aGlzLmZvcm1hdHRpbmdTZXJ2aWNlLmdldFRpbWUodGhpcy5ldmVudC5lbmRUaW1lKTtcbiAgICAgICAgdGhpcy5pc1NhbWVEYXkgPSBpc1NhbWVEYXkodGhpcy5ldmVudC5zdGFydFRpbWUsIHRoaXMuZXZlbnQuZW5kVGltZSk7XG4gICAgICAgIHRoaXMuZW5kc1RvZGF5ID0gaXNTYW1lRGF5KHRoaXMuZGF0ZSwgdGhpcy5ldmVudC5lbmRUaW1lKTtcbiAgICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZXZlbnRcIiBjbGFzcz1cImV2ZW50XCIgW2NsYXNzLmFsbC1kYXldPVwiZXZlbnQuYWxsRGF5XCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJldmVudC5jb2xvclwiPlxuICAgIDxkaXYgKm5nSWY9XCIhZXZlbnQuYWxsRGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudF9faGVhZGVyXCI+XG4gICAgICAgICAgICA8cD57eyBldmVudC50aXRsZSB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50X19tZXRhZGF0YVwiPlxuICAgICAgICAgICAgPHA+e3sgc3RhcnRUaW1lIH19IC0ge3sgZW5kVGltZSB9fTwvcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50X19sb2NhdGlvblwiICpuZ0lmPVwiZXZlbnQubG9jYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24+cGxhY2U8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGV2ZW50LmxvY2F0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAqbmdJZj1cImV2ZW50LmFsbERheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRfX2hlYWRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPnt7IGV2ZW50LnRpdGxlIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJldmVudF9fbXVsdGlkYXlcIiAqbmdJZj1cIiFpc1NhbWVEYXkgJiYgIWVuZHNUb2RheVwiPjwvZGl2PlxuPC9kaXY+Il19
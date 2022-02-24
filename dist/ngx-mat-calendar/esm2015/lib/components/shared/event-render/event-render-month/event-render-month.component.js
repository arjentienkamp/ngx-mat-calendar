import { Component, Input } from '@angular/core';
import { isBefore, isSameDay } from 'date-fns';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatting.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/tooltip";
function EventRenderMonthComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 7);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-color", ctx_r1.event.color);
} }
function EventRenderMonthComponent_div_0_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.startTime);
} }
function EventRenderMonthComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} }
const _c0 = function (a0) { return { "backgroundColor": a0 }; };
function EventRenderMonthComponent_div_0_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
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
} }
export class EventRenderMonthComponent {
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
EventRenderMonthComponent.ɵfac = function EventRenderMonthComponent_Factory(t) { return new (t || EventRenderMonthComponent)(i0.ɵɵdirectiveInject(i1.FormattingService)); };
EventRenderMonthComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EventRenderMonthComponent, selectors: [["event-render-month"]], inputs: { event: "event", date: "date" }, decls: 1, vars: 1, consts: [["class", "event", 4, "ngIf"], [1, "event"], [1, "even__line", 3, "matTooltip", "ngStyle"], ["class", "event-color", 3, "backgroundColor", 4, "ngIf"], ["class", "metadata", 4, "ngIf"], [1, "title"], ["class", "event__multiday", 4, "ngIf"], [1, "event-color"], [1, "metadata"], [1, "event__multiday"]], template: function EventRenderMonthComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EventRenderMonthComponent_div_0_Template, 7, 12, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.event);
    } }, directives: [i2.NgIf, i3.MatTooltip, i2.NgStyle], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}event-render[_nghost-%COMP%]{height:100%}.event[_ngcontent-%COMP%], event-render[_nghost-%COMP%]{display:flex;flex-direction:column}.event[_ngcontent-%COMP%]{justify-content:space-between;overflow:hidden;font-size:12px}.even__line[_ngcontent-%COMP%]{display:flex;align-items:center;text-align:left;color:#546e7a;padding:.25rem}.even__line.all-day[_ngcontent-%COMP%]{border-radius:2px;width:100%;overflow:hidden;margin-top:.25rem}.even__line.past-event[_ngcontent-%COMP%]{opacity:.7}.even__line[_ngcontent-%COMP%]   .event-color[_ngcontent-%COMP%]{min-width:10px;height:10px;border-radius:10px;margin-right:.5rem}.even__line[_ngcontent-%COMP%]   p.metadata[_ngcontent-%COMP%]{margin-right:.5rem;margin-bottom:0}.even__line[_ngcontent-%COMP%]   p.title[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventRenderMonthComponent, [{
        type: Component,
        args: [{
                selector: 'event-render-month',
                templateUrl: './event-render-month.component.html',
                styleUrls: ['./event-render-month.component.scss']
            }]
    }], function () { return [{ type: i1.FormattingService }]; }, { event: [{
            type: Input
        }], date: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtcmVuZGVyLW1vbnRoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1tYXQtY2FsZW5kYXIvc3JjL2xpYi9jb21wb25lbnRzL3NoYXJlZC9ldmVudC1yZW5kZXIvZXZlbnQtcmVuZGVyLW1vbnRoL2V2ZW50LXJlbmRlci1tb250aC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvY29tcG9uZW50cy9zaGFyZWQvZXZlbnQtcmVuZGVyL2V2ZW50LXJlbmRlci1tb250aC9ldmVudC1yZW5kZXItbW9udGguY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7OztJQ012QywwQkFBNkY7OztJQUE3QyxzREFBcUM7OztJQUNyRiw0QkFBMEM7SUFBQSxZQUFlO0lBQUEsaUJBQUk7OztJQUFuQixlQUFlO0lBQWYsc0NBQWU7OztJQUk3RCx5QkFBb0U7Ozs7SUFaeEUsOEJBQWlDO0lBQzdCLDhCQUt1QztJQUNuQyxrRkFBNkY7SUFDN0YsNEVBQTZEO0lBQzdELDRCQUFpQjtJQUFBLFlBQWlCO0lBQUEsaUJBQUk7SUFDMUMsaUJBQU07SUFFTixnRkFBb0U7SUFDeEUsaUJBQU07OztJQVJFLGVBQThCO0lBQTlCLDhDQUE4QixvQ0FBQTtJQUY5QixnREFBMkIsdUZBQUE7SUFJQSxlQUFtQjtJQUFuQiwyQ0FBbUI7SUFDekIsZUFBbUI7SUFBbkIsMkNBQW1CO0lBQ3ZCLGVBQWlCO0lBQWpCLHdDQUFpQjtJQUdSLGVBQThCO0lBQTlCLDZEQUE4Qjs7QURGaEUsTUFBTSxPQUFPLHlCQUF5QjtJQVVsQyxZQUNXLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzVDLENBQUM7SUFFSixRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELFdBQVc7UUFDUCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxNQUFNLElBQUksQ0FBQyxPQUFPLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMvRjtRQUVELE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxNQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQztJQUN2RSxDQUFDOztrR0FqQ1EseUJBQXlCOzhEQUF6Qix5QkFBeUI7UUNWdEMsMkVBYU07O1FBYkEsZ0NBQVc7O3VGRFVKLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDckQ7b0VBRVksS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0JlZm9yZSwgaXNTYW1lRGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9DYWxlbmRhckV2ZW50JztcbmltcG9ydCB7IEZvcm1hdHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvZm9ybWF0dGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldmVudC1yZW5kZXItbW9udGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ldmVudC1yZW5kZXItbW9udGguY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2V2ZW50LXJlbmRlci1tb250aC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50UmVuZGVyTW9udGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICAgIEBJbnB1dCgpIGRhdGU6IERhdGU7XG5cbiAgICBzdGFydFRpbWU6IHN0cmluZztcbiAgICBlbmRUaW1lOiBzdHJpbmc7XG4gICAgaXNTYW1lRGF5OiBib29sZWFuO1xuICAgIGVuZHNUb2RheTogYm9vbGVhbjtcbiAgICBldmVudFRvb2x0aXA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgZm9ybWF0dGluZ1NlcnZpY2U6IEZvcm1hdHRpbmdTZXJ2aWNlLFxuICAgICkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMuZm9ybWF0dGluZ1NlcnZpY2UuZ2V0VGltZSh0aGlzLmV2ZW50LnN0YXJ0VGltZSk7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IHRoaXMuZm9ybWF0dGluZ1NlcnZpY2UuZ2V0VGltZSh0aGlzLmV2ZW50LmVuZFRpbWUpO1xuICAgICAgICB0aGlzLmlzU2FtZURheSA9IGlzU2FtZURheSh0aGlzLmV2ZW50LnN0YXJ0VGltZSwgdGhpcy5ldmVudC5lbmRUaW1lKTtcbiAgICAgICAgdGhpcy5lbmRzVG9kYXkgPSBpc1NhbWVEYXkodGhpcy5kYXRlLCB0aGlzLmV2ZW50LmVuZFRpbWUpO1xuXG4gICAgICAgIHRoaXMuZXZlbnRUb29sdGlwID0gdGhpcy5nZXRFdmVudFRvb2x0aXAoKTtcbiAgICB9XG5cbiAgICBpc1Bhc3RFdmVudCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGlzQmVmb3JlKHRoaXMuZXZlbnQuZGF0ZSwgbmV3IERhdGUoKSk7XG4gICAgfVxuXG4gICAgZ2V0RXZlbnRUb29sdGlwKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmV2ZW50LmxvY2F0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5ldmVudC50aXRsZX0gKCR7dGhpcy5zdGFydFRpbWV9IC0gJHt0aGlzLmVuZFRpbWV9KSBAICR7dGhpcy5ldmVudC5sb2NhdGlvbn1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZXZlbnQudGl0bGV9ICgke3RoaXMuc3RhcnRUaW1lfSAtICR7dGhpcy5lbmRUaW1lfSlgO1xuICAgIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJldmVudFwiIGNsYXNzPVwiZXZlbnRcIj5cbiAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiZXZlbl9fbGluZVwiXG4gICAgICAgIFttYXRUb29sdGlwXT1cImV2ZW50VG9vbHRpcFwiXG4gICAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZENvbG9yJyA6IGV2ZW50LmFsbERheSA/IGV2ZW50LmNvbG9yIDogJycgfVwiXG4gICAgICAgIFtjbGFzcy5hbGwtZGF5XT1cImV2ZW50LmFsbERheVwiXG4gICAgICAgIFtjbGFzcy5wYXN0LWV2ZW50XT1cImlzUGFzdEV2ZW50KClcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJldmVudC1jb2xvclwiICpuZ0lmPVwiIWV2ZW50LmFsbERheVwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiZXZlbnQuY29sb3JcIj48L3NwYW4+XG4gICAgICAgIDxwIGNsYXNzPVwibWV0YWRhdGFcIiAqbmdJZj1cIiFldmVudC5hbGxEYXlcIj57eyBzdGFydFRpbWUgfX08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj57eyBldmVudC50aXRsZSB9fTwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJldmVudF9fbXVsdGlkYXlcIiAqbmdJZj1cIiFpc1NhbWVEYXkgJiYgIWVuZHNUb2RheVwiPjwvZGl2PlxuPC9kaXY+Il19
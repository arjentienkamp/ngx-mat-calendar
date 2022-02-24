import { Component, Input } from '@angular/core';
import { isSameDay } from 'date-fns';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/formatting.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/icon";
function EventRenderWeekComponent_div_0_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
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
function EventRenderWeekComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵtemplate(7, EventRenderWeekComponent_div_0_div_1_div_7_Template, 5, 1, "div", 6);
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
function EventRenderWeekComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
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
function EventRenderWeekComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 9);
} }
function EventRenderWeekComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, EventRenderWeekComponent_div_0_div_1_Template, 8, 4, "div", 2);
    i0.ɵɵtemplate(2, EventRenderWeekComponent_div_0_div_2_Template, 4, 1, "div", 2);
    i0.ɵɵtemplate(3, EventRenderWeekComponent_div_0_div_3_Template, 1, 0, "div", 3);
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
export class EventRenderWeekComponent {
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
EventRenderWeekComponent.ɵfac = function EventRenderWeekComponent_Factory(t) { return new (t || EventRenderWeekComponent)(i0.ɵɵdirectiveInject(i1.FormattingService)); };
EventRenderWeekComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EventRenderWeekComponent, selectors: [["event-render-week"]], inputs: { event: "event", date: "date" }, decls: 1, vars: 1, consts: [["class", "event", 3, "all-day", "backgroundColor", 4, "ngIf"], [1, "event"], [4, "ngIf"], ["class", "event__multiday", 4, "ngIf"], [1, "event__header"], [1, "event__metadata"], ["class", "event__location", 4, "ngIf"], [1, "event__location"], [1, "title"], [1, "event__multiday"]], template: function EventRenderWeekComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EventRenderWeekComponent_div_0_Template, 4, 7, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.event);
    } }, directives: [i2.NgIf, i3.MatIcon], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.event[_ngcontent-%COMP%], event-render[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.event[_ngcontent-%COMP%]{justify-content:space-between;border-radius:4px;overflow:hidden}.event.all-day[_ngcontent-%COMP%]{height:auto}.event__header[_ngcontent-%COMP%]{display:flex;text-align:left;color:#546e7a;padding:.25rem;border-bottom:1px solid hsla(0,0%,100%,.5)}.event__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden;margin-bottom:0}.event__metadata[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;font-weight:100;color:#546e7a;padding:.25rem}.event__metadata[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.25rem}.event__location[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center}.event__location[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:16px;height:16px;width:16px;margin-right:.25rem}.event__location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap;text-overflow:ellipsis;max-width:100%;overflow:hidden}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventRenderWeekComponent, [{
        type: Component,
        args: [{
                selector: 'event-render-week',
                templateUrl: './event-render-week.component.html',
                styleUrls: ['./event-render-week.component.scss']
            }]
    }], function () { return [{ type: i1.FormattingService }]; }, { event: [{
            type: Input
        }], date: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtcmVuZGVyLXdlZWsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL2NvbXBvbmVudHMvc2hhcmVkL2V2ZW50LXJlbmRlci9ldmVudC1yZW5kZXItd2Vlay9ldmVudC1yZW5kZXItd2Vlay5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvY29tcG9uZW50cy9zaGFyZWQvZXZlbnQtcmVuZGVyL2V2ZW50LXJlbmRlci13ZWVrL2V2ZW50LXJlbmRlci13ZWVrLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7OztJQ1F6Qiw4QkFBb0Q7SUFDaEQsZ0NBQVU7SUFBQSxxQkFBSztJQUFBLGlCQUFXO0lBQzFCLDRCQUFNO0lBQUEsWUFBb0I7SUFBQSxpQkFBTztJQUNyQyxpQkFBTTs7O0lBREksZUFBb0I7SUFBcEIsMkNBQW9COzs7SUFWdEMsMkJBQTJCO0lBQ3ZCLDhCQUEyQjtJQUN2Qix5QkFBRztJQUFBLFlBQWlCO0lBQUEsaUJBQUk7SUFDNUIsaUJBQU07SUFFTiw4QkFBNkI7SUFDekIseUJBQUc7SUFBQSxZQUErQjtJQUFBLGlCQUFJO0lBRXRDLHFGQUdNO0lBQ1YsaUJBQU07SUFDVixpQkFBTTs7O0lBWEssZUFBaUI7SUFBakIsd0NBQWlCO0lBSWpCLGVBQStCO0lBQS9CLHNFQUErQjtJQUVKLGVBQW9CO0lBQXBCLDRDQUFvQjs7O0lBTzFELDJCQUEwQjtJQUN0Qiw4QkFBMkI7SUFDdkIsNEJBQWlCO0lBQUEsWUFBaUI7SUFBQSxpQkFBSTtJQUMxQyxpQkFBTTtJQUNWLGlCQUFNOzs7SUFGbUIsZUFBaUI7SUFBakIsd0NBQWlCOzs7SUFJMUMseUJBQW9FOzs7SUF0QnhFLDhCQUFzRztJQUNsRywrRUFhTTtJQUVOLCtFQUlNO0lBRU4sK0VBQW9FO0lBQ3hFLGlCQUFNOzs7SUF2QjBELHNEQUFxQztJQUFwRSw4Q0FBOEI7SUFDckQsZUFBbUI7SUFBbkIsMkNBQW1CO0lBZW5CLGVBQWtCO0lBQWxCLDBDQUFrQjtJQU1NLGVBQThCO0lBQTlCLDZEQUE4Qjs7QURaaEUsTUFBTSxPQUFPLHdCQUF3QjtJQVNqQyxZQUNXLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQzVDLENBQUM7SUFFSixRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Z0dBbEJRLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FDVnJDLHlFQXVCTTs7UUF2QkEsZ0NBQVc7O3VGRFVKLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDcEQ7b0VBRVksS0FBSztrQkFBYixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWxzL0NhbGVuZGFyRXZlbnQnO1xuaW1wb3J0IHsgRm9ybWF0dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9mb3JtYXR0aW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2V2ZW50LXJlbmRlci13ZWVrJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXZlbnQtcmVuZGVyLXdlZWsuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2V2ZW50LXJlbmRlci13ZWVrLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXZlbnRSZW5kZXJXZWVrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBldmVudDogQ2FsZW5kYXJFdmVudDtcbiAgICBASW5wdXQoKSBkYXRlOiBEYXRlO1xuXG4gICAgc3RhcnRUaW1lOiBzdHJpbmc7XG4gICAgZW5kVGltZTogc3RyaW5nO1xuICAgIGlzU2FtZURheTogYm9vbGVhbjtcbiAgICBlbmRzVG9kYXk6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIGZvcm1hdHRpbmdTZXJ2aWNlOiBGb3JtYXR0aW5nU2VydmljZSxcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLmZvcm1hdHRpbmdTZXJ2aWNlLmdldFRpbWUodGhpcy5ldmVudC5zdGFydFRpbWUpO1xuICAgICAgICB0aGlzLmVuZFRpbWUgPSB0aGlzLmZvcm1hdHRpbmdTZXJ2aWNlLmdldFRpbWUodGhpcy5ldmVudC5lbmRUaW1lKTtcbiAgICAgICAgdGhpcy5pc1NhbWVEYXkgPSBpc1NhbWVEYXkodGhpcy5ldmVudC5zdGFydFRpbWUsIHRoaXMuZXZlbnQuZW5kVGltZSk7XG4gICAgICAgIHRoaXMuZW5kc1RvZGF5ID0gaXNTYW1lRGF5KHRoaXMuZGF0ZSwgdGhpcy5ldmVudC5lbmRUaW1lKTtcbiAgICB9XG59XG4iLCI8ZGl2ICpuZ0lmPVwiZXZlbnRcIiBjbGFzcz1cImV2ZW50XCIgW2NsYXNzLmFsbC1kYXldPVwiZXZlbnQuYWxsRGF5XCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJldmVudC5jb2xvclwiPlxuICAgIDxkaXYgKm5nSWY9XCIhZXZlbnQuYWxsRGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudF9faGVhZGVyXCI+XG4gICAgICAgICAgICA8cD57eyBldmVudC50aXRsZSB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50X19tZXRhZGF0YVwiPlxuICAgICAgICAgICAgPHA+e3sgc3RhcnRUaW1lIH19IC0ge3sgZW5kVGltZSB9fTwvcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50X19sb2NhdGlvblwiICpuZ0lmPVwiZXZlbnQubG9jYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24+cGxhY2U8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IGV2ZW50LmxvY2F0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAqbmdJZj1cImV2ZW50LmFsbERheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRfX2hlYWRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPnt7IGV2ZW50LnRpdGxlIH19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJldmVudF9fbXVsdGlkYXlcIiAqbmdJZj1cIiFpc1NhbWVEYXkgJiYgIWVuZHNUb2RheVwiPjwvZGl2PlxuPC9kaXY+Il19
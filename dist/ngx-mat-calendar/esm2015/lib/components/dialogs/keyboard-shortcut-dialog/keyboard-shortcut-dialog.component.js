import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "../../../models/CalendarOptions";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/material/divider";
import * as i4 from "@angular/common";
function KeyboardShortcutDialogComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "Add event");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵelementStart(4, "span", 3);
    i0.ɵɵtext(5, "n");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class KeyboardShortcutDialogComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() { }
}
KeyboardShortcutDialogComponent.ɵfac = function KeyboardShortcutDialogComponent_Factory(t) { return new (t || KeyboardShortcutDialogComponent)(i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
KeyboardShortcutDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: KeyboardShortcutDialogComponent, selectors: [["keyboard-shortcut-dialog"]], decls: 29, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "content-row"], [1, "keyboard-shortcut"], ["class", "content-row", 4, "ngIf"]], template: function KeyboardShortcutDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2", 0);
        i0.ɵɵtext(1, "Keyboard Shortcuts");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-dialog-content", 1);
        i0.ɵɵelement(3, "mat-divider");
        i0.ɵɵelementStart(4, "div", 2);
        i0.ɵɵelementStart(5, "span");
        i0.ɵɵtext(6, "Switch to day view");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "span");
        i0.ɵɵelementStart(8, "span", 3);
        i0.ɵɵtext(9, "d");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 2);
        i0.ɵɵelementStart(11, "span");
        i0.ɵɵtext(12, "Switch to week view");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "span");
        i0.ɵɵelementStart(14, "span", 3);
        i0.ɵɵtext(15, "w");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 2);
        i0.ɵɵelementStart(17, "span");
        i0.ɵɵtext(18, "Switch to month view");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "span");
        i0.ɵɵelementStart(20, "span", 3);
        i0.ɵɵtext(21, "m");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 2);
        i0.ɵɵelementStart(23, "span");
        i0.ɵɵtext(24, "Go to today");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "span");
        i0.ɵɵelementStart(26, "span", 3);
        i0.ɵɵtext(27, "t");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(28, KeyboardShortcutDialogComponent_div_28_Template, 6, 0, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(28);
        i0.ɵɵproperty("ngIf", ctx.data.enableAddEventButton);
    } }, directives: [i2.MatDialogTitle, i2.MatDialogContent, i3.MatDivider, i4.NgIf], styles: ["*[_ngcontent-%COMP%]{box-sizing:border-box}.calendar__item[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;position:absolute;left:0;padding:2px;border-radius:4px;width:100%;transition:.25s}.calendar__item[_ngcontent-%COMP%]:hover{opacity:.75;cursor:pointer}.calendar__times[_ngcontent-%COMP%]{position:relative;top:-10px;display:flex;width:60px;margin-right:20px;flex-direction:column;color:#c8c8c8;text-align:center}.time-cell[_ngcontent-%COMP%]{display:flex;justify-content:center}.calendar__content[_ngcontent-%COMP%]{flex:1;flex-direction:column;overflow:scroll;margin-top:100px}.calendar__days[_ngcontent-%COMP%]{position:absolute;top:65px;left:0;bottom:0;right:0;display:flex;flex-direction:row;margin-left:79px;border-left:1px solid #efefef}.calendar__day[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:flex-start;border-right:1px solid #efefef;padding-right:.5rem;margin-left:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:#c8c8c8}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{margin-bottom:.5rem}.calendar__day[_ngcontent-%COMP%]   .day__header[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:.5rem;width:40px;height:40px;border-radius:20px;background-color:#efefef;color:#2a2a2a}.calendar__day[_ngcontent-%COMP%]   .day__header--today[_ngcontent-%COMP%]   .day-number[_ngcontent-%COMP%]{background-color:#263238;color:#fff}.calendar__day-events[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:2;display:flex;flex-direction:row;margin-left:79px;background-color:#fff;border-left:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;flex-direction:column;overflow:hidden;border-right:1px solid #efefef}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]{position:relative}.calendar__day-events[_ngcontent-%COMP%]   .day__lane[_ngcontent-%COMP%]   .calendar__item[_ngcontent-%COMP%]   .event__header[_ngcontent-%COMP%]{border-bottom:0}.calendar__marker[_ngcontent-%COMP%]{position:relative;z-index:1;border:1px solid #d32f2f;width:calc(100% + 1rem);left:-.5rem}.calendar__marker[_ngcontent-%COMP%]:before{content:\"\";display:block;position:absolute;width:10px;background-color:#d32f2f;height:10px;border-radius:10px;top:-5px;left:-7px}.mat-dialog-content[_ngcontent-%COMP%]{width:450px}.mat-dialog-content[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%]{margin-bottom:1rem}.mat-dialog-content[_ngcontent-%COMP%]   .content-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;height:50px}.mat-dialog-content[_ngcontent-%COMP%]   .keyboard-shortcut[_ngcontent-%COMP%]{display:block;padding:.5rem 0;border:1px solid #efefef;border-radius:4px;width:40px;text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KeyboardShortcutDialogComponent, [{
        type: Component,
        args: [{
                selector: 'keyboard-shortcut-dialog',
                templateUrl: './keyboard-shortcut-dialog.component.html',
                styleUrls: ['./keyboard-shortcut-dialog.component.scss']
            }]
    }], function () { return [{ type: i1.CalendarOptions, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Ym9hcmQtc2hvcnRjdXQtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1tYXQtY2FsZW5kYXIvc3JjL2xpYi9jb21wb25lbnRzL2RpYWxvZ3Mva2V5Ym9hcmQtc2hvcnRjdXQtZGlhbG9nL2tleWJvYXJkLXNob3J0Y3V0LWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvY29tcG9uZW50cy9kaWFsb2dzL2tleWJvYXJkLXNob3J0Y3V0LWRpYWxvZy9rZXlib2FyZC1zaG9ydGN1dC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7O0lDK0J2RCw4QkFBMkQ7SUFDdkQsNEJBQU07SUFBQSx5QkFBUztJQUFBLGlCQUFPO0lBQ3RCLDRCQUFNO0lBQ0YsK0JBQWdDO0lBQUEsaUJBQUM7SUFBQSxpQkFBTztJQUM1QyxpQkFBTztJQUNYLGlCQUFNOztBRDVCVixNQUFNLE9BQU8sK0JBQStCO0lBQ3hDLFlBQ29DLElBQXFCO1FBQXJCLFNBQUksR0FBSixJQUFJLENBQWlCO0lBQ3JELENBQUM7SUFFTCxRQUFRLEtBQVcsQ0FBQzs7OEdBTFgsK0JBQStCLHVCQUU1QixlQUFlO29FQUZsQiwrQkFBK0I7UUNUNUMsNkJBQXFCO1FBQUEsa0NBQWtCO1FBQUEsaUJBQUs7UUFDNUMsNkNBQTJDO1FBQ3ZDLDhCQUEyQjtRQUUzQiw4QkFBeUI7UUFDckIsNEJBQU07UUFBQSxrQ0FBa0I7UUFBQSxpQkFBTztRQUMvQiw0QkFBTTtRQUNGLCtCQUFnQztRQUFBLGlCQUFDO1FBQUEsaUJBQU87UUFDNUMsaUJBQU87UUFDWCxpQkFBTTtRQUVOLCtCQUF5QjtRQUNyQiw2QkFBTTtRQUFBLG9DQUFtQjtRQUFBLGlCQUFPO1FBQ2hDLDZCQUFNO1FBQ0YsZ0NBQWdDO1FBQUEsa0JBQUM7UUFBQSxpQkFBTztRQUM1QyxpQkFBTztRQUNYLGlCQUFNO1FBRU4sK0JBQXlCO1FBQ3JCLDZCQUFNO1FBQUEscUNBQW9CO1FBQUEsaUJBQU87UUFDakMsNkJBQU07UUFDRixnQ0FBZ0M7UUFBQSxrQkFBQztRQUFBLGlCQUFPO1FBQzVDLGlCQUFPO1FBQ1gsaUJBQU07UUFFTiwrQkFBeUI7UUFDckIsNkJBQU07UUFBQSw0QkFBVztRQUFBLGlCQUFPO1FBQ3hCLDZCQUFNO1FBQ0YsZ0NBQWdDO1FBQUEsa0JBQUM7UUFBQSxpQkFBTztRQUM1QyxpQkFBTztRQUNYLGlCQUFNO1FBRU4sa0ZBS007UUFDVixpQkFBcUI7O1FBTlMsZ0JBQStCO1FBQS9CLG9EQUErQjs7dUZEdkJoRCwrQkFBK0I7Y0FMM0MsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwyQ0FBMkM7Z0JBQ3hELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQzNEOztzQkFHUSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgQ2FsZW5kYXJPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0NhbGVuZGFyT3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna2V5Ym9hcmQtc2hvcnRjdXQtZGlhbG9nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4va2V5Ym9hcmQtc2hvcnRjdXQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9rZXlib2FyZC1zaG9ydGN1dC1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBLZXlib2FyZFNob3J0Y3V0RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBDYWxlbmRhck9wdGlvbnNcbiAgICApIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IH1cbn1cbiIsIjxoMiBtYXQtZGlhbG9nLXRpdGxlPktleWJvYXJkIFNob3J0Y3V0czwvaDI+XG48bWF0LWRpYWxvZy1jb250ZW50IGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj5cbiAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXJvd1wiPlxuICAgICAgICA8c3Bhbj5Td2l0Y2ggdG8gZGF5IHZpZXc8L3NwYW4+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJrZXlib2FyZC1zaG9ydGN1dFwiPmQ8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXJvd1wiPlxuICAgICAgICA8c3Bhbj5Td2l0Y2ggdG8gd2VlayB2aWV3PC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia2V5Ym9hcmQtc2hvcnRjdXRcIj53PC9zcGFuPlxuICAgICAgICA8L3NwYW4+ICAgICAgICBcbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXJvd1wiPlxuICAgICAgICA8c3Bhbj5Td2l0Y2ggdG8gbW9udGggdmlldzwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImtleWJvYXJkLXNob3J0Y3V0XCI+bTwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtcm93XCI+XG4gICAgICAgIDxzcGFuPkdvIHRvIHRvZGF5PC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia2V5Ym9hcmQtc2hvcnRjdXRcIj50PC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1yb3dcIiAqbmdJZj1cImRhdGEuZW5hYmxlQWRkRXZlbnRCdXR0b25cIj5cbiAgICAgICAgPHNwYW4+QWRkIGV2ZW50PC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwia2V5Ym9hcmQtc2hvcnRjdXRcIj5uPC9zcGFuPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG48L21hdC1kaWFsb2ctY29udGVudD4iXX0=
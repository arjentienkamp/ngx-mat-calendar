import { Component, Input, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["renderTarget"];
function EventDisplayComponent_ng_template_0_Template(rf, ctx) { }
export class EventDisplayComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() {
        if (this.event && !this.renderComponent) {
            this.createRenderComponent();
        }
    }
    createRenderComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.component);
        this.renderComponent = this.renderTarget.createComponent(componentFactory);
        this.renderComponent.instance.event = this.event;
        this.renderComponent.instance.date = this.date;
    }
    ngOnDestroy() {
        if (this.renderComponent) {
            this.renderComponent.destroy();
        }
    }
}
EventDisplayComponent.ɵfac = function EventDisplayComponent_Factory(t) { return new (t || EventDisplayComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
EventDisplayComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EventDisplayComponent, selectors: [["event-display"]], viewQuery: function EventDisplayComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3, ViewContainerRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.renderTarget = _t.first);
    } }, inputs: { event: "event", date: "date", component: "component" }, decls: 2, vars: 0, consts: [["renderTarget", ""]], template: function EventDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EventDisplayComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, styles: [":host(event-display){overflow:hidden}event-render-day,event-render-week{height:100%}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventDisplayComponent, [{
        type: Component,
        args: [{
                selector: 'event-display',
                template: `<ng-template #renderTarget></ng-template>`,
                styleUrls: ['./event-display.component.scss'],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { event: [{
            type: Input
        }], date: [{
            type: Input
        }], component: [{
            type: Input
        }], renderTarget: [{
            type: ViewChild,
            args: ['renderTarget', { read: ViewContainerRef, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvY29tcG9uZW50cy9zaGFyZWQvZXZlbnQtZGlzcGxheS9ldmVudC1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixLQUFLLEVBQXFCLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVM5SSxNQUFNLE9BQU8scUJBQXFCO0lBUTlCLFlBQ1ksUUFBa0M7UUFBbEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7SUFDM0MsQ0FBQztJQUVKLFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELHFCQUFxQjtRQUNqQixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQzs7MEZBN0JRLHFCQUFxQjswREFBckIscUJBQXFCOytCQU1LLGdCQUFnQjs7Ozs7UUFWeEMsdUhBQXlDOzt1RkFJM0MscUJBQXFCO2NBTmpDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLDJDQUEyQztnQkFDckQsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3hDOzJFQUdZLEtBQUs7a0JBQWIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFFK0QsWUFBWTtrQkFBaEYsU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0NvbnRhaW5lclJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvQ2FsZW5kYXJFdmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZXZlbnQtZGlzcGxheScsXG4gICAgdGVtcGxhdGU6IGA8bmctdGVtcGxhdGUgI3JlbmRlclRhcmdldD48L25nLXRlbXBsYXRlPmAsXG4gICAgc3R5bGVVcmxzOiBbJy4vZXZlbnQtZGlzcGxheS5jb21wb25lbnQuc2NzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRXZlbnREaXNwbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHJlbmRlckNvbXBvbmVudDogYW55O1xuICAgIEBJbnB1dCgpIGV2ZW50ITogQ2FsZW5kYXJFdmVudDtcbiAgICBASW5wdXQoKSBkYXRlITogRGF0ZTtcbiAgICBASW5wdXQoKSBjb21wb25lbnQhOiBhbnk7XG5cbiAgICBAVmlld0NoaWxkKCdyZW5kZXJUYXJnZXQnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KSByZW5kZXJUYXJnZXQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICApIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnQgJiYgIXRoaXMucmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJlbmRlckNvbXBvbmVudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlUmVuZGVyQ29tcG9uZW50KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50ID0gdGhpcy5yZW5kZXJUYXJnZXQuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5pbnN0YW5jZS5ldmVudCA9IHRoaXMuZXZlbnQ7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50Lmluc3RhbmNlLmRhdGUgPSB0aGlzLmRhdGU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlckNvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
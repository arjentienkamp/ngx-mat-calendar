import { Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
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
EventDisplayComponent.decorators = [
    { type: Component, args: [{
                selector: 'event-display',
                template: `<ng-template #renderTarget></ng-template>`,
                encapsulation: ViewEncapsulation.None,
                styles: [":host(event-display){overflow:hidden}event-render-day,event-render-week{height:100%}"]
            },] }
];
EventDisplayComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
EventDisplayComponent.propDecorators = {
    event: [{ type: Input }],
    date: [{ type: Input }],
    component: [{ type: Input }],
    renderTarget: [{ type: ViewChild, args: ['renderTarget', { read: ViewContainerRef, static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvY29tcG9uZW50cy9zaGFyZWQvZXZlbnQtZGlzcGxheS9ldmVudC1kaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzlJLE1BQU0sT0FBTyxxQkFBcUI7SUFROUIsWUFDWSxRQUFrQztRQUFsQyxhQUFRLEdBQVIsUUFBUSxDQUEwQjtJQUMzQyxDQUFDO0lBRUosUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDckMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDaEM7SUFDTCxDQUFDO0lBRUQscUJBQXFCO1FBQ2pCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25ELENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbEM7SUFDTCxDQUFDOzs7WUFuQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsMkNBQTJDO2dCQUVyRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDeEM7OztZQVJtQix3QkFBd0I7OztvQkFXdkMsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBRUwsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9DYWxlbmRhckV2ZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdldmVudC1kaXNwbGF5JyxcbiAgICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjcmVuZGVyVGFyZ2V0PjwvbmctdGVtcGxhdGU+YCxcbiAgICBzdHlsZVVybHM6IFsnLi9ldmVudC1kaXNwbGF5LmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBFdmVudERpc3BsYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcmVuZGVyQ29tcG9uZW50OiBhbnk7XG4gICAgQElucHV0KCkgZXZlbnQhOiBDYWxlbmRhckV2ZW50O1xuICAgIEBJbnB1dCgpIGRhdGUhOiBEYXRlO1xuICAgIEBJbnB1dCgpIGNvbXBvbmVudCE6IGFueTtcblxuICAgIEBWaWV3Q2hpbGQoJ3JlbmRlclRhcmdldCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pIHJlbmRlclRhcmdldDogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5ldmVudCAmJiAhdGhpcy5yZW5kZXJDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUmVuZGVyQ29tcG9uZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVSZW5kZXJDb21wb25lbnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQgPSB0aGlzLnJlbmRlclRhcmdldC5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgICAgIHRoaXMucmVuZGVyQ29tcG9uZW50Lmluc3RhbmNlLmV2ZW50ID0gdGhpcy5ldmVudDtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQuaW5zdGFuY2UuZGF0ZSA9IHRoaXMuZGF0ZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
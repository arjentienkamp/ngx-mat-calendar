import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { CalendarEvent } from '../../../models/CalendarEvent';

@Component({
    selector: 'event-display',
    template: `<ng-template #renderTarget></ng-template>`,
    styleUrls: ['./event-display.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EventDisplayComponent implements OnInit, OnDestroy {
    renderComponent: any;
    @Input() event!: CalendarEvent;
    @Input() date!: Date;
    @Input() component!: any;

    @ViewChild('renderTarget', { read: ViewContainerRef, static: true }) renderTarget: any;

    constructor(
        private resolver: ComponentFactoryResolver
    ) {}

    ngOnInit(): void {
        if (this.event && !this.renderComponent) {
            this.createRenderComponent();
        }
    }

    createRenderComponent(): void {
        const componentFactory = this.resolver.resolveComponentFactory(this.component);
        this.renderComponent = this.renderTarget.createComponent(componentFactory);
        this.renderComponent.instance.event = this.event;
        this.renderComponent.instance.date = this.date;
    }

    ngOnDestroy(): void {
        if (this.renderComponent) {
            this.renderComponent.destroy();
        }
    }
}
import { Component, Input, OnDestroy, OnInit, Type, ViewChild, ViewEncapsulation } from '@angular/core';
import { CalendarEvent } from '../../../models/CalendarEvent';
import { DisplayComponent } from '../../../models/DisplayComponent';
import { EventRenderBaseComponent } from '../event-render/event-render-base.component';
import { EventDisplayDirective } from './event-display.directive';

@Component({
    selector: 'event-display',
    template: `<ng-template eventDisplay></ng-template>`,
    styleUrls: ['./event-display.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EventDisplayComponent implements OnInit, OnDestroy {
    @Input() event: CalendarEvent;
    @Input() date: Date;
    @Input() component: any;

    componentRef: any;

    @ViewChild(EventDisplayDirective, { static: true }) eventDisplayTarget!: EventDisplayDirective;

    constructor() {}

    ngOnInit(): void {
        if (this.event && !this.componentRef) {
            this.loadComponent();
        }
    }

    private componentTypeFactory(): Type<DisplayComponent> {
        let comp: Type<DisplayComponent>;
        comp = this.component;
        return comp;
    }

    private loadComponent(): void {
        const viewContainerRef = this.eventDisplayTarget.viewContainerRef;
        viewContainerRef.clear();

        this.componentRef = viewContainerRef.createComponent(this.componentTypeFactory());
        const base = (this.componentRef.instance as EventRenderBaseComponent);
        base.date = this.date;
        base.event = this.event;
    }

    ngOnDestroy(): void {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
}

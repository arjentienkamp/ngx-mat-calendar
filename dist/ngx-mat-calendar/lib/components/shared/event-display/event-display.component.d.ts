import { ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';
import { CalendarEvent } from '../../../models/CalendarEvent';
export declare class EventDisplayComponent implements OnInit, OnDestroy {
    private resolver;
    renderComponent: any;
    event: CalendarEvent;
    date: Date;
    component: any;
    renderTarget: any;
    constructor(resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    createRenderComponent(): void;
    ngOnDestroy(): void;
}

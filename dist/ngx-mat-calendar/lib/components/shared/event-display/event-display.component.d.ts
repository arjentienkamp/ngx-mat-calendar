import { ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';
import { CalendarEvent } from '../../../models/CalendarEvent';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<EventDisplayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EventDisplayComponent, "event-display", never, { "event": "event"; "date": "date"; "component": "component"; }, {}, never, never>;
}
//# sourceMappingURL=event-display.component.d.ts.map
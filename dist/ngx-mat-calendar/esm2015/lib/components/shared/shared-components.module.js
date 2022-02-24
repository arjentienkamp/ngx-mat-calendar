import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EventDisplayComponent } from './event-display/event-display.component';
import { EventRenderDayComponent } from './event-render/event-render-day/event-render-day.component';
import { EventRenderWeekComponent } from './event-render/event-render-week/event-render-week.component';
import { EventRenderMonthComponent } from './event-render/event-render-month/event-render-month.component';
import * as i0 from "@angular/core";
const MaterialModules = [
    MatIconModule,
    MatTooltipModule
];
export class SharedComponentsModule {
}
SharedComponentsModule.ɵfac = function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); };
SharedComponentsModule.ɵmod = i0.ɵɵdefineNgModule({ type: SharedComponentsModule });
SharedComponentsModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[
            BrowserModule,
            ...MaterialModules
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedComponentsModule, { declarations: [EventDisplayComponent,
        EventRenderDayComponent,
        EventRenderWeekComponent,
        EventRenderMonthComponent], imports: [BrowserModule, MatIconModule,
        MatTooltipModule], exports: [EventDisplayComponent,
        EventRenderDayComponent,
        EventRenderWeekComponent,
        EventRenderMonthComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    EventDisplayComponent,
                    EventRenderDayComponent,
                    EventRenderWeekComponent,
                    EventRenderMonthComponent
                ],
                imports: [
                    BrowserModule,
                    ...MaterialModules
                ],
                exports: [
                    EventDisplayComponent,
                    EventRenderDayComponent,
                    EventRenderWeekComponent,
                    EventRenderMonthComponent
                ],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL2NvbXBvbmVudHMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDckcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDeEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7O0FBRTNHLE1BQU0sZUFBZSxHQUFHO0lBQ3BCLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkIsQ0FBQztBQXNCRixNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCOzBEQUF0QixzQkFBc0I7K0RBSHBCLEVBQUUsWUFWSjtZQUNMLGFBQWE7WUFDYixHQUFHLGVBQWU7U0FDckI7d0ZBVVEsc0JBQXNCLG1CQWxCM0IscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIseUJBQXlCLGFBR3pCLGFBQWEsRUFaakIsYUFBYTtRQUNiLGdCQUFnQixhQWVaLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLHlCQUF5Qjt1RkFLcEIsc0JBQXNCO2NBcEJsQyxRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLHlCQUF5QjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGFBQWE7b0JBQ2IsR0FBRyxlQUFlO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wscUJBQXFCO29CQUNyQix1QkFBdUI7b0JBQ3ZCLHdCQUF3QjtvQkFDeEIseUJBQXlCO2lCQUM1QjtnQkFDRCxTQUFTLEVBQUUsRUFBRTtnQkFDYixTQUFTLEVBQUUsRUFBRTthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBFdmVudERpc3BsYXlDb21wb25lbnQgfSBmcm9tICcuL2V2ZW50LWRpc3BsYXkvZXZlbnQtZGlzcGxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnRSZW5kZXJEYXlDb21wb25lbnQgfSBmcm9tICcuL2V2ZW50LXJlbmRlci9ldmVudC1yZW5kZXItZGF5L2V2ZW50LXJlbmRlci1kYXkuY29tcG9uZW50JztcbmltcG9ydCB7IEV2ZW50UmVuZGVyV2Vla0NvbXBvbmVudCB9IGZyb20gJy4vZXZlbnQtcmVuZGVyL2V2ZW50LXJlbmRlci13ZWVrL2V2ZW50LXJlbmRlci13ZWVrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdmVudFJlbmRlck1vbnRoQ29tcG9uZW50IH0gZnJvbSAnLi9ldmVudC1yZW5kZXIvZXZlbnQtcmVuZGVyLW1vbnRoL2V2ZW50LXJlbmRlci1tb250aC5jb21wb25lbnQnO1xuXG5jb25zdCBNYXRlcmlhbE1vZHVsZXMgPSBbXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBFdmVudERpc3BsYXlDb21wb25lbnQsXG4gICAgICAgIEV2ZW50UmVuZGVyRGF5Q29tcG9uZW50LFxuICAgICAgICBFdmVudFJlbmRlcldlZWtDb21wb25lbnQsXG4gICAgICAgIEV2ZW50UmVuZGVyTW9udGhDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgLi4uTWF0ZXJpYWxNb2R1bGVzXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEV2ZW50RGlzcGxheUNvbXBvbmVudCxcbiAgICAgICAgRXZlbnRSZW5kZXJEYXlDb21wb25lbnQsXG4gICAgICAgIEV2ZW50UmVuZGVyV2Vla0NvbXBvbmVudCxcbiAgICAgICAgRXZlbnRSZW5kZXJNb250aENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBib290c3RyYXA6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZENvbXBvbmVudHNNb2R1bGUgeyB9XG4iXX0=
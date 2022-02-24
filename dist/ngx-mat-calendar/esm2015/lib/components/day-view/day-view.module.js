import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DayViewComponent } from './day-view.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { PipesModule } from '../../pipes/pipes.module';
import * as i0 from "@angular/core";
export class DayViewModule {
}
DayViewModule.ɵfac = function DayViewModule_Factory(t) { return new (t || DayViewModule)(); };
DayViewModule.ɵmod = i0.ɵɵdefineNgModule({ type: DayViewModule });
DayViewModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[
            BrowserModule,
            SharedComponentsModule,
            PipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DayViewModule, { declarations: [DayViewComponent], imports: [BrowserModule,
        SharedComponentsModule,
        PipesModule], exports: [DayViewComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DayViewModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    DayViewComponent
                ],
                imports: [
                    BrowserModule,
                    SharedComponentsModule,
                    PipesModule
                ],
                exports: [
                    DayViewComponent
                ],
                entryComponents: [],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LXZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL2NvbXBvbmVudHMvZGF5LXZpZXcvZGF5LXZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFrQnZELE1BQU0sT0FBTyxhQUFhOzswRUFBYixhQUFhO2lEQUFiLGFBQWE7c0RBSFgsRUFBRSxZQVRKO1lBQ0wsYUFBYTtZQUNiLHNCQUFzQjtZQUN0QixXQUFXO1NBQ2Q7d0ZBUVEsYUFBYSxtQkFkbEIsZ0JBQWdCLGFBR2hCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsV0FBVyxhQUdYLGdCQUFnQjt1RkFNWCxhQUFhO2NBaEJ6QixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLGdCQUFnQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QixXQUFXO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxnQkFBZ0I7aUJBQ25CO2dCQUNELGVBQWUsRUFBRSxFQUFFO2dCQUNuQixTQUFTLEVBQUUsRUFBRTtnQkFDYixTQUFTLEVBQUUsRUFBRTthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBEYXlWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9kYXktdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkQ29tcG9uZW50c01vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQtY29tcG9uZW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgUGlwZXNNb2R1bGUgfSBmcm9tICcuLi8uLi9waXBlcy9waXBlcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEYXlWaWV3Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIFNoYXJlZENvbXBvbmVudHNNb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIERheVZpZXdDb21wb25lbnRcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW10sXG4gICAgcHJvdmlkZXJzOiBbXSxcbiAgICBib290c3RyYXA6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERheVZpZXdNb2R1bGUgeyB9XG4iXX0=
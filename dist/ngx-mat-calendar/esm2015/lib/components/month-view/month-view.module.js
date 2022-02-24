import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { MonthViewComponent } from './month-view.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PipesModule } from '../../pipes/pipes.module';
import * as i0 from "@angular/core";
export class MonthViewModule {
}
MonthViewModule.ɵfac = function MonthViewModule_Factory(t) { return new (t || MonthViewModule)(); };
MonthViewModule.ɵmod = i0.ɵɵdefineNgModule({ type: MonthViewModule });
MonthViewModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[
            BrowserModule,
            SharedComponentsModule,
            OverlayModule,
            PipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MonthViewModule, { declarations: [MonthViewComponent], imports: [BrowserModule,
        SharedComponentsModule,
        OverlayModule,
        PipesModule], exports: [MonthViewComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthViewModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MonthViewComponent
                ],
                imports: [
                    BrowserModule,
                    SharedComponentsModule,
                    OverlayModule,
                    PipesModule
                ],
                exports: [
                    MonthViewComponent
                ],
                entryComponents: [],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvY29tcG9uZW50cy9tb250aC12aWV3L21vbnRoLXZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBbUJ2RCxNQUFNLE9BQU8sZUFBZTs7OEVBQWYsZUFBZTttREFBZixlQUFlO3dEQUhiLEVBQUUsWUFWSjtZQUNMLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsYUFBYTtZQUNiLFdBQVc7U0FDZDt3RkFRUSxlQUFlLG1CQWZwQixrQkFBa0IsYUFHbEIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixhQUFhO1FBQ2IsV0FBVyxhQUdYLGtCQUFrQjt1RkFNYixlQUFlO2NBakIzQixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLGtCQUFrQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QixhQUFhO29CQUNiLFdBQVc7aUJBQ2Q7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGtCQUFrQjtpQkFDckI7Z0JBQ0QsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxFQUFFO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFNoYXJlZENvbXBvbmVudHNNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLWNvbXBvbmVudHMubW9kdWxlJztcbmltcG9ydCB7IE1vbnRoVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGlwZXMvcGlwZXMubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTW9udGhWaWV3Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIFNoYXJlZENvbXBvbmVudHNNb2R1bGUsXG4gICAgICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE1vbnRoVmlld0NvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIGJvb3RzdHJhcDogW11cbn0pXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3TW9kdWxlIHsgfVxuIl19
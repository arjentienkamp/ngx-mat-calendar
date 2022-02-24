import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeekViewComponent } from './week-view.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { PipesModule } from '../../pipes/pipes.module';
import * as i0 from "@angular/core";
export class WeekViewModule {
}
WeekViewModule.ɵfac = function WeekViewModule_Factory(t) { return new (t || WeekViewModule)(); };
WeekViewModule.ɵmod = i0.ɵɵdefineNgModule({ type: WeekViewModule });
WeekViewModule.ɵinj = i0.ɵɵdefineInjector({ providers: [], imports: [[
            BrowserModule,
            SharedComponentsModule,
            PipesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(WeekViewModule, { declarations: [WeekViewComponent], imports: [BrowserModule,
        SharedComponentsModule,
        PipesModule], exports: [WeekViewComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WeekViewModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    WeekViewComponent
                ],
                imports: [
                    BrowserModule,
                    SharedComponentsModule,
                    PipesModule
                ],
                exports: [
                    WeekViewComponent
                ],
                entryComponents: [],
                providers: [],
                bootstrap: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay12aWV3Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1tYXQtY2FsZW5kYXIvc3JjL2xpYi9jb21wb25lbnRzL3dlZWstdmlldy93ZWVrLXZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFrQnZELE1BQU0sT0FBTyxjQUFjOzs0RUFBZCxjQUFjO2tEQUFkLGNBQWM7dURBSFosRUFBRSxZQVRKO1lBQ0wsYUFBYTtZQUNiLHNCQUFzQjtZQUN0QixXQUFXO1NBQ2Q7d0ZBUVEsY0FBYyxtQkFkbkIsaUJBQWlCLGFBR2pCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsV0FBVyxhQUdYLGlCQUFpQjt1RkFNWixjQUFjO2NBaEIxQixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFO29CQUNWLGlCQUFpQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QixXQUFXO2lCQUNkO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxpQkFBaUI7aUJBQ3BCO2dCQUNELGVBQWUsRUFBRSxFQUFFO2dCQUNuQixTQUFTLEVBQUUsRUFBRTtnQkFDYixTQUFTLEVBQUUsRUFBRTthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBXZWVrVmlld0NvbXBvbmVudCB9IGZyb20gJy4vd2Vlay12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRDb21wb25lbnRzTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzLm1vZHVsZSc7XG5pbXBvcnQgeyBQaXBlc01vZHVsZSB9IGZyb20gJy4uLy4uL3BpcGVzL3BpcGVzLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFdlZWtWaWV3Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIFNoYXJlZENvbXBvbmVudHNNb2R1bGUsXG4gICAgICAgIFBpcGVzTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFdlZWtWaWV3Q29tcG9uZW50XG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgYm9vdHN0cmFwOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBXZWVrVmlld01vZHVsZSB7IH1cbiJdfQ==
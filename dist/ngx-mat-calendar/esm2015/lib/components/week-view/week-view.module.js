import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeekViewComponent } from './week-view.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { PipesModule } from '../../pipes/pipes.module';
export class WeekViewModule {
}
WeekViewModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay12aWV3Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1tYXQtY2FsZW5kYXIvc3JjL2xpYi9jb21wb25lbnRzL3dlZWstdmlldy93ZWVrLXZpZXcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQWtCdkQsTUFBTSxPQUFPLGNBQWM7OztZQWhCMUIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixpQkFBaUI7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxhQUFhO29CQUNiLHNCQUFzQjtvQkFDdEIsV0FBVztpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsaUJBQWlCO2lCQUNwQjtnQkFDRCxlQUFlLEVBQUUsRUFBRTtnQkFDbkIsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLEVBQUU7YUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgV2Vla1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL3dlZWstdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkQ29tcG9uZW50c01vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQtY29tcG9uZW50cy5tb2R1bGUnO1xuaW1wb3J0IHsgUGlwZXNNb2R1bGUgfSBmcm9tICcuLi8uLi9waXBlcy9waXBlcy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBXZWVrVmlld0NvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBTaGFyZWRDb21wb25lbnRzTW9kdWxlLFxuICAgICAgICBQaXBlc01vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBXZWVrVmlld0NvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIGJvb3RzdHJhcDogW11cbn0pXG5leHBvcnQgY2xhc3MgV2Vla1ZpZXdNb2R1bGUgeyB9XG4iXX0=
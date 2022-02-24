import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EventDisplayComponent } from './event-display/event-display.component';
import { EventRenderDayComponent } from './event-render/event-render-day/event-render-day.component';
import { EventRenderWeekComponent } from './event-render/event-render-week/event-render-week.component';
import { EventRenderMonthComponent } from './event-render/event-render-month/event-render-month.component';
const MaterialModules = [
    MatIconModule,
    MatTooltipModule
];
export class SharedComponentsModule {
}
SharedComponentsModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL2NvbXBvbmVudHMvc2hhcmVkL3NoYXJlZC1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDckcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDeEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFFM0csTUFBTSxlQUFlLEdBQUc7SUFDcEIsYUFBYTtJQUNiLGdCQUFnQjtDQUNuQixDQUFDO0FBc0JGLE1BQU0sT0FBTyxzQkFBc0I7OztZQXBCbEMsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsd0JBQXdCO29CQUN4Qix5QkFBeUI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxhQUFhO29CQUNiLEdBQUcsZUFBZTtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2Qix3QkFBd0I7b0JBQ3hCLHlCQUF5QjtpQkFDNUI7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLEVBQUU7YUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgRXZlbnREaXNwbGF5Q29tcG9uZW50IH0gZnJvbSAnLi9ldmVudC1kaXNwbGF5L2V2ZW50LWRpc3BsYXkuY29tcG9uZW50JztcbmltcG9ydCB7IEV2ZW50UmVuZGVyRGF5Q29tcG9uZW50IH0gZnJvbSAnLi9ldmVudC1yZW5kZXIvZXZlbnQtcmVuZGVyLWRheS9ldmVudC1yZW5kZXItZGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFdmVudFJlbmRlcldlZWtDb21wb25lbnQgfSBmcm9tICcuL2V2ZW50LXJlbmRlci9ldmVudC1yZW5kZXItd2Vlay9ldmVudC1yZW5kZXItd2Vlay5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXZlbnRSZW5kZXJNb250aENvbXBvbmVudCB9IGZyb20gJy4vZXZlbnQtcmVuZGVyL2V2ZW50LXJlbmRlci1tb250aC9ldmVudC1yZW5kZXItbW9udGguY29tcG9uZW50JztcblxuY29uc3QgTWF0ZXJpYWxNb2R1bGVzID0gW1xuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRXZlbnREaXNwbGF5Q29tcG9uZW50LFxuICAgICAgICBFdmVudFJlbmRlckRheUNvbXBvbmVudCxcbiAgICAgICAgRXZlbnRSZW5kZXJXZWVrQ29tcG9uZW50LFxuICAgICAgICBFdmVudFJlbmRlck1vbnRoQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIC4uLk1hdGVyaWFsTW9kdWxlc1xuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBFdmVudERpc3BsYXlDb21wb25lbnQsXG4gICAgICAgIEV2ZW50UmVuZGVyRGF5Q29tcG9uZW50LFxuICAgICAgICBFdmVudFJlbmRlcldlZWtDb21wb25lbnQsXG4gICAgICAgIEV2ZW50UmVuZGVyTW9udGhDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgYm9vdHN0cmFwOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRDb21wb25lbnRzTW9kdWxlIHsgfVxuIl19
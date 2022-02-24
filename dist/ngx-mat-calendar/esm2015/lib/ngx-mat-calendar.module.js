import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatCalendarComponent } from './ngx-mat-calendar.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { DayViewModule } from './components/day-view/day-view.module';
import { WeekViewModule } from './components/week-view/week-view.module';
import { MonthViewModule } from './components/month-view/month-view.module';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { LocaleDateAdapter } from './other/DateAdapter';
import { FormattingService } from './services/formatting.service';
import { KeyboardShortcutDialogComponent } from './components/dialogs/keyboard-shortcut-dialog/keyboard-shortcut-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import * as i0 from "@angular/core";
const MaterialModules = [
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule
];
const ViewModules = [
    DayViewModule,
    WeekViewModule,
    MonthViewModule
];
export class NgxMatCalendarModule {
}
NgxMatCalendarModule.ɵfac = function NgxMatCalendarModule_Factory(t) { return new (t || NgxMatCalendarModule)(); };
NgxMatCalendarModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxMatCalendarModule });
NgxMatCalendarModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        FormattingService,
        {
            provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
            useValue: {
                useUtc: true
            }
        }, {
            provide: DateAdapter,
            useClass: LocaleDateAdapter
        }
    ], imports: [[
            BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            ...ViewModules,
            ...MaterialModules
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxMatCalendarModule, { declarations: [NgxMatCalendarComponent,
        KeyboardShortcutDialogComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule, DayViewModule,
        WeekViewModule,
        MonthViewModule, MatCardModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        MatMenuModule,
        MatDialogModule,
        MatDividerModule], exports: [NgxMatCalendarComponent,
        KeyboardShortcutDialogComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxMatCalendarModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NgxMatCalendarComponent,
                    KeyboardShortcutDialogComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ...ViewModules,
                    ...MaterialModules
                ],
                exports: [
                    NgxMatCalendarComponent,
                    KeyboardShortcutDialogComponent
                ],
                providers: [
                    FormattingService,
                    {
                        provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
                        useValue: {
                            useUtc: true
                        }
                    }, {
                        provide: DateAdapter,
                        useClass: LocaleDateAdapter
                    }
                ],
                bootstrap: []
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1jYWxlbmRhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvbmd4LW1hdC1jYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQ25JLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRTNELE1BQU0sZUFBZSxHQUFHO0lBQ3BCLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRztJQUNoQixhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7Q0FDbEIsQ0FBQztBQWdDRixNQUFNLE9BQU8sb0JBQW9COzt3RkFBcEIsb0JBQW9CO3dEQUFwQixvQkFBb0I7NkRBZGxCO1FBQ1AsaUJBQWlCO1FBQ2pCO1lBQ0ksT0FBTyxFQUFFLCtCQUErQjtZQUN4QyxRQUFRLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLElBQUk7YUFDZjtTQUNKLEVBQUU7WUFDQyxPQUFPLEVBQUUsV0FBVztZQUNwQixRQUFRLEVBQUUsaUJBQWlCO1NBQzlCO0tBQ0osWUF0QlE7WUFDTCxhQUFhO1lBQ2IsV0FBVztZQUNYLG1CQUFtQjtZQUNuQixHQUFHLFdBQVc7WUFDZCxHQUFHLGVBQWU7U0FDckI7d0ZBbUJRLG9CQUFvQixtQkE1QnpCLHVCQUF1QjtRQUN2QiwrQkFBK0IsYUFHL0IsYUFBYTtRQUNiLFdBQVc7UUFDWCxtQkFBbUIsRUFidkIsYUFBYTtRQUNiLGNBQWM7UUFDZCxlQUFlLEVBakJmLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGFBQWE7UUFDYixlQUFlO1FBQ2YsZ0JBQWdCLGFBc0JaLHVCQUF1QjtRQUN2QiwrQkFBK0I7dUZBZ0IxQixvQkFBb0I7Y0E5QmhDLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsdUJBQXVCO29CQUN2QiwrQkFBK0I7aUJBQ2xDO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxhQUFhO29CQUNiLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixHQUFHLFdBQVc7b0JBQ2QsR0FBRyxlQUFlO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsdUJBQXVCO29CQUN2QiwrQkFBK0I7aUJBQ2xDO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCO3dCQUNJLE9BQU8sRUFBRSwrQkFBK0I7d0JBQ3hDLFFBQVEsRUFBRTs0QkFDTixNQUFNLEVBQUUsSUFBSTt5QkFDZjtxQkFDSixFQUFFO3dCQUNDLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixRQUFRLEVBQUUsaUJBQWlCO3FCQUM5QjtpQkFDSjtnQkFDRCxTQUFTLEVBQUUsRUFBRTthQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neE1hdENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtbWF0LWNhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRDYXJkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIsIE1hdE5hdGl2ZURhdGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXREYXRlcGlja2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBEYXlWaWV3TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL2RheS12aWV3L2RheS12aWV3Lm1vZHVsZSc7XG5pbXBvcnQgeyBXZWVrVmlld01vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy93ZWVrLXZpZXcvd2Vlay12aWV3Lm1vZHVsZSc7XG5pbXBvcnQgeyBNb250aFZpZXdNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9udGgtdmlldy9tb250aC12aWV3Lm1vZHVsZSc7XG5pbXBvcnQgeyBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHsgTG9jYWxlRGF0ZUFkYXB0ZXIgfSBmcm9tICcuL290aGVyL0RhdGVBZGFwdGVyJztcbmltcG9ydCB7IEZvcm1hdHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mb3JtYXR0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgS2V5Ym9hcmRTaG9ydGN1dERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2dzL2tleWJvYXJkLXNob3J0Y3V0LWRpYWxvZy9rZXlib2FyZC1zaG9ydGN1dC1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXREaXZpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuXG5jb25zdCBNYXRlcmlhbE1vZHVsZXMgPSBbXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGVcbl07XG5cbmNvbnN0IFZpZXdNb2R1bGVzID0gW1xuICAgIERheVZpZXdNb2R1bGUsXG4gICAgV2Vla1ZpZXdNb2R1bGUsXG4gICAgTW9udGhWaWV3TW9kdWxlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZ3hNYXRDYWxlbmRhckNvbXBvbmVudCxcbiAgICAgICAgS2V5Ym9hcmRTaG9ydGN1dERpYWxvZ0NvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgLi4uVmlld01vZHVsZXMsXG4gICAgICAgIC4uLk1hdGVyaWFsTW9kdWxlc1xuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOZ3hNYXRDYWxlbmRhckNvbXBvbmVudCxcbiAgICAgICAgS2V5Ym9hcmRTaG9ydGN1dERpYWxvZ0NvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEZvcm1hdHRpbmdTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TLFxuICAgICAgICAgICAgdXNlVmFsdWU6IHtcbiAgICAgICAgICAgICAgICB1c2VVdGM6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsXG4gICAgICAgICAgICB1c2VDbGFzczogTG9jYWxlRGF0ZUFkYXB0ZXJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXRDYWxlbmRhck1vZHVsZSB7IH1cbiJdfQ==
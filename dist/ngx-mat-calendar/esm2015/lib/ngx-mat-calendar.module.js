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
const ɵ0 = {
    useUtc: true
};
export class NgxMatCalendarModule {
}
NgxMatCalendarModule.decorators = [
    { type: NgModule, args: [{
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
                        useValue: ɵ0
                    },
                    {
                        provide: DateAdapter,
                        useClass: LocaleDateAdapter
                    }
                ],
                bootstrap: []
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdC1jYWxlbmRhci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0LWNhbGVuZGFyL3NyYy9saWIvbmd4LW1hdC1jYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQ25JLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsTUFBTSxlQUFlLEdBQUc7SUFDcEIsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkIsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtDQUNsQixDQUFDO1dBc0JvQjtJQUNOLE1BQU0sRUFBRSxJQUFJO0NBQ2Y7QUFRYixNQUFNLE9BQU8sb0JBQW9COzs7WUE5QmhDLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsdUJBQXVCO29CQUN2QiwrQkFBK0I7aUJBQ2xDO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxhQUFhO29CQUNiLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixHQUFHLFdBQVc7b0JBQ2QsR0FBRyxlQUFlO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ0wsdUJBQXVCO29CQUN2QiwrQkFBK0I7aUJBQ2xDO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxpQkFBaUI7b0JBQ2pCO3dCQUNJLE9BQU8sRUFBRSwrQkFBK0I7d0JBQ3hDLFFBQVEsSUFFUDtxQkFDSjtvQkFBRTt3QkFDQyxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsUUFBUSxFQUFFLGlCQUFpQjtxQkFDOUI7aUJBQ0o7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hNYXRDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LW1hdC1jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IERhdGVBZGFwdGVyLCBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgRGF5Vmlld01vZHVsZSB9IGZyb20gJy4vY29tcG9uZW50cy9kYXktdmlldy9kYXktdmlldy5tb2R1bGUnO1xuaW1wb3J0IHsgV2Vla1ZpZXdNb2R1bGUgfSBmcm9tICcuL2NvbXBvbmVudHMvd2Vlay12aWV3L3dlZWstdmlldy5tb2R1bGUnO1xuaW1wb3J0IHsgTW9udGhWaWV3TW9kdWxlIH0gZnJvbSAnLi9jb21wb25lbnRzL21vbnRoLXZpZXcvbW9udGgtdmlldy5tb2R1bGUnO1xuaW1wb3J0IHsgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7IExvY2FsZURhdGVBZGFwdGVyIH0gZnJvbSAnLi9vdGhlci9EYXRlQWRhcHRlcic7XG5pbXBvcnQgeyBGb3JtYXR0aW5nU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZm9ybWF0dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEtleWJvYXJkU2hvcnRjdXREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9ncy9rZXlib2FyZC1zaG9ydGN1dC1kaWFsb2cva2V5Ym9hcmQtc2hvcnRjdXQtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcblxuY29uc3QgTWF0ZXJpYWxNb2R1bGVzID0gW1xuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlXG5dO1xuXG5jb25zdCBWaWV3TW9kdWxlcyA9IFtcbiAgICBEYXlWaWV3TW9kdWxlLFxuICAgIFdlZWtWaWV3TW9kdWxlLFxuICAgIE1vbnRoVmlld01vZHVsZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTmd4TWF0Q2FsZW5kYXJDb21wb25lbnQsXG4gICAgICAgIEtleWJvYXJkU2hvcnRjdXREaWFsb2dDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIC4uLlZpZXdNb2R1bGVzLFxuICAgICAgICAuLi5NYXRlcmlhbE1vZHVsZXNcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmd4TWF0Q2FsZW5kYXJDb21wb25lbnQsXG4gICAgICAgIEtleWJvYXJkU2hvcnRjdXREaWFsb2dDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBGb3JtYXR0aW5nU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUyxcbiAgICAgICAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgICAgICAgICAgdXNlVXRjOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxuICAgICAgICAgICAgdXNlQ2xhc3M6IExvY2FsZURhdGVBZGFwdGVyXG4gICAgICAgIH1cbiAgICBdLFxuICAgIGJvb3RzdHJhcDogW11cbn0pXG5leHBvcnQgY2xhc3MgTmd4TWF0Q2FsZW5kYXJNb2R1bGUgeyB9XG4iXX0=
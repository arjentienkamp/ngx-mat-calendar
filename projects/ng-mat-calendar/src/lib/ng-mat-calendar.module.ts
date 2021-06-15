import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgMatCalendarComponent } from './ng-mat-calendar.component';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';

import { DayViewModule } from './components/day-view/day-view.module';
import { WeekViewModule } from './components/week-view/week-view.module';
import { MonthViewModule } from './components/month-view/month-view.module';

import { EnumToArrayPipe } from './pipes/enumToArray';
import { Capitalize } from './pipes/capitalize';

import { FormattingService } from './services/formatting.service';

import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { LocaleDateAdapter } from './other/DateAdapter';

const MaterialModules = [
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatMenuModule
];

const ViewModules = [
    DayViewModule,
    WeekViewModule,
    MonthViewModule
];

const Pipes = [
    Capitalize,
    EnumToArrayPipe
];

@NgModule({
    declarations: [
        NgMatCalendarComponent,
        ...Pipes
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ...ViewModules,
        ...MaterialModules
    ],
    exports: [
        NgMatCalendarComponent
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
})
export class NgMatCalendarModule { }

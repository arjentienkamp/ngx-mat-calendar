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

@NgModule({
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
            provide: DateAdapter,
            useClass: LocaleDateAdapter
        }
    ],
    bootstrap: []
})
export class NgxMatCalendarModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgMatCalendarComponent } from './ng-mat-calendar.component';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { EventDisplayComponent } from './components/event-display/event-display.component';
import { EventRenderComponent } from './components/event-render/event-render.component';
import { FormattingService } from './services/formatting.service';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { LocaleDateAdapter } from './other/DateAdapter';

@NgModule({
    declarations: [
        NgMatCalendarComponent,
        EventDisplayComponent,
        EventRenderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule
    ],
    exports: [
        NgMatCalendarComponent
    ],
    entryComponents: [
        EventRenderComponent
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

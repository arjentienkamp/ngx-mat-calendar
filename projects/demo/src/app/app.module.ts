import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgxMatCalendarModule } from 'projects/ngx-mat-calendar/src/lib/ngx-mat-calendar.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EventRenderMonthCustomComponent } from './component/event-render-month-custom/event-render-month-custom.component';

const MaterialModules = [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule
];

@NgModule({
    declarations: [
        AppComponent,
        EventRenderMonthCustomComponent
    ],
    imports: [
        BrowserModule,
        NgxMatCalendarModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ...MaterialModules
    ],
    entryComponents: [
        // EventRenderTestComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

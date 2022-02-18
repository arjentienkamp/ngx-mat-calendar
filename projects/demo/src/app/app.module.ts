import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { NgMatCalendarModule } from 'projects/ng-mat-calendar/src/lib/ng-mat-calendar.module';
// import { EventRenderTestComponent } from './component/event-render-test/event-render-test.component';

const MaterialModules = [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
];

@NgModule({
    declarations: [
        AppComponent,
        // EventRenderTestComponent
    ],
    imports: [
        BrowserModule,
        NgMatCalendarModule,
        BrowserAnimationsModule,
        ...MaterialModules
    ],
    entryComponents: [
        // EventRenderTestComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

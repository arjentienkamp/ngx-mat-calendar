import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';

import { NgMatCalendarComponent } from './ng-mat-calendar.component';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EventDisplayComponent } from './components/event-display/event-display.component';
import { EventRenderComponent } from './components/event-render/event-render.component';

@NgModule({
    declarations: [
        NgMatCalendarComponent,
        EventDisplayComponent,
        EventRenderComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        MatCardModule,
        MatTooltipModule
    ],
    exports: [
        NgMatCalendarComponent
    ],
    entryComponents: [
        EventRenderComponent
    ],
    providers: [],
    bootstrap: []
})
export class NgMatCalendarModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgMatCalendarComponent } from './ng-mat-calendar.component';

import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { EventDisplayComponent } from './components/event-display/event-display.component';
import { EventRenderComponent } from './components/event-render/event-render.component';
import { FormattingService } from './services/formatting.service';

@NgModule({
    declarations: [
        NgMatCalendarComponent,
        EventDisplayComponent,
        EventRenderComponent
    ],
    imports: [
        BrowserModule,
        MatCardModule,
        MatButtonModule,
        MatTooltipModule,
        MatIconModule
    ],
    exports: [
        NgMatCalendarComponent
    ],
    entryComponents: [
        EventRenderComponent
    ],
    providers: [
        FormattingService
    ],
    bootstrap: []
})
export class NgMatCalendarModule { }

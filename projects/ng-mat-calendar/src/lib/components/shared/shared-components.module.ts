import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { EventDisplayComponent } from './event-display/event-display.component';
import { EventRenderDayComponent } from './event-render/event-render-day/event-render-day.component';
import { EventRenderWeekComponent } from './event-render/event-render-week/event-render-week.component';
import { EventRenderMonthComponent } from './event-render/event-render-month/event-render-month.component';

const MaterialModules = [
    MatIconModule
];

@NgModule({
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
})
export class SharedComponentsModule { }

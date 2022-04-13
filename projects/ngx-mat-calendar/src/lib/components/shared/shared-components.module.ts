import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EventDisplayComponent } from './event-display/event-display.component';
import { EventRenderDayComponent } from './event-render/event-render-day/event-render-day.component';
import { EventRenderWeekComponent } from './event-render/event-render-week/event-render-week.component';
import { EventRenderMonthComponent } from './event-render/event-render-month/event-render-month.component';
import { EventRenderBaseComponent } from './event-render/event-render-base.component';
import { EventDisplayDirective } from './event-display/event-display.directive';

const MaterialModules = [
    MatIconModule,
    MatTooltipModule
];

@NgModule({
    declarations: [
        EventDisplayComponent,
        EventRenderDayComponent,
        EventRenderWeekComponent,
        EventRenderMonthComponent,
        EventDisplayDirective,
        EventRenderBaseComponent
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
    bootstrap: [],
    entryComponents: [
        EventRenderDayComponent,
        EventRenderWeekComponent,
        EventRenderMonthComponent
    ]
})
export class SharedComponentsModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WeekViewComponent } from './week-view.component';

import { MatIconModule } from '@angular/material/icon';

import { EventDisplayComponent } from '../event-display/event-display.component';
import { EventRenderComponent } from '../event-render/event-render.component';

import { FormattingService } from '../../services/formatting.service';

const MaterialModules = [
    MatIconModule
];

@NgModule({
    declarations: [
        WeekViewComponent,
        EventDisplayComponent,
        EventRenderComponent
    ],
    imports: [
        BrowserModule,
        ...MaterialModules
    ],
    exports: [
        WeekViewComponent
    ],
    entryComponents: [
        EventRenderComponent
    ],
    providers: [
        FormattingService
    ],
    bootstrap: []
})
export class WeekViewModule { }

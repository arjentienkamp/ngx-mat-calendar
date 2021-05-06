import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DayViewComponent } from './day-view.component';

import { MatIconModule } from '@angular/material/icon';

import { FormattingService } from '../../services/formatting.service';

const MaterialModules = [
    MatIconModule
];

@NgModule({
    declarations: [
        DayViewComponent
    ],
    imports: [
        BrowserModule,
        ...MaterialModules
    ],
    exports: [
        DayViewComponent
    ],
    entryComponents: [],
    providers: [
        FormattingService
    ],
    bootstrap: []
})
export class DayViewModule { }

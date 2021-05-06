import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MonthViewComponent } from './month-view.component';

import { MatIconModule } from '@angular/material/icon';

import { FormattingService } from '../../services/formatting.service';

const MaterialModules = [
    MatIconModule
];

@NgModule({
    declarations: [
        MonthViewComponent
    ],
    imports: [
        BrowserModule,
        ...MaterialModules
    ],
    exports: [
        MonthViewComponent
    ],
    entryComponents: [],
    providers: [
        FormattingService
    ],
    bootstrap: []
})
export class MonthViewModule { }

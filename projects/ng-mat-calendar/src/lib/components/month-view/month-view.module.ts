import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MonthViewComponent } from './month-view.component';

@NgModule({
    declarations: [
        MonthViewComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        MonthViewComponent
    ],
    entryComponents: [],
    providers: [],
    bootstrap: []
})
export class MonthViewModule { }

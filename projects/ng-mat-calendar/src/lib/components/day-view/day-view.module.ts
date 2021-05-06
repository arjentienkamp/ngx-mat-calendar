import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DayViewComponent } from './day-view.component';

@NgModule({
    declarations: [
        DayViewComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        DayViewComponent
    ],
    entryComponents: [],
    providers: [],
    bootstrap: []
})
export class DayViewModule { }

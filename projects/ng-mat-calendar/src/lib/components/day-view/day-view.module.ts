import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DayViewComponent } from './day-view.component';
import { SharedComponentsModule } from '../shared/shared-components.module';

@NgModule({
    declarations: [
        DayViewComponent
    ],
    imports: [
        BrowserModule,
        SharedComponentsModule
    ],
    exports: [
        DayViewComponent
    ],
    entryComponents: [],
    providers: [],
    bootstrap: []
})
export class DayViewModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WeekViewComponent } from './week-view.component';
import { SharedComponentsModule } from '../shared/shared-components.module';

@NgModule({
    declarations: [
        WeekViewComponent
    ],
    imports: [
        BrowserModule,
        SharedComponentsModule
    ],
    exports: [
        WeekViewComponent
    ],
    entryComponents: [],
    providers: [],
    bootstrap: []
})
export class WeekViewModule { }

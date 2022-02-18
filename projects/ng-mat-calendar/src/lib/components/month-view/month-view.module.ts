import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { MonthViewComponent } from './month-view.component';

@NgModule({
    declarations: [
        MonthViewComponent
    ],
    imports: [
        BrowserModule,
        SharedComponentsModule
    ],
    exports: [
        MonthViewComponent
    ],
    entryComponents: [],
    providers: [],
    bootstrap: []
})
export class MonthViewModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DayViewComponent } from './day-view.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    declarations: [
        DayViewComponent
    ],
    imports: [
        BrowserModule,
        SharedComponentsModule,
        PipesModule
    ],
    exports: [
        DayViewComponent
    ],
    entryComponents: [],
    providers: [],
    bootstrap: []
})
export class DayViewModule { }

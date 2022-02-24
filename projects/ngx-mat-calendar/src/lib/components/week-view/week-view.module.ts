import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeekViewComponent } from './week-view.component';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    declarations: [
        WeekViewComponent
    ],
    imports: [
        BrowserModule,
        SharedComponentsModule,
        PipesModule
    ],
    exports: [
        WeekViewComponent
    ],
    providers: [],
    bootstrap: []
})
export class WeekViewModule { }

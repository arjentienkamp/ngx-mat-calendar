import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { MonthViewComponent } from './month-view.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    declarations: [
        MonthViewComponent
    ],
    imports: [
        BrowserModule,
        SharedComponentsModule,
        OverlayModule,
        PipesModule
    ],
    exports: [
        MonthViewComponent
    ],
    entryComponents: [],
    providers: [],
    bootstrap: []
})
export class MonthViewModule { }

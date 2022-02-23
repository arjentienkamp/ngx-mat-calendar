import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { MonthViewComponent } from './month-view.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { LimitPipe } from '../../pipes/limit.pipe';

@NgModule({
    declarations: [
        MonthViewComponent,
        LimitPipe
    ],
    imports: [
        BrowserModule,
        SharedComponentsModule,
        OverlayModule
    ],
    exports: [
        MonthViewComponent
    ],
    entryComponents: [],
    providers: [],
    bootstrap: []
})
export class MonthViewModule { }

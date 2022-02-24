import { NgModule } from '@angular/core';
import { AllDayEventPipe } from './all-day-event.pipe';
import { LimitPipe } from './limit.pipe';

@NgModule({
    declarations: [
        LimitPipe,
        AllDayEventPipe
    ],
    imports: [],
    exports: [
        LimitPipe,
        AllDayEventPipe
    ],
    providers: [],
    bootstrap: []
})
export class PipesModule { }

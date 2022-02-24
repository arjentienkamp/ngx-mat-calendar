import { NgModule } from '@angular/core';
import { AllDayEventPipe } from './all-day-event.pipe';
import { LimitPipe } from './limit.pipe';
export class PipesModule {
}
PipesModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL3BpcGVzL3BpcGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBZXpDLE1BQU0sT0FBTyxXQUFXOzs7WUFidkIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRTtvQkFDVixTQUFTO29CQUNULGVBQWU7aUJBQ2xCO2dCQUNELE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRTtvQkFDTCxTQUFTO29CQUNULGVBQWU7aUJBQ2xCO2dCQUNELFNBQVMsRUFBRSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxFQUFFO2FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsbERheUV2ZW50UGlwZSB9IGZyb20gJy4vYWxsLWRheS1ldmVudC5waXBlJztcbmltcG9ydCB7IExpbWl0UGlwZSB9IGZyb20gJy4vbGltaXQucGlwZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExpbWl0UGlwZSxcbiAgICAgICAgQWxsRGF5RXZlbnRQaXBlXG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIExpbWl0UGlwZSxcbiAgICAgICAgQWxsRGF5RXZlbnRQaXBlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIGJvb3RzdHJhcDogW11cbn0pXG5leHBvcnQgY2xhc3MgUGlwZXNNb2R1bGUgeyB9XG4iXX0=
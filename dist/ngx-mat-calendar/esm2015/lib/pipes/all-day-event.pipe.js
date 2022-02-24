import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class AllDayEventPipe {
    transform(items, allDay) {
        if (allDay) {
            return items.filter(item => item.allDay);
        }
        return items.filter(item => !item.allDay);
    }
}
AllDayEventPipe.ɵfac = function AllDayEventPipe_Factory(t) { return new (t || AllDayEventPipe)(); };
AllDayEventPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "allDayEventPipe", type: AllDayEventPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AllDayEventPipe, [{
        type: Pipe,
        args: [{
                name: 'allDayEventPipe'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLWRheS1ldmVudC5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL3BpcGVzL2FsbC1kYXktZXZlbnQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGVBQWU7SUFDeEIsU0FBUyxDQUFDLEtBQVksRUFBRSxNQUFlO1FBQ25DLElBQUksTUFBTSxFQUFFO1lBQ1IsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OEVBUFEsZUFBZTt5RUFBZixlQUFlO3VGQUFmLGVBQWU7Y0FIM0IsSUFBSTtlQUFDO2dCQUNGLElBQUksRUFBRSxpQkFBaUI7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnYWxsRGF5RXZlbnRQaXBlJ1xufSlcbmV4cG9ydCBjbGFzcyBBbGxEYXlFdmVudFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBhbGxEYXk6IGJvb2xlYW4pOiBhbnkge1xuICAgICAgICBpZiAoYWxsRGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5hbGxEYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdGVtID0+ICFpdGVtLmFsbERheSk7XG4gICAgfVxufVxuIl19
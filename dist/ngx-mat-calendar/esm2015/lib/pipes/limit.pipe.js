import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class LimitPipe {
    transform(items, limit) {
        return items.slice(0, limit);
    }
}
LimitPipe.ɵfac = function LimitPipe_Factory(t) { return new (t || LimitPipe)(); };
LimitPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "limitPipe", type: LimitPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LimitPipe, [{
        type: Pipe,
        args: [{
                name: 'limitPipe'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGltaXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1tYXQtY2FsZW5kYXIvc3JjL2xpYi9waXBlcy9saW1pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sU0FBUztJQUNsQixTQUFTLENBQUMsS0FBWSxFQUFFLEtBQWE7UUFDakMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztrRUFIUSxTQUFTOzZEQUFULFNBQVM7dUZBQVQsU0FBUztjQUhyQixJQUFJO2VBQUM7Z0JBQ0YsSUFBSSxFQUFFLFdBQVc7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnbGltaXRQaXBlJ1xufSlcbmV4cG9ydCBjbGFzcyBMaW1pdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBsaW1pdDogbnVtYmVyKTogYW55IHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLnNsaWNlKDAsIGxpbWl0KTtcbiAgICB9XG59XG4iXX0=
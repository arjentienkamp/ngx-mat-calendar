import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[eventDisplay]'
})
export class EventDisplayDirective {
    constructor(
        public viewContainerRef: ViewContainerRef
    ) { }
}

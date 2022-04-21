import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[eventDisplay]'
})
export class EventDisplayDirective {
    constructor(
        public viewContainerRef: ViewContainerRef
    ) { }
}

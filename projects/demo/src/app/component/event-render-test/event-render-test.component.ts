import { Component, Input, OnInit } from '@angular/core';
import { EventRenderComponent } from 'projects/ng-mat-calendar/src/lib/components/shared/event-render/event-render.component';
import { CalendarEvent } from 'projects/ng-mat-calendar/src/lib/models/CalendarEvent';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-render-test',
    templateUrl: './event-render-test.component.html',
    styleUrls: ['./event-render-test.component.scss']
})
export class EventRenderTestComponent extends EventRenderComponent implements OnInit {
    // @Input() event!: CalendarEvent;
    // startTime = this.event.startTime;
    // endTime = '';

    // constructor(startTime: Date) {
    //     super(startTime);
    // }

    // ngOnInit(): void {
    //     this.startTime = this.formattingService.getTime(this.event.startTime);
    //     this.endTime = this.formattingService.getTime(this.event.endTime);
    // }
}

import { Component, Input, OnInit } from '@angular/core';
import { format, isSameDay } from 'date-fns';
import { CalendarEvent } from '../../../models/CalendarEvent';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-render',
    templateUrl: './event-render.component.html',
    styleUrls: ['./event-render.component.scss']
})
export class EventRenderComponent implements OnInit {
    @Input() event!: CalendarEvent;
    @Input() date!: Date;

    startTime = '';
    endTime = '';
    isSameDay = false;
    eventEndsToday = false;

    constructor() {}

    ngOnInit(): void {
        this.startTime = format(this.event.startTime, 'HH:mm');
        this.endTime = format(this.event.endTime, 'HH:mm');
        this.isSameDay = isSameDay(this.event.startTime, this.event.endTime);
        this.eventEndsToday = isSameDay(this.date, this.event.endTime);
    }
}

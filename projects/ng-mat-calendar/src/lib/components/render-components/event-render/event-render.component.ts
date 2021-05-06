import { Component, Input, OnInit } from '@angular/core';
import isSameDay from 'date-fns/isSameDay';
import { CalendarEvent } from '../../../models/CalendarEvent';
import { FormattingService } from '../../../services/formatting.service';

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

    constructor(
        public formattingService: FormattingService
    ) {}

    ngOnInit(): void {
        this.startTime = this.formattingService.getTime(this.event.startTime);
        this.endTime = this.formattingService.getTime(this.event.endTime);
        this.isSameDay = isSameDay(this.event.startTime, this.event.endTime);
        this.eventEndsToday = isSameDay(this.date, this.event.endTime);
    }
}

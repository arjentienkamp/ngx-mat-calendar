import { Component, Input, OnInit } from '@angular/core';
import { isSameDay } from 'date-fns';
import { CalendarEvent } from '../../../../models/CalendarEvent';
import { FormattingService } from '../../../../services/formatting.service';

@Component({
    selector: 'event-render-week',
    templateUrl: './event-render-week.component.html',
    styleUrls: ['./event-render-week.component.scss']
})
export class EventRenderWeekComponent implements OnInit {
    @Input() event: CalendarEvent;
    @Input() date: Date;

    startTime: string;
    endTime: string;
    isSameDay: boolean;
    endsToday: boolean;

    constructor(
        public formattingService: FormattingService,
    ) {}

    ngOnInit(): void {
        this.startTime = this.formattingService.getTime(this.event.startTime);
        this.endTime = this.formattingService.getTime(this.event.endTime);
        this.isSameDay = isSameDay(this.event.startTime, this.event.endTime);
        this.endsToday = isSameDay(this.date, this.event.endTime);
    }
}

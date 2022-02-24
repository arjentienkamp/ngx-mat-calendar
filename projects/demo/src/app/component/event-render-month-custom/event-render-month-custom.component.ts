import { Component, Input, OnInit } from '@angular/core';
import { isBefore, isSameDay } from 'date-fns';
import { CalendarEvent } from 'projects/ngx-mat-calendar/src/lib/models/CalendarEvent';
import { FormattingService } from 'projects/ngx-mat-calendar/src/lib/services/formatting.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-render-month-custom',
    templateUrl: './event-render-month-custom.component.html',
    styleUrls: ['./event-render-month-custom.component.scss']
})
export class EventRenderMonthCustomComponent implements OnInit {
    @Input() event: CalendarEvent;
    @Input() date: Date;

    startTime: string;
    endTime: string;
    isSameDay: boolean;
    endsToday: boolean;
    eventTooltip: string;

    constructor(
        public formattingService: FormattingService,
    ) {}

    ngOnInit(): void {
        this.startTime = this.formattingService.getTime(this.event.startTime);
        this.endTime = this.formattingService.getTime(this.event.endTime);
        this.isSameDay = isSameDay(this.event.startTime, this.event.endTime);
        this.endsToday = isSameDay(this.date, this.event.endTime);

        this.eventTooltip = this.getEventTooltip();
    }

    isPastEvent(): boolean {
        return isBefore(this.event.date, new Date());
    }

    getEventTooltip(): string {
        if (this.event.location) {
            return `${this.event.title} (${this.startTime} - ${this.endTime}) @ ${this.event.location}`;
        }

        return `${this.event.title} (${this.startTime} - ${this.endTime})`;
    }
}

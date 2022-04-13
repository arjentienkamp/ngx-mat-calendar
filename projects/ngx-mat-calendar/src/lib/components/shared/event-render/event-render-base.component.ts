import { Component, Input, OnInit } from '@angular/core';
import { isBefore, isSameDay } from 'date-fns';
import { CalendarEvent } from '../../../models/CalendarEvent';
import { DisplayComponent } from '../../../models/DisplayComponent';
import { FormattingService } from '../../../services/formatting.service';

@Component({
    template: ''
})
export class EventRenderBaseComponent implements DisplayComponent, OnInit {
    @Input() event: CalendarEvent;
    @Input() date: Date;

    startTime: string;
    endTime: string;
    isSameDay: boolean;
    endsToday: boolean;
    eventTooltip: string;

    constructor(
        protected formattingService: FormattingService
    ) {}

    ngOnInit(): void {
        this.startTime = this.formattingService.getTime(this.event.startTime);
        this.endTime = this.formattingService.getTime(this.event.endTime);
        this.isSameDay = isSameDay(this.event.startTime, this.event.endTime);
        this.endsToday = isSameDay(this.date, this.event.endTime);
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

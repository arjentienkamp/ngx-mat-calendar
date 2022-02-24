import { OnInit } from '@angular/core';
import { CalendarEvent } from '../../../../models/CalendarEvent';
import { FormattingService } from '../../../../services/formatting.service';
export declare class EventRenderMonthComponent implements OnInit {
    formattingService: FormattingService;
    event: CalendarEvent;
    date: Date;
    startTime: string;
    endTime: string;
    isSameDay: boolean;
    endsToday: boolean;
    eventTooltip: string;
    constructor(formattingService: FormattingService);
    ngOnInit(): void;
    isPastEvent(): boolean;
    getEventTooltip(): string;
}

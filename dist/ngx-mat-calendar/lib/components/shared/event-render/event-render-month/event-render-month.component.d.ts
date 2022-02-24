import { OnInit } from '@angular/core';
import { CalendarEvent } from '../../../../models/CalendarEvent';
import { FormattingService } from '../../../../services/formatting.service';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<EventRenderMonthComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EventRenderMonthComponent, "event-render-month", never, { "event": "event"; "date": "date"; }, {}, never, never>;
}
//# sourceMappingURL=event-render-month.component.d.ts.map
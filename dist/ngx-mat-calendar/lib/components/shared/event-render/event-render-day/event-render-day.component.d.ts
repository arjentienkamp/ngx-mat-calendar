import { OnInit } from '@angular/core';
import { CalendarEvent } from '../../../../models/CalendarEvent';
import { FormattingService } from '../../../../services/formatting.service';
import * as i0 from "@angular/core";
export declare class EventRenderDayComponent implements OnInit {
    formattingService: FormattingService;
    event: CalendarEvent;
    date: Date;
    startTime: string;
    endTime: string;
    isSameDay: boolean;
    endsToday: boolean;
    constructor(formattingService: FormattingService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<EventRenderDayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EventRenderDayComponent, "event-render-day", never, { "event": "event"; "date": "date"; }, {}, never, never>;
}
//# sourceMappingURL=event-render-day.component.d.ts.map
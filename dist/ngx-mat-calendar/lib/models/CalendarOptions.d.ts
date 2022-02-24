import { EventRenderDayComponent } from '../components/shared/event-render/event-render-day/event-render-day.component';
import { EventRenderMonthComponent } from '../components/shared/event-render/event-render-month/event-render-month.component';
import { EventRenderWeekComponent } from '../components/shared/event-render/event-render-week/event-render-week.component';
import { Views } from './Views';
export declare class CalendarOptions {
    pixelsPerMinute: number;
    dateFormat: string;
    timeFormat: string;
    renderComponent: {
        day: typeof EventRenderDayComponent;
        week: typeof EventRenderWeekComponent;
        month: typeof EventRenderMonthComponent;
    };
    calendarEventType: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    jumpToSpy: boolean;
    enableDatePickerButton: boolean;
    enableAddEventButton: boolean;
    enableViewToggle: boolean;
    enableKeyboardShortcutDialog: boolean;
    locale: string;
    compact: boolean;
    view: Views;
    constructor(init?: Partial<CalendarOptions>);
    get getPixelsPerMinute(): number;
}
//# sourceMappingURL=CalendarOptions.d.ts.map
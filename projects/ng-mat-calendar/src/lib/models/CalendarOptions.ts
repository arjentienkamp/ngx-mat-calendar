import { EventRenderDayComponent } from '../components/shared/event-render/event-render-day/event-render-day.component';
import { EventRenderMonthComponent } from '../components/shared/event-render/event-render-month/event-render-month.component';
import { EventRenderWeekComponent } from '../components/shared/event-render/event-render-week/event-render-week.component';
import { MONTH, Views } from './Views';

export class CalendarOptions {
    pixelsPerMinute = 1.3;
    dateFormat = 'DD-MM-YYYY';
    timeFormat = 'HH:mm';
    renderComponent = {
        day: EventRenderDayComponent,
        week: EventRenderWeekComponent,
        month: EventRenderMonthComponent
    };
    jumpToSpy = true;
    enableDatePickerButton = true;
    enableAddEventButton = true;
    enableViewToggle = true;
    locale = 'nl';
    compact = false;
    view: Views = MONTH;

    constructor(init?: Partial<CalendarOptions>) {
        Object.assign(this, init);
    }

    get getPixelsPerMinute(): number {
        if (this.compact) {
            return this.pixelsPerMinute / 2;
        }

        return this.pixelsPerMinute;
    }
}

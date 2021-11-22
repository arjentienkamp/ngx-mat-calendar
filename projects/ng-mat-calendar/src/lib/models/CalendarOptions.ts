import { EventRenderComponent } from '../components/shared/event-render/event-render.component';
import { Views, WEEK } from './Views';

export class CalendarOptions {
    pixelsPerMinute = 1.3;
    dateFormat = 'DD-MM-YYYY';
    timeFormat = 'HH:mm';
    renderComponent = EventRenderComponent;
    jumpToSpy = true;
    enableDatePickerButton = true;
    enableAddEventButton = true;
    locale = 'nl';
    compact = false;
    view: Views = WEEK;

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

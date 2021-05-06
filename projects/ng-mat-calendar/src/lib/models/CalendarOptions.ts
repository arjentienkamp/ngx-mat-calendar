import { EventRenderComponent } from '../components/render-components/event-render/event-render.component';

export class CalendarOptions {
    pixelsPerMinute = 1.3;
    dateFormat = 'DD-MM-YYYY';
    timeFormat = 'HH:mm';
    renderComponent = EventRenderComponent;
    jumpToSpy = true;
    enableDatePickerButton = true;
    locale = 'nl';
    compact = false;
    view = 'Week'; // make default based on view enum

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

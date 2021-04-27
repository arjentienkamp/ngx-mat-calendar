import { EventRenderComponent } from '../components/event-render/event-render.component';

export class CalendarOptions {
    pixelsPerMinute = 1.3;
    dateFormat = 'DD-MM-YYYY';
    timeFormat = 'HH:mm';
    renderComponent = EventRenderComponent;
    jumpToSpy = true;
    enableDatePickerButton = true;
    enableTooltip = true;
    locale = 'nl';

    constructor(init?: Partial<CalendarOptions>) {
        Object.assign(this, init);
    }

    // get getPixelsPerMinute(): number {
    //     return this.pixelsPerMinute;
    // }

    // public get getTimeFormat(): string {
    //     return this.timeFormat;
    // }
}

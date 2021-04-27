import { EventRenderComponent } from '../components/event-render/event-render.component';

export class CalendarOptions {
    public pixelsPerMinute = 1.3;
    public dateFormat = 'DD-MM-YYYY';
    public timeFormat = 'HH:mm';
    public renderComponent = EventRenderComponent;
    public jumpToSpy = true;
    public enableDatePickerButton = true;
    public enableTooltip = true;
    public locale = 'nl';

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

import { EventRenderComponent } from '../components/event-render/event-render.component';

export class CalendarOptions {
    public pixelsPerMinute = 1.3;
    public dateFormat = 'DD-MM-YYYY';
    public renderComponent = EventRenderComponent;
    public jumpToSpy = true;

    constructor(init?: Partial<CalendarOptions>) {
        Object.assign(this, init);
    }

    get getPixelsPerMinute(): number {
        return this.pixelsPerMinute;
    }
}

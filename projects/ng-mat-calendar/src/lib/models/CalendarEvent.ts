import { colors } from './Colors';

export class CalendarEvent {
    title = '';
    date = new Date();
    startTime = new Date();
    endTime = new Date();

    color?: any = colors.grey;
    offset?: CalendarEventOffset = new CalendarEventOffset();
    location?: string;

    constructor(init?: Partial<CalendarEvent>) {
        Object.assign(this, init);
    }
}

export class CalendarEventOffset {
    offsetTop = 0;
    durationOffset = 0;
    overLappingEvents = 0;
    overlapIndex = 0;
}

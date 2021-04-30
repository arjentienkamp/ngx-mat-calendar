import { colors } from './Colors';

export class CalendarEvent {
    title = '';
    date = new Date();
    startTime = new Date();
    endTime = new Date();

    color?: any = colors.grey;
    offset?: CalendarEventOffset;
    location?: string;

    constructor(init?: Partial<CalendarEvent>) {
        Object.assign(this, init);
    }
}

export interface CalendarEventOffset {
    offsetTop: number;
    durationOffset: number;
}

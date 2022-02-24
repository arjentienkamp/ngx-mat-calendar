import { CalendarEvent } from './CalendarEvent';
export declare class CalendarDay {
    date: Date;
    eventGroups: string[];
    events: CalendarEvent[];
    eventCount: number;
    constructor(init?: Partial<CalendarDay>);
}

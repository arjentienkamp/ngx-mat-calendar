import { CalendarEvent } from './CalendarEvent';

export default interface Calendar {
    days: CalendarDay[];
    monthAndYear: string;
    weeknumber: string;
}

export interface CalendarDay {
    date: Date;
    eventGroups: string[];
    events: CalendarEvent[];
}

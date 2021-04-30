import { CalendarEvent } from './CalendarEvent';

export default interface Calendar {
    days: CalendarDay[];
    monthAndYear: string;
    weeknumber: string;
}

export interface CalendarDay {
    date: Date;
    events: CalendarEvent[];
}

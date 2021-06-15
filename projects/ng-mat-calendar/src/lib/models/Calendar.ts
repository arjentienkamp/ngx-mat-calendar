import { CalendarEvent } from './CalendarEvent';

export default interface Calendar {
    monthAndYear: string;
    weeknumber: string;
}

export interface CalendarDay {
    date: Date;
    eventGroups: string[];
    events: CalendarEvent[];
}

export interface WeekView {
    days: CalendarDay[];
}

export interface DayView {
    events: CalendarEvent[];
}

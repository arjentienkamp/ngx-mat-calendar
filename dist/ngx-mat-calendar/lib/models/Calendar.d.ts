import { CalendarDay } from './CalendarDay';
import { CalendarEvent } from './CalendarEvent';
export default interface Calendar {
    monthAndYear: string;
    weeknumber: string;
}
export interface DayView {
    date: Date;
    eventGroups: string[];
    events: CalendarEvent[];
}
export interface WeekView {
    days: CalendarDay[];
}
export interface MonthView {
    days: CalendarDay[];
}

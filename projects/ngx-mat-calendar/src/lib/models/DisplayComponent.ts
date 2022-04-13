import { CalendarEvent } from './CalendarEvent';

export interface DisplayComponent {
    event: CalendarEvent;
    date: Date;
}

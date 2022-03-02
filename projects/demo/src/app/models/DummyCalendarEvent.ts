import { CalendarEvent } from 'projects/ngx-mat-calendar/src/public-api';

type Modify<T, R> = Omit<T, keyof R> & R;

export interface DummyCalendarEvent extends Modify<CalendarEvent, { startTime: any, endTime: any }> {
    offsetStart: number;
    offsetEnd?: number;
}

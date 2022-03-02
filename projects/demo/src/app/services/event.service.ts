import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CalendarEvent } from 'projects/ngx-mat-calendar/src/lib/models/CalendarEvent';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { events } from './events';
import { add } from 'date-fns';
import { DummyCalendarEvent } from '../models/DummyCalendarEvent';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    constructor(
        private http: HttpClient
    ) { }

    getEventsFromMockService(): Observable<CalendarEvent[]> {
        return this.http.get<any>('').pipe(
            map(res => res)
        );
    }

    getEvents(date: Date): Observable<CalendarEvent[]> {
        const updatedEvents: CalendarEvent[] = events.map(event => {
            return this.updateDates(event, date);
        });

        return of(updatedEvents);
    }

    updateDates(event: DummyCalendarEvent, date: Date): CalendarEvent {
        const beginningOfMonth = new Date(date).setDate(1);

        return {
            title: event.title,
            color: event.color || undefined,
            location: event.location || undefined,
            allDay: event.allDay || false,
            date: new Date(add(beginningOfMonth, { days: event.offsetStart })
                .setHours(event.startTime.hour, event.startTime.minute)),
            startTime: new Date(add(beginningOfMonth, { days: event.offsetStart })
                .setHours(event.startTime.hour, event.startTime.minute)),
            endTime: new Date(add(beginningOfMonth, {
                days: event.offsetEnd ? event.offsetEnd : event.offsetStart
            }).setHours(event.endTime.hour, event.endTime.minute))
        };
    }
}

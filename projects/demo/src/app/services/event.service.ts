import { Injectable } from '@angular/core';
import { DummyEvents } from './dummy-events';
import { BehaviorSubject, Observable } from 'rxjs';
import { add, endOfMonth, getTime, set, startOfMonth, toDate } from 'date-fns';
import { CalendarEvent } from 'projects/ng-mat-calendar/src/lib/models/CalendarEvent';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    constructor(private http: HttpClient) { }

    events: BehaviorSubject<CalendarEvent[]> = new BehaviorSubject(DummyEvents);

    generateRandomDate(start: Date, end: Date): Date {
        const startTime = getTime(start);
        const endTime = getTime(end);
        const randomNumber = (to: number, from: number) => Math.floor(Math.random() * (to - from) + from);

        return toDate(randomNumber(endTime, startTime));
    }

    generateRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomMinutes(): number {
        const minutes = [5, 10, 15, 20, 25, 30, 45];

        return minutes[Math.floor(Math.random() * minutes.length)];
    }

    getEvents(date: Date): Observable<CalendarEvent[]> {
        const monthStart = startOfMonth(date);
        const monthEnd = endOfMonth(date);

        DummyEvents.forEach((event) => {
            const randomStartDate = this.generateRandomDate(monthStart, monthEnd);
            set(randomStartDate, { hours: this.generateRandomNumber(15, 22), minutes: this.getRandomMinutes()});

            const randomEndDate = add(randomStartDate, { hours: this.generateRandomNumber(2, 7), minutes: this.getRandomMinutes()});

            event.date = randomStartDate;
            event.startTime = randomStartDate;
            event.endTime = randomEndDate;
        });

        return this.events.asObservable();
    }

    getEventsFromMockService(): Observable<CalendarEvent[]> {
        return this.http.get<any>('https://5264dcd3-1b99-4346-9417-44cee2e49fa3.mock.pstmn.io').pipe(
            map(res => res)
        );
    }
}

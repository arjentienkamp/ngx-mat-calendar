import { Injectable } from '@angular/core';
import { DummyEvents } from './dummy-events';
import { BehaviorSubject, Observable } from 'rxjs';
import { CalendarEvent } from 'projects/ng-mat-calendar/src/lib/models/Calendar';
import { add, endOfWeek, getTime, isDate, set, startOfWeek, toDate } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class EventService {
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
        const weekStart = startOfWeek(date, { weekStartsOn: 1 });
        const weekEnd = endOfWeek(date, { weekStartsOn: 1 });

        DummyEvents.forEach((event) => {
            const randomStartDate = this.generateRandomDate(weekStart, weekEnd);
            set(randomStartDate, { hours: this.generateRandomNumber(15, 22), minutes: this.getRandomMinutes()});

            const randomEndDate = add(randomStartDate, { hours: this.generateRandomNumber(2, 9), minutes: this.getRandomMinutes()});

            event.date = randomStartDate;
            event.startTime = randomStartDate;
            event.endTime = randomEndDate;
        });

        return this.events.asObservable();
    }
}

import { Injectable } from '@angular/core';
import { DummyEvents } from './dummy-events';
import { BehaviorSubject, Observable } from 'rxjs';
import { CalendarEvent } from 'projects/ng-mat-calendar/src/lib/models/Calendar';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    events: BehaviorSubject<CalendarEvent[]> = new BehaviorSubject(DummyEvents);

    generateRandomDate(start: any, end: any): moment.Moment {
      const startTime = +moment(start);
      const endTime = +moment(end);
      const randomNumber = (to: number, from: number) => Math.floor(Math.random() * (to - from) + from);

      return moment(randomNumber(endTime, startTime));
    }

    generateRandomNumber(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getEvents(date: string): Observable<CalendarEvent[]> {
        const startOfWeek = moment(date).startOf('isoWeek').isoWeekday(1);
        const endOfWeek = moment(date).endOf('isoWeek');

        DummyEvents.forEach((event) => {
          const randomStartDate = this.generateRandomDate(startOfWeek, endOfWeek)
            .set('hour', this.generateRandomNumber(7, 22))
            .toISOString();

          const randomEndDate = moment(randomStartDate)
            .add(this.generateRandomNumber(1, 7), 'hours')
            .toISOString();

          event.date = randomStartDate;
          event.startTime = randomStartDate;
          event.endTime = randomEndDate;
        });

        return this.events.asObservable();
    }
}

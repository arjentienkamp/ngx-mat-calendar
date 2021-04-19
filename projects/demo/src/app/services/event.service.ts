import { Injectable } from '@angular/core';
import { DummyEvents } from './dummy-events';
import { BehaviorSubject, Observable } from 'rxjs';
import { CalendarEvent } from 'projects/ng-mat-calendar/src/lib/models/Calendar';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    events: BehaviorSubject<CalendarEvent[]> = new BehaviorSubject(DummyEvents);

    getEvents(): Observable<CalendarEvent[]> {
        return this.events.asObservable();
    }
}

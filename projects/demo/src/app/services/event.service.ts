import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarEvent } from 'projects/ngx-mat-calendar/src/lib/models/CalendarEvent';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    constructor(
        private http: HttpClient
    ) { }

    getEventsFromMockService(): Observable<CalendarEvent[]> {
        return this.http.get<any>('https://5264dcd3-1b99-4346-9417-44cee2e49fa3.mock.pstmn.io').pipe(
            map(res => res)
        );
    }
}

import { CalendarDay } from '../models/Calendar';
import { CalendarEvent } from '../models/CalendarEvent';
import { v4 as uuidv4 } from 'uuid';
import { areIntervalsOverlapping } from 'date-fns';

export class CalendarService {
    public createEventGroups(day: CalendarDay): CalendarDay {
        day.events.map((event: CalendarEvent) => {
            const uuid = uuidv4();
            let eventGroup: CalendarEvent[] = [];

            if (event.grid) {
                eventGroup = this.getOverlappingEvents(event, day.events, event.grid.eventGroups);

                eventGroup.map((overlapEvent: CalendarEvent) => {
                    if (overlapEvent.grid) {
                        overlapEvent.grid.eventGroups.push(uuid);
                        overlapEvent.grid.eventsInGroup = eventGroup.length;
                    }

                    if (!day.eventGroups.includes(uuid)) {
                        day.eventGroups.push(uuid);
                    }
                });
            }
        });

        this.setEventSizes(day);

        return day;
    }

    private getOverlappingEvents(event: CalendarEvent, events: CalendarEvent[], eventGroups: string[]): CalendarEvent[] {
        return events.filter((compareEvent: CalendarEvent) => {
            const eventsDoOverlap = areIntervalsOverlapping(
                { start: event.startTime, end: event.endTime },
                { start: compareEvent.startTime, end: compareEvent.endTime },
                { inclusive: true }
            );

            let isAlreadyInEventGroup = false;
            if (compareEvent.grid) {
                isAlreadyInEventGroup = compareEvent.grid.eventGroups.some((eventGroup: string) => {
                    return eventGroups.includes(eventGroup);
                });
            }

            return eventsDoOverlap && !isAlreadyInEventGroup;
        });
    }

    private setEventSizes(day: CalendarDay): void {
        day.eventGroups.forEach(eventGroup => {
            const eventGroupEvents = day.events.filter((event: CalendarEvent) => {
                return event.grid?.eventGroups.includes(eventGroup);
            });

            let index = 0;
            eventGroupEvents.forEach((event: CalendarEvent) => {
                if (event.grid) {
                    event.grid.width = 100 / (eventGroupEvents.length);
                    event.grid.offsetLeft = event.grid.width * index;
                }

                // check if already has a width/offsetLeft to determine if it's in eventgroup A or B

                index++;
            });
        });
    }
}

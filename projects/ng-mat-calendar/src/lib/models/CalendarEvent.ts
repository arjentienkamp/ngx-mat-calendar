import { colors } from './Colors';

export class CalendarEvent {
    title = '';
    date = new Date();
    startTime = new Date();
    endTime = new Date();

    color?: any = colors.grey;
    grid?: CalendarEventGrid = new CalendarEventGrid();
    location?: string;

    constructor(init?: Partial<CalendarEvent>) {
        Object.assign(this, init);
    }
}

export class CalendarEventGrid {
    offsetTop = 0;
    offsetLeft = 0;
    width = 100;
    durationOffset = 0;
    eventsInGroup = 0;
    eventGroups: string[] = [];
}

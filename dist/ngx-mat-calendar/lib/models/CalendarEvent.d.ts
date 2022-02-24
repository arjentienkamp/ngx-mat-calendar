export declare class CalendarEvent {
    title: string;
    date: Date;
    startTime: Date;
    endTime: Date;
    allDay?: boolean;
    color?: any;
    grid?: CalendarEventGrid;
    location?: string;
    constructor(init?: Partial<CalendarEvent>);
}
export declare class CalendarEventGrid {
    offsetTop: number;
    offsetLeft: number;
    width: number;
    durationOffset: number;
    eventsInGroup: number;
    eventGroups: string[];
}

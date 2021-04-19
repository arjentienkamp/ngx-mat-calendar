export default interface ICalendar {
    activeDayLanes: Day[];
}

export interface Day {
    date: string;
    events: CalendarEvent[];
}

export interface CalendarEvent {
    title: string;
    date: string;
    offset?: IOffset;
    startTime: string;
    endTime: string;
    location?: string;
}

export interface IOffset {
    offsetTop: number;
    durationOffset: number;
}

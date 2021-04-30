export default interface Calendar {
    days: CalendarDay[];
    monthAndYear: string;
    weeknumber: string;
}

export interface CalendarDay {
    date: Date;
    events: CalendarEvent[];
}

export interface CalendarEvent {
    title: string;
    date: Date;
    offset?: CalendarEventOffset;
    startTime: Date;
    endTime: Date;
    location?: string;
}

export interface CalendarEventOffset {
    offsetTop: number;
    durationOffset: number;
}

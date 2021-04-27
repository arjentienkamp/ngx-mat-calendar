export default interface Calendar {
    days: CalendarDay[];
    monthAndYear: string;
    weeknumber: number;
}

export interface CalendarDay {
    date: string;
    events: CalendarEvent[];
}

export interface CalendarEvent {
    title: string;
    date: string;
    offset?: CalendarEventOffset;
    startTime: string;
    endTime: string;
    location?: string;
}

export interface CalendarEventOffset {
    offsetTop: number;
    durationOffset: number;
}

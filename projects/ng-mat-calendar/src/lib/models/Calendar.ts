export default interface Calendar {
    activeDayLanes: CalendarDay[];
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

export interface DateInfo {
    monthAndYear: string;
    weeknumber: number;
}

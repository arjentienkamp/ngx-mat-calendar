export default interface ICalendar {
    activeDayLanes: IDayLane[];
}

export interface IDayLane {
    date: string;
    events: IDayLaneEvent[];
}

export interface IDayLaneEvent {
    title: string;
    date: string;
    offset: IOffset;
    startTime: string;
    endTime: string;
}

export interface IOffset {
    offsetTop: number;
    durationOffset: number;
}

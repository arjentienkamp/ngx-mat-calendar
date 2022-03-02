import { DummyCalendarEvent } from '../models/DummyCalendarEvent';

export const events: DummyCalendarEvent[] = [
    {
        title: 'Meeting for lunch with the CEO',
        location: 'Office HQ',
        date: new Date(),
        startTime: { hour: 12, minute: 30 },
        endTime: { hour: 14, minute: 15 },
        offsetStart: 2
    }, {
        title: 'Prepare for trip',
        color: '#c8e6c9',
        date: new Date(),
        startTime: { hour: 10, minute: 30 },
        endTime: { hour: 12, minute: 0 },
        offsetStart: 3
    }, {
        title: 'Drive to Varna',
        color: '#c8e6c9',
        date: new Date(),
        startTime: { hour: 22, minute: 30 },
        endTime: { hour: 23, minute: 45 },
        offsetStart: 4
    }, {
        title: 'Order new furniture',
        color: '#c8e6c9',
        allDay: true,
        date: new Date(),
        startTime: { hour: 12, minute: 30 },
        endTime: { hour: 14, minute: 15 },
        offsetStart: 4
    }, {
        title: 'Drinks with colleagues',
        location: 'Beer Garden Bar',
        date: new Date(),
        startTime: { hour: 20, minute: 15 },
        endTime: { hour: 22, minute: 15 },
        offsetStart: 5
    }, {
        title: 'Car repair appointment',
        allDay: true,
        date: new Date(),
        startTime: { hour: 8, minute: 45 },
        endTime: { hour: 9, minute: 0 },
        offsetStart: 9
    }, {
        title: 'Book restaurant',
        allDay: true,
        color: '#c8e6c9',
        date: new Date(),
        startTime: { hour: 12, minute: 30 },
        endTime: { hour: 14, minute: 15 },
        offsetStart: 9
    }, {
        title: 'Shopping with Lisa',
        color: '#ffc1e3',
        date: new Date(),
        startTime: { hour: 13, minute: 30 },
        endTime: { hour: 16, minute: 0 },
        offsetStart: 9
    }, {
        title: 'Dinner with Alice',
        color: '#ffc1e3',
        date: new Date(),
        startTime: { hour: 19, minute: 0 },
        endTime: { hour: 20, minute: 45 },
        offsetStart: 9
    }, {
        title: 'Call Apple Store',
        allDay: true,
        color: '#ffc1e3',
        date: new Date(),
        startTime: { hour: 12, minute: 30 },
        endTime: { hour: 14, minute: 15 },
        offsetStart: 12
    }, {
        title: 'Car repair appointment',
        allDay: true,
        color: '#b3e5fc',
        date: new Date(),
        startTime: { hour: 12, minute: 30 },
        endTime: { hour: 14, minute: 15 },
        offsetStart: 12
    }, {
        title: 'Zoom call with Lindsay',
        color: '#b3e5fc',
        location: 'Home office',
        date: new Date(),
        startTime: { hour: 19, minute: 30 },
        endTime: { hour: 21, minute: 25 },
        offsetStart: 14
    }, {
        title: 'Work on administration',
        color: '#c8e6c9',
        date: new Date(),
        startTime: { hour: 14, minute: 0 },
        endTime: { hour: 15, minute: 30 },
        offsetStart: 14
    }, {
        title: 'Dinner with Paul',
        color: '#c8e6c9',
        date: new Date(),
        startTime: { hour: 18, minute: 30 },
        endTime: { hour: 20, minute: 15 },
        offsetStart: 14
    }, {
        title: 'Office day',
        allDay: true,
        color: '#ffc1e3',
        date: new Date(),
        startTime: { hour: 12, minute: 30 },
        endTime: { hour: 14, minute: 15 },
        offsetStart: 15
    }, {
        title: 'Casino night with friends',
        color: '#ffc1e3',
        date: new Date(),
        startTime: { hour: 20, minute: 45 },
        endTime: { hour: 3, minute: 15 },
        offsetStart: 15,
        offsetEnd: 16
    }, {
        title: 'Lunch with the family',
        color: '#c8e6c9',
        location: 'Coffee and Croissants',
        date: new Date(),
        startTime: { hour: 11, minute: 45 },
        endTime: { hour: 13, minute: 15 },
        offsetStart: 19
    }, {
        title: 'Drinks with the company',
        color: '#ffc1e3',
        date: new Date(),
        startTime: { hour: 19, minute: 0 },
        endTime: { hour: 2, minute: 45 },
        offsetStart: 20,
        offsetEnd: 21
    }, {
        title: 'End of month administration',
        color: '#c8e6c9',
        allDay: true,
        date: new Date(),
        startTime: { hour: 18, minute: 30 },
        endTime: { hour: 20, minute: 15 },
        offsetStart: 27
    }
];

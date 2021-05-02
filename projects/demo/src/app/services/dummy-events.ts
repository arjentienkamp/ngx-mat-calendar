import { colors } from 'projects/ng-mat-calendar/src/lib/models/Colors';

export const DummyEvents = [
    {
        title: 'Drinks with colleagues',
        location: 'Beer Garden Bar',
        date: new Date(),
        startTime: new Date(),
        endTime: new Date()
    }, {
        title: 'Meeting with Bob',
        date: new Date(),
        startTime: new Date(),
        endTime: new Date(),
    }, {
        title: 'Date with Jennifer',
        date: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        color: colors.pink
    }, {
        title: 'Workout with Peter',
        date: new Date(),
        startTime: new Date(),
        endTime: new Date(),
    }, {
        title: 'Zoom call about marketing',
        date: new Date(),
        startTime: new Date(),
        endTime: new Date(),
    }, {
        title: 'Lunch with Lucy',
        location: 'Snack home',
        date: new Date(),
        startTime: new Date(),
        endTime: new Date()
    }, {
        title: 'Car repair appointment',
        date: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        color: colors.green
    }, {
        title: 'Lunch with Jane',
        location: 'Happy Sofia',
        date: new Date(),
        startTime: new Date(),
        endTime: new Date()
    }, {
        title: 'Promotion party',
        date: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        color: colors.blue
    }
];

# Angular Calendar component

This component displays a calendar / timetable in your Angular (Material) project. 

## Demo
Live demo (link)

GIF

## Features
- Display a day/week/month calendar with your events
- Call a function on event click
- Navigate between weeks, jump to today
- Focus on current time on initialization
- Use a custom component for rendering events
- Uses colors of your Material theme
- Locale can be set

## Requirements
- Angular 11+ (tested on Angular 11) + Typescript
- Angular Material Theme within your app (https://material.angular.io)

## Installation and minimal setup
```
npm install ...
```

Initiate default options:
```
this.calendarOptions = new CalendarOptions();
```

Or, change default options:
```
this.calendarOptions = new CalendarOptions({
    enableTooltip: false
    renderComponent: EventRenderTestComponent
    // see CalendarOptions class for full list
});

```

Add the component to the template:

```
<ng-mat-calendar
    [options]="calendarOptions"
    [events]="events"
    (eventClick)="handleEventClick($event)"
    [(date)]="date">
</ng-mat-calendar>
```

When using a custom component for rendering the events, you can optionally extend the Event class to add more data to the event.

```
// example
```

## Inputs
| Property        | Description                                         | Type              | Required |
|-----------------|-----------------------------------------------------|-------------------|----------|
| options         | options have to be passed here                      | CalendarOptions   | true     |
| events          | array of events (i.e from API or other datasource)  | CalendarEvent[]   | true     |
| date            | the date for initiating the calendar                | string (ISO date string)  | true     |

## Outputs
| Property        | Description                                         | Type                          |
|-----------------|-----------------------------------------------------|-------------------------------|
| eventClick      | emits when event is clicked                         | EventEmitter<CalendarEvent>   |
| date            |                                                     |                               |
| dateChange      | emits on date change                                | EventEmitter<string>          |

## Todo
- ...

## License
...
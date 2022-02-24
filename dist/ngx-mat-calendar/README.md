# Angular Calendar Component

This component displays a calendar in your Angular (Material) project. 

## Demo
Live demo (link)

![](http://www.arjentienkamp.com/ngx-mat-calendar/gif-example-1.gif)

## Features
- Display a day/week/month calendar with your events
- Navigate between days/weeks/months, jump to today
- Use a custom component for rendering events
- Uses colors of your Material theme
- Keyboard shortcuts
- Call a function on event click
- Call a function on add button click

## Requirements
- Angular 11+ (tested on Angular 11) + Typescript
- Angular Material Theme within your app (https://material.angular.io)

## Installation and minimal setup
```
npm install @arjentienkamp/ngx-mat-calendar
```

Initiate default options:
```
this.calendarOptions = new CalendarOptions();
```

Or, change default options:
```
this.calendarOptions = new CalendarOptions({
    enableAddEventButton: false,
    view: WEEK
    // see CalendarOptions class for full list
});
```

Add the component to the template:

```
<ngx-mat-calendar
    [options$]="calendarOptions$"
    [events$]="events$"
    [selectedDate$]="date$"
    (eventClick)="handleEventClick($event)"
    (dateChange)="handleDateChange($event)"
    (addButtonClick)="handleAddButtonClick()">
</ngx-mat-calendar>
```

## Inputs
| Property        | Description                                         | Type                            | Required |
|-----------------|-----------------------------------------------------|---------------------------------|----------|
| options$        | options have to be passed here                      | `Observable<CalendarOptions>`   | true     |
| events$         | array of events (i.e from API or other datasource)  | `Observable<CalendarEvent[]>`   | true     |
| selectedDate$   | the date for initiating the calendar                | `Observable<Date>`              | true     |

## Outputs
| Property        | Description                                         | Type                          |
|-----------------|-----------------------------------------------------|-------------------------------|
| eventClick      | emits when event is clicked                         | `EventEmitter<CalendarEvent>` |
| dateChange      | emits on date change                                | `EventEmitter<Date>`          |
| addButtonClick  | emits on add button click                           | `EventEmitter<any>`           |

## Todo
- Unit tests
- CalendarEvent class extendable for custom render component
- Localization

## License
GNU General Public License - Arjen Tienkamp
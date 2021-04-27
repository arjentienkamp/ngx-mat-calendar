# Angular Calendar / Timetable component

This component displays a calendar/ timetable in your Angular (Material) project. 

## Demo

Live demo (link)

GIF

## Features
- Display a week calendar with your events
- Fire a function on event click
- Navigate between weeks, jump to today
- Focus on current time on initialization
- Use a custom component for rendering events
- Uses colors of your Material theme
- Locale can be set

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
    [options]="calendarOptions"                 // the options
    [events]="events"                           // array of events (i.e from API or other datasource)
    (eventClick)="handleEventClick($event)"     // emits when event is clicked
    [(date)]="date">                            // the date for initiating the calendar / emits date on date change
</ng-mat-calendar>
```

When using a custom component for rendering the events, you can optionally extend the Event class to add more data to the event.

```
// example
```

## Inputs

.. table
property-description-type-default

## Outputs

.. table
property-description-type

## Todo


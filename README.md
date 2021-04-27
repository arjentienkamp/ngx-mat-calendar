# Angular Calendar / Timetable component

This component displays a calendar/ timetable in your Angular project. 

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
npm install 
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


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

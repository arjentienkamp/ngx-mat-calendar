import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NgMatCalendarModule } from 'projects/ng-mat-calendar/src/lib/ng-mat-calendar.module';
import { EventRenderTestComponent } from './component/event-render-test/event-render-test.component';

@NgModule({
  declarations: [
    AppComponent,
    EventRenderTestComponent
  ],
  imports: [
    BrowserModule,
    NgMatCalendarModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  entryComponents: [
    EventRenderTestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

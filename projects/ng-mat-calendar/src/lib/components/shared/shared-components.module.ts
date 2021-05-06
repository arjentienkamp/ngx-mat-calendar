import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';

import { EventDisplayComponent } from './event-display/event-display.component';
import { EventRenderComponent } from './event-render/event-render.component';

const MaterialModules = [
    MatIconModule
];

@NgModule({
    declarations: [
        EventDisplayComponent,
        EventRenderComponent
    ],
    imports: [
        BrowserModule,
        ...MaterialModules
    ],
    exports: [
        EventDisplayComponent,
        EventRenderComponent
    ],
    providers: [],
    bootstrap: []
})
export class SharedComponentsModule { }

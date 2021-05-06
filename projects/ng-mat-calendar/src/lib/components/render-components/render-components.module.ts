import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';

import { EventDisplayComponent } from '../render-components/event-display/event-display.component';
import { EventRenderComponent } from '../render-components/event-render/event-render.component';

import { FormattingService } from '../../services/formatting.service';

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
    providers: [
        FormattingService
    ],
    bootstrap: []
})
export class RenderComponentsModule { }

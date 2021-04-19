import { Component, Input, OnInit } from '@angular/core';
import { IDayLaneEvent } from '../../models/Calendar';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-render',
    templateUrl: './event-render.component.html',
    styleUrls: ['./event-render.component.scss']
})
export class EventRenderComponent implements OnInit {
    @Input() event!: IDayLaneEvent;

    constructor() {}

    ngOnInit(): void {}
}

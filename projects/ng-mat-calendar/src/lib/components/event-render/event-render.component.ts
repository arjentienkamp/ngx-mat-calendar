import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent } from '../../models/Calendar';
import { FormattingService } from '../../services/formatting.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'event-render',
    templateUrl: './event-render.component.html',
    styleUrls: ['./event-render.component.scss']
})
export class EventRenderComponent implements OnInit {
    @Input() event!: CalendarEvent;
    startTime = '';
    endTime = '';

    constructor(
        public formattingService: FormattingService
    ) {}

    ngOnInit(): void {
        this.startTime = this.formattingService.getTime(this.event.startTime);
        this.endTime = this.formattingService.getTime(this.event.endTime);
    }
}

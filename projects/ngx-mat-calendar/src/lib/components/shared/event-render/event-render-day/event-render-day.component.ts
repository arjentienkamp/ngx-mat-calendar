import { Component, OnInit } from '@angular/core';
import { FormattingService } from '../../../../services/formatting.service';
import { EventRenderBaseComponent } from '../event-render-base.component';

@Component({
    selector: 'event-render-day',
    templateUrl: './event-render-day.component.html',
    styleUrls: ['./event-render-day.component.scss']
})
export class EventRenderDayComponent extends EventRenderBaseComponent implements OnInit {
    constructor(
        protected formattingService: FormattingService,
    ) {
        super(formattingService);
    }

    ngOnInit(): void {
        super.ngOnInit();
    }
}

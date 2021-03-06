import { Component, OnInit } from '@angular/core';
import { FormattingService } from '../../../../services/formatting.service';
import { EventRenderBaseComponent } from '../event-render-base.component';

@Component({
    selector: 'event-render-month',
    templateUrl: './event-render-month.component.html',
    styleUrls: ['./event-render-month.component.scss']
})
export class EventRenderMonthComponent extends EventRenderBaseComponent implements OnInit {
    constructor(
        protected formattingService: FormattingService,
    ) {
        super(formattingService);
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.eventTooltip = this.getEventTooltip();
    }
}

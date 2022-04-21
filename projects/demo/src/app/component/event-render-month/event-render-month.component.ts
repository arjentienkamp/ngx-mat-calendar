import { Component, OnInit } from '@angular/core';
import { EventRenderBaseComponent } from 'projects/ngx-mat-calendar/src/lib/components/shared/event-render/event-render-base.component';
import { FormattingService } from 'projects/ngx-mat-calendar/src/lib/services/formatting.service';

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

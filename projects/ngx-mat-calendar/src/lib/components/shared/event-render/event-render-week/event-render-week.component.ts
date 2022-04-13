import { Component, OnInit } from '@angular/core';
import { FormattingService } from '../../../../services/formatting.service';
import { EventRenderBaseComponent } from '../event-render-base.component';

@Component({
    selector: 'event-render-week',
    templateUrl: './event-render-week.component.html',
    styleUrls: ['./event-render-week.component.scss']
})
export class EventRenderWeekComponent extends EventRenderBaseComponent implements OnInit {
    constructor(
        protected formattingService: FormattingService,
    ) {
        super(formattingService);
    }

    ngOnInit(): void {
        super.ngOnInit();
    }
}

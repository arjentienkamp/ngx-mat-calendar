import { OnInit } from '@angular/core';
import { BaseViewComponent } from '../shared/base-view/base-view.component';
import { DayView } from '../../models/Calendar';
import { FormattingService } from '../../services/formatting.service';
import { CalendarDay } from '../../models/CalendarDay';
export declare class DayViewComponent extends BaseViewComponent implements OnInit {
    dayView: DayView;
    constructor(formattingService: FormattingService);
    ngOnInit(): void;
    generateView(): void;
    populateDayView(emptyDay: CalendarDay): void;
    generateDays(): CalendarDay;
}

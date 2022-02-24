import { OnInit } from '@angular/core';
import { BaseViewComponent } from '../shared/base-view/base-view.component';
import { WeekView } from '../../models/Calendar';
import { FormattingService } from '../../services/formatting.service';
import { CalendarDay } from '../../models/CalendarDay';
export declare class WeekViewComponent extends BaseViewComponent implements OnInit {
    weekView: WeekView;
    constructor(formattingService: FormattingService);
    ngOnInit(): void;
    generateView(): void;
    populateWeekView(emptyDays: CalendarDay[]): void;
    generateDays(): CalendarDay[];
}

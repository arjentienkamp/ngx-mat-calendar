import {
    Component,
    DoCheck,
    IterableDiffers,
    KeyValueDiffers,
    OnInit
} from '@angular/core';

import { MonthView } from '../../models/Calendar';
import { BaseViewComponent } from '../shared/base-view/base-view.component';

@Component({
    selector: 'month-view',
    templateUrl: './month-view.component.html',
    styleUrls: ['./month-view.component.scss']
})
export class MonthViewComponent extends BaseViewComponent implements OnInit, DoCheck {
    monthView = {} as MonthView;

    constructor(
        iterableDiffers: IterableDiffers,
        keyValueDiffers: KeyValueDiffers
    ) {
        super(iterableDiffers, keyValueDiffers);
    }

    ngOnInit(): void {
        this.initView();
    }

    ngDoCheck(): void {}

    initView(): void {}

    generateView(): void {}
}

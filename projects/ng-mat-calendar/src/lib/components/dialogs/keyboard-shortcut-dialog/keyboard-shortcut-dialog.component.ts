import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarOptions } from '../../../models/CalendarOptions';

@Component({
    selector: 'keyboard-shortcut-dialog',
    templateUrl: './keyboard-shortcut-dialog.component.html',
    styleUrls: ['./keyboard-shortcut-dialog.component.scss']
})
export class KeyboardShortcutDialogComponent implements OnInit {
    options: CalendarOptions;

    constructor(@Inject(MAT_DIALOG_DATA) public data: { options: CalendarOptions }) { }

    ngOnInit(): void {
        this.options = this.data.options;
    }
}

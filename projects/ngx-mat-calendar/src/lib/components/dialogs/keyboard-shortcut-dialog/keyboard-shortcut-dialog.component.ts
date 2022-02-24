import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarOptions } from '../../../models/CalendarOptions';

@Component({
    selector: 'keyboard-shortcut-dialog',
    templateUrl: './keyboard-shortcut-dialog.component.html',
    styleUrls: ['./keyboard-shortcut-dialog.component.scss']
})
export class KeyboardShortcutDialogComponent implements OnInit {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: CalendarOptions
    ) { }

    ngOnInit(): void { }
}

import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'app-new-item-modal',
    templateUrl: './new-item-modal.component.html',
    styleUrls: ['./new-item-modal.component.scss']
})
export class NewItemModalComponent {
    constructor(
        public dialogRef: MatDialogRef<NewItemModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}

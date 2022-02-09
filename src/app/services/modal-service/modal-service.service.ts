import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalTemplateComponent } from './modal-template/modal-template.component';

export interface IModalConfig {
    width?: string;
    disableClose: boolean,
    id: string,
    minHeight: string,
    minWidth: string,
    data: {
        name?: string,
        title?: string,
        contentText?: string,
        templateRef?: any
    };
}

@Injectable({
    providedIn: 'root'
})
export class ModalServiceService {

    public get defaultConfig()  {
        return { 
            ...new MatDialogConfig(),             
            ...{
                disableClose: false,
                id: "modal-component",
                minHeight: "350px",
                minWidth: "600px",

                data: {
                    name: "",
                    title: "",
                    contentText: "Logout",
                }
            }
        };
    }

    constructor(
        public matDialog: MatDialog
    ) {}

    public openModal(dialogConfig: IModalConfig = this.defaultConfig) {
        const modalDialog = this.matDialog.open(ModalTemplateComponent, dialogConfig);
        return modalDialog;
    }

}

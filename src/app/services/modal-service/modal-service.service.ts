import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalTemplateComponent } from './modal-template/modal-template.component';

export interface IModalConfig {
    disableClose: boolean,
    id: string,
    height: string,
    width: string,
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
                height: "350px",
                width:"600px",

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

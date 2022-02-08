import { AfterViewInit, Component, ComponentFactoryResolver, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalContentDirective } from '../modal-directive/modal-content.directive';
export interface IModalTemplate {
    data: any
}

@Component({
    selector: 'app-modal-template',
    templateUrl: './modal-template.component.html',
    styleUrls: ['./modal-template.component.scss']
})
export class ModalTemplateComponent implements OnInit {
    @ViewChild(ModalContentDirective, { static: true }) appModalContent!: ModalContentDirective;

    constructor(
        @Inject(MAT_DIALOG_DATA) public modalData: any,
        public dialogRef: MatDialogRef<ModalTemplateComponent>,
        public viewContainerRef: ViewContainerRef,
    ) { }

    ngOnInit() {
        this.loadComponent();
    }

    closeModal() {
        this.dialogRef.close();
    }

    loadComponent() {
        const viewContainerRef = this.appModalContent.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent<any>(this.modalData.templateRef);
        componentRef.instance.data = this.modalData;
    }

}

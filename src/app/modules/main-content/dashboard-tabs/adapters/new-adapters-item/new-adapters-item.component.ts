import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdaptersDatasourceService } from 'src/app/services/adapters-datasource/adapters-datasource.service';
import { ModalServiceService } from 'src/app/services/modal-service/modal-service.service';
import { IModalTemplate } from 'src/app/services/modal-service/modal-template/modal-template.component';
@Component({
    selector: 'app-new-adapters-item',
    templateUrl: './new-adapters-item.component.html',
    styleUrls: ['./new-adapters-item.component.scss']
})
export class NewAdaptersItemComponent implements OnInit, IModalTemplate {
    @Input() data: any;
    public newAdapter!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private adapterDatasourceService: AdaptersDatasourceService,
        private modalServiceService: ModalServiceService,
    ) { }

    ngOnInit(): void {
        this.newAdapter = this.formBuilder.group({
            status: [],
            imei: [],
            anbieter: [],
            fahrzeug: [],
            kunde: [],
            kennzeichen: [],
            vin: [],
        });

        this.data.actions = [
            {
                name: 'Add',
                color: 'accent',
                action: () => {
                    if(Object.values(this.newAdapter?.value).every(item => item != null)) {
                        this.adapterDatasourceService.addAdapter(this.newAdapter.value);
                        this.newAdapter.reset();
                        this.modalServiceService.closeModal("newAdapter");
                    }
                }
            },
            {
                name: 'Test autofill',
                action: () => {
                    this.newAdapter.setValue({
                        status: 'verbunden',
                        imei: "852sd04b-5674-7988-b5t4-89a45gg88d5c",
                        anbieter: "VOLVO",
                        fahrzeug: "VOLVO XC90",
                        kunde: "Wolf Shulec",
                        kennzeichen: "DFC KL 56E",
                        vin: "WSDTA951749G98541"
                    });

                }
            },
            {
                name: 'Clear',
                action: () => {
                    this.newAdapter.reset();
                }
            }

        ]
    }

}

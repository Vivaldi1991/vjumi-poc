import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FahrzeugDatasourceService } from 'src/app/services/fahrzeug-datasource/fahrzeug-datasource.service';
import { ModalServiceService } from 'src/app/services/modal-service/modal-service.service';
import { IModalTemplate } from 'src/app/services/modal-service/modal-template/modal-template.component';
@Component({
    selector: 'app-new-fahrzeuge-item',
    templateUrl: './new-fahrzeuge-item.component.html',
    styleUrls: ['./new-fahrzeuge-item.component.scss']
})
export class NewFahrzeugeItemComponent implements OnInit, IModalTemplate {
    @Input() data: any;
    public newFahrzeuge!: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private fahrzeugDatasourceService: FahrzeugDatasourceService,
        private modalServiceService: ModalServiceService,
    ) { }

    ngOnInit(): void {
        const autokennzeichenValidator = (control: FormControl) => {            
            if (control.value == '') return null;

            const regEx = /[A-Z]{1,3} [A-Z]{1,2} [1-9]{1}[0-9]{1,3}/g;  

            const condition = control.value?.match(regEx);
            if (!condition) {
              return {autokennzeichenValidator: 'does not match the condition'}
            }
            return null;
        }

        this.newFahrzeuge = this.formBuilder.group({
            status: ['', Validators.required],
            fahrzeug: ['', Validators.required],
            kunde: ['', Validators.required],
            kennzeichen: ['', [Validators.required, autokennzeichenValidator]],
            km_stand: [''],
            nachster_service: [''],
            fehler: [''],
            letzte_meldung: [''],
        });

    
        this.data.actions = [
            {
                name: 'Add',
                color: 'accent',
                action: () => {
                    if(Object.values(this.newFahrzeuge?.controls).every(item => item.status === "VALID")) {
                        this.fahrzeugDatasourceService.addFahrzeug(this.newFahrzeuge.value);
                        this.newFahrzeuge.reset();
                        this.modalServiceService.closeModal("newFahrzeuge");
                    } else {                        
                        Object.keys(this.newFahrzeuge.controls).forEach(field => {
                            const control = this.newFahrzeuge.get(field);
                            control?.markAsTouched({ onlySelf: true });  
                        });
                    }
                }
            },
            {
                name: 'Test autofill',
                action: () => {
                    this.newFahrzeuge.setValue({
                        status: 'getrennt',
                        fahrzeug: "OPEL ASTRA OPC",
                        kunde: "Daniel Trost",
                        kennzeichen: "VBG FD 58Z",
                        km_stand: 125,
                        nachster_service: "Auto repairs",
                        fehler: 2,
                        letzte_meldung: "11.11.20 14:33"
                    });

                }
            },
            {
                name: 'Clear',
                action: () => {
                    this.newFahrzeuge.reset();
                }
            }
            
        ]
    }

}

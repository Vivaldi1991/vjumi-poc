import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IModalTemplate } from 'src/app/services/modal-service/modal-template/modal-template.component';

@Component({
    selector: 'app-new-fahrzeuge-item',
    templateUrl: './new-fahrzeuge-item.component.html',
    styleUrls: ['./new-fahrzeuge-item.component.scss']
})
export class NewFahrzeugeItemComponent implements OnInit, IModalTemplate {
    @Input() data: any;
    public newFahrzeuge!: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.newFahrzeuge = this.formBuilder.group({
            status: [],
            fahrzeug: [],
            kunde: [],
            kennzeichen: [],
            km_stand: [],
            nachster_service: [],
            fehler: [],
            letzte_meldung: [],
        });


        this.data.actions = [
            {
                name: 'Add',
                color: 'accent',
                action: () => {
                    console.log(this.newFahrzeuge.value);
                    this.newFahrzeuge.reset();

                }
            },
            {
                name: 'Clear',
                color: 'accent',
                action: () => {
                    this.newFahrzeuge.reset();
                }
            }
            
        ]
    }

}

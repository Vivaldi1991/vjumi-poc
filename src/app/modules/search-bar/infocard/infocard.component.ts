import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-infocard',
    templateUrl: './infocard.component.html',
    styleUrls: ['./infocard.component.scss']
})
export class InfocardComponent {

    @Input() carInfo: any;

    constructor() { }
}

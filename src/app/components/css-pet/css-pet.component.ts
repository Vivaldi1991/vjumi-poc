import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-css-pet',
    templateUrl: './css-pet.component.html',
    styleUrls: ['./css-pet.component.scss']
})
export class CssPetComponent {
    public showPuppy: string = 'none';

    constructor() {}

    public callPuppy() {
        this.showPuppy = '';

        setTimeout(() => {
            this.showPuppy = 'none';
        }, 5000);
    }
}

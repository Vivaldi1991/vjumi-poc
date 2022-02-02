import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-totals-list-item',
    templateUrl: './totals-list-item.component.html',
    styleUrls: ['./totals-list-item.component.scss']
})
export class TotalsListItemComponent {
    @Input() public total!: any;

}

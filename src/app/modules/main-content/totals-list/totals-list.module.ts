import { NgModule } from '@angular/core';
import { TotalsListComponent } from './totals-list.component';
import { CommonModule } from '@angular/common'
import { TotalsListItemComponent } from './totals-list-item/totals-list-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [   
        TotalsListComponent, 
        TotalsListItemComponent, 
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
    ],
    exports: [ 
        TotalsListComponent
    ],
})
export class TotalsListModule {}
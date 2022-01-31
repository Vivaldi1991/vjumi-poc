import { NgModule } from '@angular/core';
import { TotalsListComponent } from './totals-list.component';
import { CommonModule } from '@angular/common'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { TotalsListItemComponent } from './totals-list-item/totals-list-item.component';

@NgModule({
    declarations: [   
        TotalsListComponent, TotalsListItemComponent, 
    ],
    imports: [

    ],
    exports: [ 
        TotalsListComponent
    ],
})
export class TotalsListModule {}
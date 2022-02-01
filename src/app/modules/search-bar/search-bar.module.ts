import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar.component';
import { CommonModule } from '@angular/common'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CarsService } from 'src/app/services/cars/cars.service';
import { InfocardComponent } from './infocard/infocard.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [   
        SearchBarComponent,
        InfocardComponent 
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatBadgeModule,
        MatMenuModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatCardModule
    ],
    providers: [
        CarsService
    ],
    exports: [ 
        SearchBarComponent
    ],
})
export class SearchBarModule {}
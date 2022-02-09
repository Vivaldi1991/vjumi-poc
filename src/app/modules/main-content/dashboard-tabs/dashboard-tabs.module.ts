import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTabsComponent } from './dashboard-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AdaptersComponent } from './adapters/adapters.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FahrzeugeComponent } from './fahrzeuge/fahrzeuge.component';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { NewFahrzeugeItemComponent } from './fahrzeuge/new-fahrzeuge-item/new-fahrzeuge-item.component';
import { NewAdaptersItemComponent } from './adapters/new-adapters-item/new-adapters-item.component';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
    declarations: [
        DashboardTabsComponent,
        AdaptersComponent,
        FahrzeugeComponent,
        NewFahrzeugeItemComponent,
        NewAdaptersItemComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatSlideToggleModule,
        MatBadgeModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatMenuModule,
        FormsModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule
    ],
    exports: [
        DashboardTabsComponent
    ]
})
export class DashboardTabsModule { }

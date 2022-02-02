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

@NgModule({
  declarations: [
    DashboardTabsComponent,
    AdaptersComponent
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
    MatSlideToggleModule
  ],
  exports: [
    DashboardTabsComponent
  ]
})
export class DashboardTabsModule { }

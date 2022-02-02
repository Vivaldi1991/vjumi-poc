import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTabsComponent } from './dashboard-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    DashboardTabsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports: [
    DashboardTabsComponent
  ]
})
export class DashboardTabsModule { }

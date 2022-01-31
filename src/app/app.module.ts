import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './toolbar/toolbar.module';
import { SearchBarModule } from './search-bar/search-bar.module';
import { TotalsListModule } from './totals-list/totals-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    SearchBarModule,
    TotalsListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

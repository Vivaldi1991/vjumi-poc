import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarModule } from './modules/toolbar/toolbar.module';
import { SearchBarModule } from './modules/search-bar/search-bar.module';
import { MainContentModule } from './modules/main-content/main-content.module';
import { ModalTemplateComponent } from './services/modal-service/modal-template/modal-template.component';
import { ModalContentDirective } from './services/modal-service/modal-directive/modal-content.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        AppComponent,
        ModalTemplateComponent,
        ModalContentDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ToolbarModule,
        SearchBarModule,
        MainContentModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

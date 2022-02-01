import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MainContentComponent } from './main-content.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EventMessagesService } from 'src/app/services/event-messages/event-messages.service';

@NgModule({
    declarations: [   
        MainContentComponent,
    ],
    imports: [
        CommonModule,
        MatSidenavModule
    ],
    providers: [
        EventMessagesService
    ],
    exports: [ 
        MainContentComponent
    ],
})
export class MainContentModule {}
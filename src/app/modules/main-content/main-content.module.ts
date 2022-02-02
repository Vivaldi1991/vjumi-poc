import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MainContentComponent } from './main-content.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EventMessagesService } from 'src/app/services/event-messages/event-messages.service';
import { MessagesPanelComponent } from './messages-panel/messages-panel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MessagesService } from 'src/app/services/messages-service/messages.service';
import { MessageItemComponent } from './message-item/message-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [   
        MainContentComponent, 
        MessagesPanelComponent, 
        MessageItemComponent,
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
    ],
    providers: [
        EventMessagesService,
        MessagesService, 
    ],
    exports: [ 
        MainContentComponent,
    ],
})
export class MainContentModule {}
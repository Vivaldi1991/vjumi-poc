import { Component } from '@angular/core';
import { IMessage, MessagesService } from 'src/app/services/messages-service/messages.service';

@Component({
    selector: 'app-messages-panel',
    templateUrl: './messages-panel.component.html',
    styleUrls: ['./messages-panel.component.scss']
})
export class MessagesPanelComponent {

    public messages: IMessage[] = [];

    constructor(private messagesService: MessagesService) {
        this.messages = this.messagesService.messagesList;
    }

}

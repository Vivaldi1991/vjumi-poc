import { Component, OnInit } from '@angular/core';
import { EventMessagesService } from 'src/app/services/event-messages/event-messages.service';
import { IMessage, MessagesService } from 'src/app/services/messages-service/messages.service';

@Component({
    selector: 'app-messages-panel',
    templateUrl: './messages-panel.component.html',
    styleUrls: ['./messages-panel.component.scss']
})
export class MessagesPanelComponent {
    public messages: IMessage[] = [];

    constructor(
        private messagesService: MessagesService,
        private eventMessagesService: EventMessagesService
    ) {
        this.messages = this.messagesService.messagesList;
    }

    favoriteStyle: string = 'Fade in';
    styles: string[] = ['Fade in', 'Rotate', 'Top', 'Left'];

    onNewMessageClick() {
        this.messagesService.newMessage();
        this.eventMessagesService.emit({ name: "new-message" });
    }
}

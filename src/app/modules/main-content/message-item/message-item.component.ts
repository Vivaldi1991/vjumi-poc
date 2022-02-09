import { Component, Input } from '@angular/core';
import { IMessage, MessagesService } from 'src/app/services/messages-service/messages.service';

@Component({
    selector: 'app-message-item',
    templateUrl: './message-item.component.html',
    styleUrls: ['./message-item.component.scss']
})

export class MessageItemComponent {

    @Input() public message!: IMessage;

    constructor(
        private messagesService: MessagesService
    ) {}

    public readMessage() {
        this.messagesService.readMessage(this.message.id);
    }

}

import { Component, OnInit } from '@angular/core';
import { EventMessagesService } from 'src/app/services/event-messages/event-messages.service';
import { MessagesService } from 'src/app/services/messages-service/messages.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(
        private messagesService: MessagesService,
        private eventMessagesService: EventMessagesService
    ) { }

    ngOnInit(): void {
    }

    onNewMessageClick() {
        this.messagesService.newMessage();
        this.eventMessagesService.emit({ name: "new-message" });
    }
}

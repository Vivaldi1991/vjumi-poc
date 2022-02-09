import { Component, OnInit } from '@angular/core';
import { EventMessagesService } from 'src/app/services/event-messages/event-messages.service';
import { MessagesService } from 'src/app/services/messages-service/messages.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit{

    public ureadedCount: number = 0;

    constructor(
        private eventMessagesService: EventMessagesService,
        private messagesService: MessagesService
    ) {}

    ngOnInit(): void {
        this.messagesService.getUnreadedCount().subscribe((cnt: number) => {
            this.ureadedCount = cnt;
        });
    }

    public toggleMessages() {
        this.eventMessagesService.emit({ name: "messages-side-panel-toggle" });
    }
}

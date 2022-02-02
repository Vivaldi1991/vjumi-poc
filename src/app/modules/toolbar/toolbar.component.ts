import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EventMessagesService } from 'src/app/services/event-messages/event-messages.service';
import { MessagesService } from 'src/app/services/messages-service/messages.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {

    public ureadedCount: number = 0;

    constructor(
        private eventMessagesService: EventMessagesService,
        private messagesService: MessagesService
    ) { 
        this.ureadedCount = this.messagesService.unreadedCount;
    }

    public toggleMessages() {
        this.eventMessagesService.emit({ name: "messages-side-panel-toggle" });
    }
}

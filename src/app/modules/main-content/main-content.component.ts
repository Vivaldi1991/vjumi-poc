import { Component, ViewChild } from '@angular/core';
import { EventMessagesService } from 'src/app/services/event-messages/event-messages.service';

@Component({
    selector: 'app-main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

    @ViewChild('messagesSidePanel') messagesSidePanel: any;

    constructor(private eventMessagesService: EventMessagesService) {

        this.eventMessagesService.subscribe("messages-side-panel-toggle", () => this.messagesSidePanel.toggle());

    }

}

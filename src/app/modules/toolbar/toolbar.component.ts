import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { EventMessagesService } from 'src/app/services/event-messages/event-messages.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
    constructor(private eventMessagesService: EventMessagesService) { }

    public toggleMessages() {
        this.eventMessagesService.emit({ name: "messages-side-panel-toggle" });
    }
}

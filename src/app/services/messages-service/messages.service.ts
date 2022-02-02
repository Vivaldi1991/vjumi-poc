import { Injectable } from '@angular/core';
import messages from './messages-data';

export interface IMessage {
    id: string;
    type: string;
    from: string;
    title: string;
    message: string;
    date: string;
    isReaded: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class MessagesService {

    /**
     * Todo real fetch on promises
     */
    private __messages: IMessage[] = messages;
    private __unreadedCount: number = 0;

    constructor() {
        this.__unreadedCount = this.__messages.reduce((prev, current) => current.isReaded ? prev : ++prev, 0);
        console.log(this.__unreadedCount);
        
    }

    public get messagesList() {
        return this.__messages;
    }

    public get unreadedCount() {
        return this.__unreadedCount;
    }
}

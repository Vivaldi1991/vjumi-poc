import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
    private __unreadedCount = new BehaviorSubject<number>(0);

    constructor() {
        this.__unreadedCount.next(this.checkUnreadedCount());        
    }

    public get messagesList() {
        return this.__messages;
    }

    public getUnreadedCount() {
        return this.__unreadedCount.asObservable();
    }

    public readMessage(id: string) {
        const msg = this.__messages.find(item => item.id == id);
        
        if(msg) {
            msg.isReaded = true;
            this.__unreadedCount.next(this.checkUnreadedCount());
        }
    }

    public newMessage() {
        this.__messages.push({
            id: "012189323",
            type: "success",
            from: "MYK EG1610 (Eugen Geck)",
            title: "Adapter verbunden",
            message: "Deutsches Ipsum Dolor quo lucilius Turnbeutel at, adhuc laboramus sadipscing per Fußball in mei ullum gloriatur. Id Weihnachten recteque accommodare sed. Id nec Krankenschwester argumentum, te melius erroribus vix. Mozart ut amet causae iriure, prodesset Hamburg mea ut. Dicunt virtute suscipit Deutschland no. At nemore scaevola eum. Müller Rice regione malorum efficiendi ius",
            date: "Gestern, 18:53",
            isReaded: false
        });

        
    }

    private checkUnreadedCount() {
        return this.__messages.reduce((prev, current) => current.isReaded ? prev : ++prev, 0);
    }
}

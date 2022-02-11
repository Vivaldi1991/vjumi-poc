import { Injectable } from '@angular/core';
import { filter, Observable, Observer, share, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventMessagesService {
    private observable!: Observable<any>;
    private observer!: Observer<any>;

    constructor() {
        this.observable = new Observable((observer: Observer<any>) => {            
            this.observer = observer;
        }).pipe(share());
    }

    public subscribe(eventName: any, callback: any) {
        
        const subscriber: Subscription = this.observable
            .pipe(
                filter(event => {
                    return event.name === eventName
                }))
            .subscribe(callback);

        return subscriber;
    }

    public emit(event: any) {
        if (this.observer != null) {            
            this.observer.next(event);
        }
    }

    public destroy(subscriber: Subscription) {
        subscriber.unsubscribe();
    }
}

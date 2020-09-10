import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { Thread } from '../models/thread.model';
import { MessagesService } from './messages.service';
import { map } from 'rxjs/operators';
import { Message } from '../models/message.model';

@Injectable()
export class ThreadsService {
    threads: Observable<{[key:string]: Thread}>;
    orderedThreads: Observable<Thread[]>;
    currentThread: Subject<Thread> = new BehaviorSubject(new Thread());

    constructor(private messagesService: MessagesService){
        this.threads = this.messagesService.messages.pipe(
            map((messages: Message[]) => {
                const threads: {[key: string]: Thread} = {};
                
                messages.map((message: Message) => {
                    threads[message.thread.id] = threads[message.thread.id] || message.thread;
                    const messagesThread: Thread = threads[message.thread.id];
                    if(!messagesThread.lastMessage || messagesThread.lastMessage.sentAt < message.sentAt){
                        messagesThread.lastMessage = message;
                    }
                });
                return threads;
            })
        );
        this.orderedThreads = this.threads.pipe(
            map((threadGroup: {[key: string]: Thread}) => {
                const threads: Thread[] = Object.values(threadGroup);
                const resultThreads = threads.sort((t1, t2) => {
                    return t2.lastMessage.sentAt.getTime() - t1.lastMessage.sentAt.getTime();
                });
                return resultThreads;
            })
        )
    }

    setCurrentThread(newThread: Thread): void {
        this.currentThread.next(newThread);
    }

}
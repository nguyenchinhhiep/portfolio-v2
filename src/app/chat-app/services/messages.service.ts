import { Subject, Observable } from "rxjs";
import {Message} from "./../models/message.model";
import { User } from "../models/user.model";
import { Thread } from "../models/thread.model";
import {filter, scan, publishReplay, refCount, map} from "rxjs/operators";
import { Injectable } from "@angular/core";

const initialMessages: Message[] = [];
interface IMessagesOperation extends Function {
   (messages: Message[]): Message[];
}

@Injectable()
export class MessagesService {
   private _newMessages: Subject<Message> = new Subject<Message>();
   messages: Observable<Message[]>;
   newMessages$ = this._newMessages.asObservable();
   updates: Subject<any> = new Subject<any>();
   create: Subject<Message> = new Subject<Message>();
   constructor() {
      this.messages = this.updates.pipe(
         scan((messages: Message[], operation: IMessagesOperation) => {
            return operation(messages);
         }, initialMessages),
         publishReplay(1),
         refCount()
      );
      this.create.pipe(
         map(function(message: Message): IMessagesOperation{
            return (messages: Message[]) => {
               return messages.concat(message);    
            }
         })
      ).subscribe(this.updates);

      this._newMessages.subscribe(this.create);
   }
   addMessage(newMessage: Message): void {
      this.updates.next((messages: Message[]): Message[] => {
         return messages.concat(newMessage);
      })
   }

   messagesForThisThreadUser(thread: Thread, user: User): Observable<Message>{
      return this._newMessages.pipe(
         filter((message: Message) => {
            return (message.thread.id === thread.id) && (message.author.id !== user.id);
         })
      )
   }
}
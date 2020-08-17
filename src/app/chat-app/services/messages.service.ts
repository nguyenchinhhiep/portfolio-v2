import { Subject, Observable } from "rxjs";
import {Message} from "./../models/message.model";
import { User } from "../models/user.model";
import { Thread } from "../models/thread.model";
import {filter} from "rxjs/operators";

interface IMessagesOperation extends Function {
   (messages: Message[]): Message[];
}
export class MessagesService {
   private _newMessages: Subject<Message> = new Subject<Message>();
   private _messages: Observable<Message[]>;
   newMessages$ = this._newMessages.asObservable();
   updates: Subject<any> = new Subject<any>()

   addMessage(message: Message): void {
      this._newMessages.next(message);
   }

   messagesForThisThreadUser(thread: Thread, user: User): Observable<Message>{
      return this._newMessages.pipe(
         filter((message: Message) => {
            return (message.thread.id === thread.id) && (message.author.id !== user.id)
         })
      )
   }
}
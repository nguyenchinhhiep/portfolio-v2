import { Subject, BehaviorSubject, Observable } from 'rxjs'

import { User } from "../models/user.model";

export class UsersService {
   private _currentUser: Subject<User> = new BehaviorSubject(null);
   currentUser$: Observable<User> = this._currentUser.asObservable();

   public setCurrentUser(newUser: User) {
      this._currentUser.next(newUser);
   }
}

export const userServiceInjectables: Array<any> = [UsersService];
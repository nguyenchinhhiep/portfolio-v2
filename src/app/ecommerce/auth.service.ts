import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FirebaseUserModel } from './models/firebase.model';

export class UserContextModel {
    username: string;
    password: string;
    email?: string;
    remember?: boolean;
    grant_type?: string;
    constructor() {
        this.grant_type = 'password';
    }
}

export interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    firebaseUser = new BehaviorSubject<FirebaseUserModel>(null);
    private tokenExpirationTimer: any;
    constructor(private http: HttpClient, private router: Router) { }
    loginFirebase(userContext: UserContextModel): Observable<Object> {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_pk91zkmcZcnR_H3lhDIBzU1dA8Z6TIU',
            {
                email: userContext.username,
                password: userContext.password,
                returnSecureToken: true
            }).pipe(
                catchError(err => throwError(err)),
                tap((resData: any) => {
                    this.handleFirebaseAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
                })
            );
    }
    onLogoutFirebase() {
        this.firebaseUser.next(null);
        localStorage.removeItem('firebaseUserData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }


    autoLoginFirebase() {
        const firebaseUserData: { email: string, id: string, _token: string, _tokenExpirationDate: Date } = JSON.parse(localStorage.getItem('firebaseUserData'));
        if (!firebaseUserData) {
            return;
        }
        const loadedFirebaseUser = new FirebaseUserModel(firebaseUserData.email, firebaseUserData.id, firebaseUserData._token, new Date(firebaseUserData._tokenExpirationDate));
        if (loadedFirebaseUser.token) {
            this.firebaseUser.next(loadedFirebaseUser);
            const expirationDuration = new Date(firebaseUserData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogoutFirebase(expirationDuration);
        }

    }

    autoLogoutFirebase(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.onLogoutFirebase();
        }, expirationDuration)
    }

    // Handle authentication
    handleFirebaseAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
        const firebaseUser = new FirebaseUserModel(email, userId, token, expirationDate);
        this.firebaseUser.next(firebaseUser);
        this.autoLogoutFirebase(expiresIn * 1000);
        localStorage.setItem('firebaseUserData', JSON.stringify(firebaseUser));
    }

    isAuthenticated() {
        return this.firebaseUser.subscribe(user => {
            if (!user) {
                return false;
            }
            return true;
        })
    }
}
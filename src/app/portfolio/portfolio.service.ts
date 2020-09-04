import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class PortfolioService implements OnInit {
    private _darkTheme: BehaviorSubject<boolean> = new BehaviorSubject(false);
    isDarkTheme: Observable<boolean> = this._darkTheme.asObservable();
    ngOnInit(){
        
    }
    setDarkTheme(isDarkTheme: boolean) {
        const portEl = document.querySelector('.port');
        portEl.classList.add('transition');
        window.setTimeout(() => {
            portEl.classList.remove('transition');
        }, 300)
        this._darkTheme.next(isDarkTheme);
    }
}

import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {
    private _theme: BehaviorSubject<string> = new BehaviorSubject('dark');
    private _scrollOut: Subject<boolean> = new Subject();
    scrollOut$ = this._scrollOut.asObservable();
    getCurrentTheme: Observable<string> = this._theme.asObservable();

    updateScrollOut() {
        this._scrollOut.next(true);
    }
    
    setTheme(theme: string) {
        const portEl = document.querySelector('.port');
        portEl.classList.add('transition');
        window.setTimeout(() => {
            portEl.classList.remove('transition');
        }, 200)
        this._theme.next(theme);
        if (theme == 'dark') {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }


}

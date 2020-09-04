import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {
    private _darkTheme: Subject<boolean> = new Subject();
    isDarkTheme: Observable<boolean> = this._darkTheme.asObservable();

    setDarkTheme(isDarkTheme: boolean) {
        this._darkTheme.next(isDarkTheme);
    }
}

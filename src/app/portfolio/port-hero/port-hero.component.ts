import { Component, OnInit, HostBinding, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-port-hero',
  templateUrl: './port-hero.component.html',
  styleUrls: ['./port-hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortHeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('attr.class') classes = 'port__hero container';
  @ViewChild('scrollToTop', { static: true }) scrollToTop: ElementRef;
  private _unsubscribeAll: Subject<any>;


  constructor(
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this._unsubscribeAll = new Subject();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  ngAfterViewInit() {
    const scrollToTop$ = fromEvent<any>(this.scrollToTop.nativeElement, 'click')
      .pipe(takeUntil(this._unsubscribeAll));

    scrollToTop$.subscribe(res => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const scrollEvent$ = fromEvent(document, 'scroll')
      .pipe(
        debounceTime(100),
        takeUntil(this._unsubscribeAll),
      );

    scrollEvent$.subscribe(res => {
      if(window.scrollY > 500){
        this._renderer.setStyle(this.scrollToTop.nativeElement,'visibility','visible');
        this._renderer.setStyle(this.scrollToTop.nativeElement,'opacity','1');
      } else {
        this._renderer.removeStyle(this.scrollToTop.nativeElement,'visibility');
        this._renderer.removeStyle(this.scrollToTop.nativeElement,'opacity');
      }
    })
  }

}

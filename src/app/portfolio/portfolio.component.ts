import { Component, OnInit, HostBinding, ViewEncapsulation, AfterViewInit, AfterContentInit, OnDestroy, ElementRef, Inject } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { Observable } from 'rxjs';
import ScrollOut from "scroll-out";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit, AfterViewInit, OnDestroy {

  @HostBinding('attr.class') classes = 'port';
  scrollOut: any;
  currentTheme$: Observable<string>;

  constructor(private portfolioService: PortfolioService, @Inject(DOCUMENT) private _document: any, private el: ElementRef) { }

  ngOnInit(): void {
    this.currentTheme$ = this.portfolioService.getCurrentTheme;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getTheme();
    }, 0);

    const loaderEl = this._document.body.querySelector('.loader');
    loaderEl.addEventListener('transitionend', (e) => {
      if(e.target == loaderEl) {
        this.scrollOut = new ScrollOut({
          scope: this.el.nativeElement,
          threshold: .2,
          onShown: function (element, ctx, scrollingElement) {
            const delay = element.dataset.delay;
            if (!!delay) {
              element.style.transition = `opacity .4s cubic-bezier(.3,0,.5,1) ${delay}ms, transform .4s cubic-bezier(.3,0,.5,1) ${delay}ms`;
            } else {
              element.style.transition = `opacity .4s cubic-bezier(.3,0,.5,1), transform .4s cubic-bezier(.3,0,.5,1)`;
            }

            element.style.opacity = 1;
            element.style.visibility = 'visible';
            element.style.transform = 'translate3d(0,0, 0)';
          },
        })
      }
    })
  }


  ngOnDestroy() {
    this.scrollOut.teardown();
  }

  getTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    this.portfolioService.setTheme(theme);
  }

}

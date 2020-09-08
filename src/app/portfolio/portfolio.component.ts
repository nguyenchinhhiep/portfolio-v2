import { Component, OnInit, HostBinding, ViewEncapsulation, AfterViewInit, AfterContentInit, OnDestroy, ElementRef } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { Observable } from 'rxjs';
import ScrollOut from "scroll-out";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit, AfterViewInit, OnDestroy{

  @HostBinding('attr.class') classes = 'port';
  scrollOut: any;
  currentTheme$: Observable<string>;

  constructor(private portfolioService: PortfolioService, private el: ElementRef) { }

  ngOnInit(): void {
    this.currentTheme$ = this.portfolioService.getCurrentTheme;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getTheme();
    }, 0);
    setTimeout(() => {
      this.scrollOut = new ScrollOut({
        scope: this.el.nativeElement,
        onShown: function(element, ctx, scrollingElement) {
          const delay = element.dataset.delay;
          if(!!delay){
            element.style.transition = `opacity .3s ease ${delay}ms, transform .3s ease ${delay}ms`;
          } else {
            element.style.transition = `opacity .3s ease, transform .3s ease`;
          }
          
          element.style.opacity = 1;
          element.style.visibility = 'visible';
          element.style.transform = 'translate3d(0,0, 0)';
        },
      })
    }, 400)
  }


  ngOnDestroy(){
    this.scrollOut.teardown();
  }

  getTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    this.portfolioService.setTheme(theme);
  }

}

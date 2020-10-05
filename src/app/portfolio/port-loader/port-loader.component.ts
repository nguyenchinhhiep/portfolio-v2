import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostBinding, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-port-loader',
  templateUrl: './port-loader.component.html',
  styleUrls: ['./port-loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortLoaderComponent implements OnInit {
  @HostBinding('attr.class') classes = 'loader';

  splashScreenEl: any;
  player: AnimationPlayer;

  constructor(
    private _animationBuilder: AnimationBuilder,
    @Inject(DOCUMENT) private _document: any,
    private _router: Router,
    private _el: ElementRef
  ) {
    this._init();
  }

  ngOnInit(): void {
  }

  private _init(): void {
    // Get the splash screen element
    this.splashScreenEl = this._el.nativeElement;

    // If the splash screen element exists...
    if (this.splashScreenEl) {
      this._document.body.style.overflow = 'hidden';
      // Hide it on the first NavigationEnd event
      this._router.events
        .pipe(
          filter((event => event instanceof NavigationEnd)),
          take(1)
        )
        .subscribe(() => {
          setTimeout(() => {
            this.hide();
          }, 2000);
        });
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Show the splash screen
   */
  show(): void {
    const loaderIcon = this._el.nativeElement.querySelector('.loader__icon');
    const loaderText = this._el.nativeElement.querySelector('.loader__text');
    this._el.nativeElement.classList.remove('loaded');
    this._document.body.style.overflow = 'hidden';
    loaderIcon.style.removeAttribute("style");
    loaderText.style.removeAttribute("style");
  }

  /**
   * Hide the splash screen
   */
  hide(): void {
    const loaderIcon = this._el.nativeElement.querySelector('.loader__icon');
    const loaderText = this._el.nativeElement.querySelector('.loader__text');
    this._el.nativeElement.classList.add('loaded');
    this._document.body.removeAttribute("style");
    this._el.nativeElement.addEventListener('transitionend', (e) => {
      if(e.target == this._el.nativeElement) {
        loaderIcon.style.animation = 'none';
        loaderText.style.animation = 'none';
      };
    })
  }

  
}

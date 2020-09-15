import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostBinding, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoaderComponent implements OnInit {
  @HostBinding('attr.class') classes = 'loader';

  splashScreenEl: any;
  player: AnimationPlayer;
  
  constructor(
    private _animationBuilder: AnimationBuilder,
    @Inject(DOCUMENT) private _document: any,
    private _router: Router,
    private _el : ElementRef
  ) { 
    this._init();
  }

  ngOnInit(): void {
  }

  private _init(): void
  {
      // Get the splash screen element
      this.splashScreenEl = this._el.nativeElement;
      
      // If the splash screen element exists...
      if ( this.splashScreenEl )
      {
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
                  },2000);
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
    
  }

  /**
   * Hide the splash screen
   */
  hide(): void {
    this._el.nativeElement.classList.add('loaded');
    this._el.nativeElement.addEventListener("transitionend", ()=> {
      this._document.body.removeAttribute("style")
    })
    
  }

}

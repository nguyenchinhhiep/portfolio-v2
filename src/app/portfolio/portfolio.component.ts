import { Component, OnInit, HostBinding, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  @HostBinding('attr.class') classes = 'port';
  currentTheme$: Observable<string>;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.currentTheme$ = this.portfolioService.getCurrentTheme;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getTheme();
    }, 0)
  }

  getTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    this.portfolioService.setTheme(theme);
  }

}

import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-port-header',
  templateUrl: './port-header.component.html',
  styleUrls: ['./port-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortHeaderComponent implements OnInit {

  @HostBinding('attr.class') classes = 'port__header';
  currentTheme$: Observable<string>;
  
  constructor(private portfolioService: PortfolioService) { 
    this.currentTheme$ = this.portfolioService.getCurrentTheme;
  }

  ngOnInit(): void {
  }

  toggleDarkTheme(checked: boolean) {
    this.portfolioService.setTheme(!!checked? 'dark': 'light');
  }

}

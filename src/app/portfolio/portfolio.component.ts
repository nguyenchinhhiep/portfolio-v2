import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

  @HostBinding('attr.class') classes = 'port';
  isDarkTheme: Observable<boolean>;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.isDarkTheme = this.portfolioService.isDarkTheme;
  }

}

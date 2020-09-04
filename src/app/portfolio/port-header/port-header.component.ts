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
  isDarkTheme: Observable<boolean>;
  
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

  toggleDarkTheme(checked: boolean) {
    this.portfolioService.setDarkTheme(checked);
  }

}

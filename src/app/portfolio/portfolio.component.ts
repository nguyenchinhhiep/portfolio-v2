import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

  @HostBinding('attr.class') classes = 'port';

  constructor() { }

  ngOnInit(): void {
  }

}

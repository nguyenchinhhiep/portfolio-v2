import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @HostBinding('attr.class') classes = 'port';

  constructor() { }

  ngOnInit(): void {
  }

}

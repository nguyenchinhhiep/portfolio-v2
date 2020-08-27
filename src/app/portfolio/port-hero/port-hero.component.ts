import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-port-hero',
  templateUrl: './port-hero.component.html',
  styleUrls: ['./port-hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortHeroComponent implements OnInit {

  @HostBinding('attr.class') classes = 'port__hero container';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-port-header',
  templateUrl: './port-header.component.html',
  styleUrls: ['./port-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortHeaderComponent implements OnInit {

  @HostBinding('attr.class') classes = 'port__header';
  
  constructor() { }

  ngOnInit(): void {
  }

}

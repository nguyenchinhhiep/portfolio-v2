import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-port-contact',
  templateUrl: './port-contact.component.html',
  styleUrls: ['./port-contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortContactComponent implements OnInit {
  @HostBinding('attr.class') classes = 'port__contact section container';

  constructor() { }

  ngOnInit(): void {
  }

}

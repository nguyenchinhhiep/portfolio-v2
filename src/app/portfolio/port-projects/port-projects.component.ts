import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-port-projects',
  templateUrl: './port-projects.component.html',
  styleUrls: ['./port-projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortProjectsComponent implements OnInit {
  @HostBinding('attr.class') classes = 'port__projects section container';
  constructor() { }

  ngOnInit(): void {
  }

}

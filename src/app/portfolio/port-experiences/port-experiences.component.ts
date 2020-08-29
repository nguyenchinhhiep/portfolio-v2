import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-port-experiences',
  templateUrl: './port-experiences.component.html',
  styleUrls: ['./port-experiences.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortExperiencesComponent implements OnInit {
  @HostBinding('attr.class') classes = 'port__experience section container';
  constructor() { }

  ngOnInit(): void {
  }

}

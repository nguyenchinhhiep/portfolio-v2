import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-port-skills',
  templateUrl: './port-skills.component.html',
  styleUrls: ['./port-skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortSkillsComponent implements OnInit {
  @HostBinding('attr.class') classes = 'port__skills section container';
  constructor() { }

  ngOnInit(): void {
  }

}

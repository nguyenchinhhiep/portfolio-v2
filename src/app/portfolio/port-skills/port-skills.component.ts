import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-port-skills',
  templateUrl: './port-skills.component.html',
  styleUrls: ['./port-skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortSkillsComponent implements OnInit {
  @HostBinding('attr.class') classes = 'port__skills section container';
  mySkills: any;
  constructor() {
    this.mySkills = [
      {
        type: 'languages',
        list: ['HTML/PUG', 'CSS/SCSS', 'Javascript', 'Typescript']
      },
      {
        type: 'libraries',
        list: ['Bootstrap 4', 'Angular 2+', 'Angular Material', 'PrimeNG']
      },
      {
        type: 'tools',
        list: ['Gulp','Webpack','Git Extensions', 'Chrome DevTools']
      }
    ]
  }

  ngOnInit(): void {
  }

}

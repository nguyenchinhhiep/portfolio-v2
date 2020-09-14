import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-port-projects',
  templateUrl: './port-projects.component.html',
  styleUrls: ['./port-projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortProjectsComponent implements OnInit {
  @HostBinding('attr.class') classes = 'port__projects section container';

  projectsList: Array<any>;
  constructor() { 
    this.projectsList = [
      {
        name: 'Landing Page Template',
        description: ' A fully responsive website template with a one-page structure using only pure HTML and CSS without any framework.',
        techList: ['HTML','CSS', 'Javascript','Jquery'],
        externalLink:'https://nguyenchinhhiep.github.io/landing-page/dist/html/index.html',
        githubLink: 'https://github.com/nguyenchinhhiep/landing-page'
      }
    ]
  }

  ngOnInit(): void {
  }

}

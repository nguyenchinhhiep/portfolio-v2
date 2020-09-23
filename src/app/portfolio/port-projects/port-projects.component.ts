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
  featureProjects: Array<any>;
  constructor() { 
    this.projectsList = [
      {
        name: 'Landing Page Template',
        description: ' A fully responsive website template with a one-page structure built only with HTML and CSS without using any UI libraries.',
        techList: ['HTML','CSS', 'Javascript','jQuery','Gulp'],
        externalLink:'https://nguyenchinhhiep.github.io/landing-page/dist/html/index.html',
        githubLink: 'https://github.com/nguyenchinhhiep/landing-page'
      },
      {
        name: 'WowCity Template',
        description: 'My first experience of converting a PSD design file to HTML and CSS code.',
        techList: ['HTML','CSS', 'Javascript'],
        externalLink:'https://nguyenchinhhiep.github.io/wowcity/index.html',
        githubLink: 'https://github.com/nguyenchinhhiep/wowcity'
      },
      {
        name: 'Personal Website v1',
        description: 'This is my first portfolio website I built in March 2019 after learning quite a bit about HTML, CSS, Javascript and jQuery. Since then, I think my front-end skills have improved a lot.',
        techList: ['HTML','CSS', 'Javascript', 'jQuery'],
        externalLink:'https://nguyenchinhhiep.github.io/portfolio-v1/home.html',
        githubLink: 'https://github.com/nguyenchinhhiep/portfolio-v1'
      },
      
    ]
  }

  ngOnInit(): void {
  }

}

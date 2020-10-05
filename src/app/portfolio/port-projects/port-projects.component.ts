import { Component, OnInit, ViewEncapsulation, HostBinding, ElementRef } from '@angular/core';
import ScrollOut from "scroll-out";

@Component({
  selector: 'app-port-projects',
  templateUrl: './port-projects.component.html',
  styleUrls: ['./port-projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortProjectsComponent implements OnInit {
  @HostBinding('attr.class') classes = 'port__projects section container';

  scrollOut: any;
  allProjects: Array<any>;
  displayedProjects: Array<any>;

  constructor(private el: ElementRef) { 
    this.allProjects = [
      {
        name: 'E-Commerce Web Application ',
        description: ' A simple e-commerce web application with some basic features built with Angular framework and using Google Firebase to do the authentication.',
        techList: ['HTML','CSS', 'Angualar','Firebase'],
        externalLink:'https://nguyenchinhhiep.github.io/movie-search/dist/index.html',
        githubLink: 'https://github.com/nguyenchinhhiep/movie-search',
        type: 'featured'
      },
      {
        name: 'Movie Search',
        description: ' A simple movie search application using HTML, CSS, pure Javascript and The Movie Database API to fetch the data and render it on the client/browser. You can also add movies to your favorite list. In this project, I was using Webpack as a tool to bundle JS, PUG and SCSS files.',
        techList: ['HTML','CSS', 'JavaScript','Webpack','APIs', 'Axios'],
        externalLink:'https://nguyenchinhhiep.github.io/movie-search/dist/index.html',
        githubLink: 'https://github.com/nguyenchinhhiep/movie-search',
        type: 'featured'
      },
      {
        name: 'Landing Page Template',
        description: ' A fully responsive website template with a one-page structure built only with HTML and CSS without using any UI libraries and using Gulp to compile JS, PUG and SCSS files.',
        techList: ['HTML','CSS', 'JavaScript','jQuery','Gulp'],
        externalLink:'https://nguyenchinhhiep.github.io/landing-page/dist/html/index.html',
        githubLink: 'https://github.com/nguyenchinhhiep/landing-page',
        type: 'featured'
      },
      {
        name: 'Personal Website V1',
        description: 'This is my first portfolio website I built in March 2019 after learning quite a bit about HTML, CSS, JavaScript and jQuery. Since then, I think my front-end skills have improved a lot.',
        techList: ['HTML','CSS', 'JavaScript', 'jQuery'],
        externalLink:'https://nguyenchinhhiep.github.io/portfolio-v1/home.html',
        githubLink: 'https://github.com/nguyenchinhhiep/portfolio-v1',
        type: 'featured'
      },
      {
        name: 'CRUD Angular Project',
        description: 'My first Angular project that allows you to create, read, update and delete data from jsonplaceholder API. This is also my first time working with APIs.',
        techList: ['HTML','CSS', 'Angular', 'APIs'],
        externalLink:'https://demo-mdaizs67p.now.sh/',
        githubLink: 'https://github.com/nguyenchinhhiep/post-api',
        type: 'featured'
      },
      {
        name: 'KonvaJS Project',
        description: 'A simple canvas project using Konvajs library that allows you to create simple designs by adding text and images. It\'s my first experience working with canvas.',
        techList: ['HTML','CSS', 'JavaScript', 'KonvaJS'],
        externalLink:'https://nguyenchinhhiep.github.io/konvajs-project/index.html',
        githubLink: 'https://github.com/nguyenchinhhiep/konvajs-project',
        type: 'featured'
      },
      
      {
        name: 'Wow City Template',
        description: 'My first experience of converting a PSD design file to HTML and CSS code.',
        techList: ['HTML','CSS', 'JavaScript'],
        externalLink:'https://nguyenchinhhiep.github.io/wowcity/index.html',
        githubLink: 'https://github.com/nguyenchinhhiep/wowcity',
        type: 'featured'
      }
    ];

    this.displayedProjects = this.allProjects.slice(0, 5);
  }

  ngOnInit(): void {
  }

  onSeeMore(amount: number) {
    const amountDisplayedProjects = this.displayedProjects.length;
    if(amountDisplayedProjects === this.allProjects.length) return;
    this.displayedProjects = this.displayedProjects.concat(this.allProjects.slice(amountDisplayedProjects, amountDisplayedProjects + amount));
    this.scrollOut = new ScrollOut({
      scope: this.el.nativeElement,
      threshold: .2,
      onShown: function (element, ctx, scrollingElement) {
        const delay = element.dataset.delay;
        if (!!delay) {
          element.style.transition = `opacity .4s cubic-bezier(.3,0,.5,1) ${delay}ms, transform .4s cubic-bezier(.3,0,.5,1) ${delay}ms`;
        } else {
          element.style.transition = `opacity .4s cubic-bezier(.3,0,.5,1), transform .4s cubic-bezier(.3,0,.5,1)`;
        }

        element.style.opacity = 1;
        element.style.visibility = 'visible';
        element.style.transform = 'translate3d(0,0, 0)';
      },
    })
    console.log(this.scrollOut);
    this.scrollOut.update();
  }

}

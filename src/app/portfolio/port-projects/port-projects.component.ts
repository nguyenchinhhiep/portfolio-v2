import { Component, OnInit, ViewEncapsulation, HostBinding, ElementRef, AfterViewChecked, ChangeDetectionStrategy, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import ScrollOut from "scroll-out";
import { PortfolioComponent } from '../portfolio.component';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-port-projects',
  templateUrl: './port-projects.component.html',
  styleUrls: ['./port-projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren('.project') elements: QueryList<any>;
  @HostBinding('attr.class') classes = 'port__projects section container';
  allProjects: Array<any>;
  displayedProjects: Array<any>;
  

  constructor(private portfolioService: PortfolioService) { 
    this.allProjects = [
      {
        name: 'eCommerce Web Application ',
        description: ' A simple e-commerce web application with some basic features built with Angular framework and using Google Firebase to do the authentication.',
        techList: ['HTML','CSS', 'Angular','Firebase'],
        externalLink:'ecommerce',
        githubLink: 'https://github.com/nguyenchinhhiep/portfolio-v2/tree/master/src/app/ecommerce',
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
        name: 'Angular CRUD Project',
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

    this.displayedProjects = this.allProjects.slice(0, 4);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elements.changes.subscribe(() => {
      this.portfolioService.updateScrollOut();
    })
  }

  onSeeMore(amount: number) {
    const amountDisplayedProjects = this.displayedProjects.length;
    if(amountDisplayedProjects >= this.allProjects.length){
      this.displayedProjects = this.allProjects.slice(0, 4);
    } else {
      this.displayedProjects = this.displayedProjects.concat(this.allProjects.slice(amountDisplayedProjects, amountDisplayedProjects + amount));
    }
  }
}

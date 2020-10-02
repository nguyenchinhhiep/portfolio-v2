import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
   selector: 'app-port-about',
   templateUrl: './port-about.component.html',
   styleUrls: ['./port-about.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class PortAboutComponent implements OnInit {
   aboutMe: any;
   @HostBinding('attr.class') classes = 'port__about section container';

   constructor() { }

   ngOnInit(): void {
      this.aboutMe = [
         'I\'m currently a front-end web developer based in Ho Chi Minh City, VN. I have one year of experience with solid basic knowlegde in web development. I\'m a fast learner, able to learn new things by myself. I taught myself all knowledge about front-end web development without going to school.',
         'As a front-end web developer, I am responsible for implementing visual elements that users see and interact with in a web application. Sometimes, I take website design files and convert them into HTML, JavaScript (JS) and/or CSS code. My focus is on user experiences.'
      ]
   }

}

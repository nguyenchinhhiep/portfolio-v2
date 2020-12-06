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
         'I\'m currently a front-end web developer based in Ho Chi Minh City, VN. I have one year of experience with basic knowlegde in front-end web development. I\'m a quick learner, always willing to learn new skills in order to enhance my abilities. I have taught myself all knowledge about front-end web development.',
         'As a front-end web developer, I am responsible for implementing visual elements that users see and interact with in a web application. Sometimes, I take website design files and convert them into HTML, JavaScript (JS) and/or CSS code. My focus is on user experiences.'
      ]
   }

}

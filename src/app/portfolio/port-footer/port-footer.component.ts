import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-port-footer',
  templateUrl: './port-footer.component.html',
  styleUrls: ['./port-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortFooterComponent implements OnInit {

  @HostBinding('attr.class') classes = 'port__footer container';
  contactList: any;

  constructor() { }

  ngOnInit(): void {
    this.contactList = [
      {
        name: 'Email',
        link: 'mailto:nguyenchinhhiep95@gmail.com',
        icon: 'far fa-envelope'
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/hiepnguyen1003',
        icon: 'fab fa-facebook-square'
      },
      {
        name: 'Github',
        link: 'https://github.com/nguyenchinhhiep',
        icon: 'fab fa-github'
      },
      {
        name: 'Codepen',
        link: 'https://codepen.io/nguyenchinhhiep',
        icon: 'fab fa-codepen'
      }
    ]
  }

}

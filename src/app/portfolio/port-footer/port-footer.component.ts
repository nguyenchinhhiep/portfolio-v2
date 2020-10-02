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
        link: 'mailto:nguyenchinhhiep95@gmail.com'
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/hiepnguyen1003'
      },
      {
        name: 'Github',
        link: 'https://github.com/nguyenchinhhiep'
      },
      {
        name: 'Codepen',
        link: 'https://codepen.io/nguyenchinhhiep'
      }
    ]
  }

}

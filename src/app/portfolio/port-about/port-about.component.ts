import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
   selector: 'app-port-about',
   templateUrl: './port-about.component.html',
   styleUrls: ['./port-about.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class PortAboutComponent implements OnInit {
   
   @HostBinding('attr.class') classes = 'port__about section container';

   constructor() { }

   ngOnInit(): void {
   }

}

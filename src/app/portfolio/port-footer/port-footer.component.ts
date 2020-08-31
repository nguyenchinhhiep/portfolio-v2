import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-port-footer',
  templateUrl: './port-footer.component.html',
  styleUrls: ['./port-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortFooterComponent implements OnInit {

  @HostBinding('attr.class') classes = 'port-footer container';

  constructor() { }

  ngOnInit(): void {
  }

}

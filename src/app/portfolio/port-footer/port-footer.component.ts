import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-port-footer',
  templateUrl: './port-footer.component.html',
  styleUrls: ['./port-footer.component.scss']
})
export class PortFooterComponent implements OnInit {

  @HostBinding('attr.class') classes = 'port-footer';

  constructor() { }

  ngOnInit(): void {
  }

}

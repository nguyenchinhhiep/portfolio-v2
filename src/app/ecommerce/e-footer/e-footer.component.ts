import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-footer',
  templateUrl: './e-footer.component.html',
  styleUrls: ['./e-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EFooterComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__footer';
  constructor() { }

  ngOnInit(): void {
  }

}

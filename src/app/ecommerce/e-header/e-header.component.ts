import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-header',
  templateUrl: './e-header.component.html',
  styleUrls: ['./e-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EHeaderComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__header';
  constructor() { }

  ngOnInit(): void {
  }

}

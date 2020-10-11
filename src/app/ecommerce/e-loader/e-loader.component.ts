import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'e-loader',
  templateUrl: './e-loader.component.html',
  styleUrls: ['./e-loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ELoaderComponent implements OnInit {
  @HostBinding('attr.class') classes = 'ecommerce__loader';
  constructor() { }

  ngOnInit(): void {
  }

}

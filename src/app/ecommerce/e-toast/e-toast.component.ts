import { Component, OnInit, TemplateRef } from '@angular/core';
import { EcommerceService } from '../ecommerce.service';

@Component({
  selector: 'e-toast',
  templateUrl: './e-toast.component.html',
  styleUrls: ['./e-toast.component.scss']
})
export class EToastComponent implements OnInit {

  constructor(public ecommerceService: EcommerceService) { }
  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortHeaderComponent } from './port-header/port-header.component';
import { PortFooterComponent } from './port-footer/port-footer.component';

import { PortfolioRoutingModule } from './portfolio-routing.module';


@NgModule({
  declarations: [PortfolioComponent, PortHeaderComponent, PortFooterComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortHeaderComponent } from './port-header/port-header.component';
import { PortFooterComponent } from './port-footer/port-footer.component';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortHeroComponent } from './port-hero/port-hero.component';


@NgModule({
  declarations: [PortfolioComponent, PortHeaderComponent, PortFooterComponent, PortHeroComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }

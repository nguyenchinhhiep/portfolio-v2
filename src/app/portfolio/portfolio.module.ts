import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';

import { PortfolioComponent } from './portfolio.component';
import { PortHeaderComponent } from './port-header/port-header.component';
import { PortFooterComponent } from './port-footer/port-footer.component';
import { PortHeroComponent } from './port-hero/port-hero.component';
import { PortAboutComponent } from './port-about/port-about.component';
import { PortSkillsComponent } from './port-skills/port-skills.component';
import { PortExperiencesComponent } from './port-experiences/port-experiences.component';
import { PortProjectsComponent } from './port-projects/port-projects.component';
import { PortContactComponent } from './port-contact/port-contact.component';

import { PortfolioService } from './portfolio.service';




@NgModule({
  declarations: [PortfolioComponent, PortHeaderComponent, PortFooterComponent, PortHeroComponent, PortAboutComponent, PortSkillsComponent, PortExperiencesComponent, PortProjectsComponent, PortContactComponent],
  imports: [
    SharedModule,
    PortfolioRoutingModule
  ],
  providers: [PortfolioService]
})
export class PortfolioModule { }

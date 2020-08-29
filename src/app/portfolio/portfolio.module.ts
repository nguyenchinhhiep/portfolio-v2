import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortHeaderComponent } from './port-header/port-header.component';
import { PortFooterComponent } from './port-footer/port-footer.component';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortHeroComponent } from './port-hero/port-hero.component';
import { PortAboutComponent } from './port-about/port-about.component';
import { PortSkillsComponent } from './port-skills/port-skills.component';
import { PortExperiencesComponent } from './port-experiences/port-experiences.component';
import { PortProjectsComponent } from './port-projects/port-projects.component';


@NgModule({
  declarations: [PortfolioComponent, PortHeaderComponent, PortFooterComponent, PortHeroComponent, PortAboutComponent, PortSkillsComponent, PortExperiencesComponent, PortProjectsComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }

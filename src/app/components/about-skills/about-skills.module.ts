import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutSkillsRoutingModule } from './about-skills-routing.module';
import { AboutSkillsComponent } from './about-skills.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [AboutSkillsComponent],
  imports: [
    CommonModule,
    AboutSkillsRoutingModule,
    MaterialModule
  ]
})
export class AboutSkillsModule { }

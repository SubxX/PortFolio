import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SingleprojectComponent } from './singleproject/singleproject.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [ProjectsComponent, SingleprojectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule
  ]
})
export class ProjectsModule { }

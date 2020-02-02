import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutSkillsComponent } from './about-skills.component';


const routes: Routes = [
  { path: '', component: AboutSkillsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutSkillsRoutingModule { }

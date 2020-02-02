import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule), data:
      { depth: 1 }
  },
  {
    path: 'about', loadChildren: () => import('./components/about-skills/about-skills.module').then(m => m.AboutSkillsModule),
    data: { depth: 2 }
  },
  {
    path: 'projects', loadChildren: () => import('./components/projects/projects.module').then(m => m.ProjectsModule),
    data: { depth: 3 }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

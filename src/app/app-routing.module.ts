import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '@pages/about-me/about-me.component';
import { HomeComponent } from '@pages/home/home.component';

import { ResumeComponent } from '@pages/resume/resume.component';
import { ProjectsComponent } from '@pages/projects/projects.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: '**',
    redirectTo: '404-not-found'
  },
  {
    path: '404-not-found',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

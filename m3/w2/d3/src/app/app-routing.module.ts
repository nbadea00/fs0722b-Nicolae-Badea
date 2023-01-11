import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'active-posts',
    component: ActivePostComponent
  },
  {
    path: 'inactive-posts',
    component: InactivePostComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

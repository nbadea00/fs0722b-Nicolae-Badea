import { Component, NgModule, createPlatform } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { identifierName } from '@angular/compiler';
import { UserComponent } from './components/user/user.component';

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
  },

  {
    path: 'users',
    component: UsersPageComponent,
    children : [{
      path: ':id',
      component: UserComponent,
    }]


  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

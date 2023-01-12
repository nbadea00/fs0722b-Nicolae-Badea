import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostComponent } from './components/active-post/active-post.component';
import { InactivePostComponent } from './components/inactive-post/inactive-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { UppercasePipe } from './pipe/uppercase.pipe';
import { EvidenziaDirective } from './direttive/evidenzia.directive';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ActivePostComponent,
    InactivePostComponent,
    PostsComponent,
    UppercasePipe,
    EvidenziaDirective,
    UsersPageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

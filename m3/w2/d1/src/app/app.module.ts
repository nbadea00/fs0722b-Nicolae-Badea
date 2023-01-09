import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './components/nav-bar-component/nav-bar-component.component';
import { BannerComponentComponent } from './components/banner-component/banner-component.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    BannerComponentComponent,
    CardComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

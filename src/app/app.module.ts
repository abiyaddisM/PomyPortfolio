import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ButtonMComponent } from './components/Global/button-m/button-m.component';
import { HomePageComponent } from './components/Home Page/home-page/home-page.component';
import { AboutUsPageComponent } from './components/About us Page/about-us-page/about-us-page.component';
import { ProjectsPageComponent } from './components/Project Page/projects-page/projects-page.component';
import {RouterModule} from "@angular/router";
import { ContactPageComponent } from './components/Contact Page/contact-page/contact-page.component';
import { ProfilePictureComponent } from './components/Home Page/profile-picture/profile-picture.component';
import {NgOptimizedImage} from "@angular/common";
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ButtonMComponent,
    HomePageComponent,
    AboutUsPageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    ProfilePictureComponent,
    HeroSectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'Home', component: HomePageComponent},
      {path: 'About-Us', component: AboutUsPageComponent},
      {path: 'Projects', component: ProjectsPageComponent},
      {path: 'Contact', component: ContactPageComponent}
    ]),
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

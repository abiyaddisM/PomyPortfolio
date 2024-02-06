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
import { HeroSectionComponent } from './components/Home Page/hero-section/hero-section.component';
import { HomeFollowMeComponent } from './components/Home Page/home-follow-me/home-follow-me.component';
import { ContactHeroComponent } from './components/Contact Page/contact-hero/contact-hero.component';
import { ContactInputComponent } from './components/Contact Page/contact-input/contact-input.component';

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
    HeroSectionComponent,
    HomeFollowMeComponent,
    ContactHeroComponent,
    ContactInputComponent
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

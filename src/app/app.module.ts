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
import { AboutParagraphComponent } from './components/About us Page/about-paragraph/about-paragraph.component';
import { ProjectCardComponent } from './components/Project Page/project-card/project-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsViewComponent } from './components/Project Page/projects-view/projects-view.component';
import {CollapsDirective, pressDirective} from './directive/collaps.directive';
import {HttpClientModule} from "@angular/common/http";

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
    AboutParagraphComponent,
    ProjectCardComponent,
    FooterComponent,
    ProjectsViewComponent,
    CollapsDirective,
    CollapsDirective,
    pressDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'Home', component: HomePageComponent},
      {path: 'About-Us', component: AboutUsPageComponent},
      {path: 'Projects', component: ProjectsPageComponent},
      {path: 'Projects/view', component: ProjectsViewComponent},
      {path: 'Contact', component: ContactPageComponent}
    ]),
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

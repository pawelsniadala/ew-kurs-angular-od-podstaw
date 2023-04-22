import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HerobarComponent } from './components/herobar/herobar.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { RatingComponent } from './components/rating/rating.component';
import { CounterComponent } from './components/counter/counter.component';
import { SlideInDirective } from './directives/slide-in.directive';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    NavbarComponent,
    HerobarComponent,
    ProgressbarComponent,
    TestimonialComponent,
    AvatarComponent,
    RatingComponent,
    CounterComponent,
    SlideInDirective,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenPipe } from './pipes/token.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MenuComponent } from './components/menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './components/photo/photo.component';
import { SocialComponent } from './components/social/social.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { ResumeComponent } from '@pages/resume/resume.component';
import { ProjectsComponent } from '@pages/projects/projects.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonComponent } from './components/button/button.component';
import { MobileNumberPipe } from './pipes/mobile-number.pipe';
import { DownloadComponent } from './components/download/download.component';
import { TitleComponent } from './components/title/title.component';
import { HomeComponent } from '@pages/home/home.component';
import { AboutMeComponent } from '@pages/about-me/about-me.component';
import { ContentComponent } from './components/content/content.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HorizontalDividerComponent } from './components/horizontal-divider/horizontal-divider.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillComponent } from './components/skill/skill.component';
import { PicturesComponent } from './components/pictures/pictures.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    TokenPipe,
    MenuComponent,
    MainComponent,
    HeaderComponent,
    PhotoComponent,
    SocialComponent,
    ContactInformationComponent,
    ResumeComponent,
    ProjectsComponent,
    NotFoundComponent,
    ButtonComponent,
    MobileNumberPipe,
    DownloadComponent,
    TitleComponent,
    HomeComponent,
    AboutMeComponent,
    ResumeComponent,
    ProjectsComponent,
    ContentComponent,
    ExperienceComponent,
    HorizontalDividerComponent,
    CapitalizePipe,
    SkillsComponent,
    SkillComponent,
    PicturesComponent,
    TechnologiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDividerModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}

export let AppInjector: Injector;

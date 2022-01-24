import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { CoursesComponent } from './courses/courses.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WizardsComponent } from './wizards/wizards.component';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
import { ServicesAuth } from '../auth/services/services.Auth';
import { ServicesService } from './services/services.service';
import { InfoService } from './services/info.service';
import { TestComponent } from './test/test.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    HomeComponent,
    QuizComponent,
    CoursesComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    WizardsComponent,
    TestComponent,

  ],
  imports: [
    CommonModule,
    NgxSliderModule,
    ReactiveFormsModule,
    NgWizardModule

    
  ],
  providers:[
    ServicesAuth,
    ServicesService,
    InfoService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class PagesModule { }

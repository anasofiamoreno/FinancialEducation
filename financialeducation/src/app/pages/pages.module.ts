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
import { ServicesAuth } from '../auth/services/services.Auth';
import { ServicesService } from './services/services.service';
import { InfoService } from './services/info.service';
import { EdituserinfoComponent } from './edituserinfo/edituserinfo.component';




@NgModule({
  declarations: [
    HomeComponent,
    QuizComponent,
    CoursesComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    EdituserinfoComponent
  ],
  imports: [
    CommonModule,
    NgxSliderModule,
    ReactiveFormsModule
  ],
  providers:[
    ServicesAuth,
    ServicesService,
    InfoService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class PagesModule { }

import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { RegisterComponent } from '../../auth/register/register.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  public question1: boolean[] = [];
  public event: boolean = false;
  public event1: boolean = false;

  formQuiz: FormGroup = this.fb.group({
    question1option1: [''],
    question1option2: [''],
    question1option3: [''],
    question1option4: [''],
    question1option5: [''],
    question1option6: [''],
    question2: [''],
    q2option1: [''],
    q2option2: [''],
    q2option3: [''],
    q2option4: [''],
    q3option1: [''],
    q3option2: [''],
    question5option1: [''],
    question5option2: [''],
    question5option3: [''],
    question5option4: [''],
    question5option5: [''],
    q4option1: [''],
    q4option2: [''],
    q4option3: [''],
    q4option4: [''],
    name: ['', [Validators.required, Validators.minLength(3)]],
    age: ['', [Validators.required, Validators.minLength(2)]],
    gender: ['', [ Validators.minLength(2)]],
  });

  get questionOne() {
    return this.formQuiz;
  }

  score() {
    const { name, age, gender } = this.formQuiz.value;

    for (const property in this.formQuiz.value) {
      if (property === 'question2') {
        if (this.formQuiz.value[property] <= 5) {
          this.formQuiz.value[property] = false;
        }
        if (this.formQuiz.value[property] > 5) {
          this.formQuiz.value[property] = true;
        }
      }
      this.question1.push(this.formQuiz.value[property]);
    }
    let score = this.question1.filter((element) => {
      return element == true;
    });

    this.servicePage.registerData(name, age, gender, score.length);
  }

  value: number = 5;
  options: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 2.5) {
        return 'red';
      }
      if (value <= 7) {
          return 'orange';
      }
      if (value <= 8) {
          return '#FFCE00';
      }
      return '#FFCE00';
    }
  };

  openModal () { 
    const modalRef = this.modalService.open (RegisterComponent, 
      { 
        scrollable: true,
        // windowClass: 'myCustomModalClass', 
        keyboard: false,
        backdrop: 'static',
        size: 'lg', 
        windowClass: 'modal-xl'
      });
      
    }

  
  constructor(private fb:FormBuilder, private servicePage:ServicesService, private modalService: NgbModal) { }

 

  ngOnInit(): void {}
}

import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {

public question1:boolean[]=[];

  formQuiz: FormGroup= this.fb.group({
    question1option1: [''],
    question1option2: [''],
    question1option3: [''],
    question1option4: [''],
    question1option5: [''],
    question1option6: [''],
  })

  get questionOne(){
    return this.formQuiz
  }

  score(){
    // const {question1option1,question1option2,question1option3,question1option4,question1option5,question1option6} = this.formQuiz.value;
    
    // console.log(this.formQuiz.value)
    for (const property in this.formQuiz.value) {
      this.question1.push(this.formQuiz.value[property]);
      
    }
    // console.log(this.question1);
    let array = this.question1.filter(element=>{
      return element==true;
    })
    console.log(array.length);
  }

  value: number = 50;
  options: Options = {
    floor: 0,
    ceil: 10,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 25) {
          return 'red';
      }
      if (value <= 50) {
          return 'orange';
      }
      if (value <= 75) {
          return 'yellow';
      }
      return '#2AE02A';
    }
  };

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}

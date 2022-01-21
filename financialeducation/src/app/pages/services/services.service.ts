import { Injectable } from '@angular/core';
import { UserQuiz } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
private _userQuiz!:UserQuiz


  constructor() { }

  registerData(name:string, age:number, gender:string, score:number){
   console.log(score)
   this._userQuiz={
    name:name,
    age:age,
    gender:gender,
    level:'Elfo ahorrador'
  }
   switch (true) {
    case  score > 1 && score < 3:
       this._userQuiz.level = "Elfo ahorrador"
        break;
    case score > 0 && score < 10:
        console.log("Result: 5");
        break;
    case score > 0 && score < 10:
        console.log("Result: 10");
        break;
}
   
  }
}

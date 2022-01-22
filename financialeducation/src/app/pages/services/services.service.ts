import { Injectable } from '@angular/core';
import { UserQuiz } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
private _userQuiz!:UserQuiz

get userQuiz(){
  return this._userQuiz
}

  constructor() { }

  registerData(name:string, age:number, gender:string, score:number){
    
   this._userQuiz={
    name:name,
    age:age,
    gender:gender,
    level:score
  }
   
  }
}

import { Injectable } from '@angular/core';
import { Firestore, getDoc, DocumentData } from '@angular/fire/firestore';
import { collection, getDocs, query, where } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 public filterAdmin!:string 
 public data!:DocumentData[]


  constructor(private bd:Firestore ) { }

  async filter(categoria:number, subcategoria:any){
   
    if (categoria==1){
      this.filterAdmin='age'
    }
    if(categoria==2){
      this.filterAdmin='state'
    }
    if(categoria==3){
      this.filterAdmin='sex'
    }
    
    console.log(this.filterAdmin);
    console.log(subcategoria);

    const q = query(collection(this.bd, "costumer"), where(this.filterAdmin, "==", subcategoria));
    return await getDocs(q);
    // querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    // this.data=doc.data()
    // console.log(this.data)
    // //return doc.data();
//});
  }
  
}

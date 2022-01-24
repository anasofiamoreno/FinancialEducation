import { Injectable } from '@angular/core';
import { Firestore, getDoc } from '@angular/fire/firestore';
import { collection, getDocs, query, where } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 public filterAdmin!:string 

  constructor(private bd:Firestore ) { }

  async filter(categoria:number, subcategoria:any){
   
    if (categoria==1){
      this.filterAdmin='age'
    }
    if(categoria==2){
      this.filterAdmin='city'
    }
    if(categoria==3){
      this.filterAdmin='sex'
    }
    
    console.log(this.filterAdmin);
    console.log(subcategoria);

    const q = query(collection(this.bd, "costumer"), where(this.filterAdmin, "==", subcategoria));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    return doc.data();
});
  }
  
}

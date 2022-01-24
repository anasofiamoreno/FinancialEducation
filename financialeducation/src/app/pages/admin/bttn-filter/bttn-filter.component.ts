import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentData, doc } from '@angular/fire/firestore';

@Component({
  selector: 'app-bttn-filter',
  templateUrl: './bttn-filter.component.html',
  styleUrls: ['./bttn-filter.component.css']
})
export class BttnFilterComponent implements OnInit {
  public data:DocumentData[]=[]

  formFilter: FormGroup = this.fb.group({
    categoria: ['', [Validators.required]],
    subcategoria: [''],
  }) 
  

  constructor(private adminService:AdminService, private fb:FormBuilder) { }

  filterAdmin(){
   const {categoria, subcategoria}=this.formFilter.value
   this.adminService.filter(categoria,subcategoria)
     .then((result) => {
       result.forEach((doc)=>{
        console.log(doc.id, " => ", doc.data());
        console.log(doc.data());
        this.data.push(doc.data());
        console.log(this.data);
        this.adminService.data=this.data;
       })
    
    //return doc.data();
});
   
   
  }

  ngOnInit(): void {
  }
 

}

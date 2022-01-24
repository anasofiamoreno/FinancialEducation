import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bttn-filter',
  templateUrl: './bttn-filter.component.html',
  styleUrls: ['./bttn-filter.component.css']
})
export class BttnFilterComponent implements OnInit {
  
  formFilter: FormGroup = this.fb.group({
    categoria: ['', [Validators.required]],
    subcategoria: [''],
  }) 
  

  constructor(private adminService:AdminService, private fb:FormBuilder) { }

  filterAdmin(){
   const {categoria, subcategoria}=this.formFilter.value
   this.adminService.filter(categoria,subcategoria)
  }

  ngOnInit(): void {
  }
 

}

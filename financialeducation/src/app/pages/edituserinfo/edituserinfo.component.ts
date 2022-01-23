import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesAuth } from 'src/app/auth/services/services.Auth';
import { InfoService } from '../services/info.service';
import { Auth, signOut} from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
//import { Firestore, setDoc, updateDoc } from 'firebase/firestore';

@Component({
  selector: 'app-edituserinfo',
  templateUrl: './edituserinfo.component.html',
  styleUrls: ['./edituserinfo.component.css'],
})
export class EdituserinfoComponent implements OnInit {

  name: string | undefined = ""
  email: string | undefined = ""
  state: string | undefined = ""
  city: string | undefined = ""
  job: string | undefined = ""
  editing : boolean = false

  constructor(private modalService: NgbModal, private infoService: InfoService,  private auth: Auth, private db:Firestore) { }

  closeS(){
    signOut(this.auth)
    window.location.href = '/';
  }

  closeModal(){
    this.modalService.dismissAll()


    

  }

  editData(){
    console.log("editing")
   this.editing = !this.editing
    const items = document.querySelectorAll(".editing")
    items.forEach(item => {
   
        item.removeAttribute("readonly")
        item.setAttribute("style", "border-width: 2px; border-style: solid;")
      
    });

  }

  saveData(){
    console.log("save")
    this.editing = !this.editing

    const items = document.querySelectorAll(".editing")
    items.forEach(item => {
      item.setAttribute("readonly", "")
      item.setAttribute("style", "background: white; border-botton: none")
        
    });


  }

  ngOnInit(): void {

    this.name = this.infoService.userInfo?.name
    this.email = this.infoService.userInfo?.email
    this.state = this.infoService.userInfo?.state
    this.city = this.infoService.userInfo?.city
    this.job = this.infoService.userInfo?.job

  }

}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesAuth } from 'src/app/auth/services/services.Auth';
import { InfoService } from '../services/info.service';
import { Auth, signOut} from '@angular/fire/auth';
import { Firestore, updateDoc, doc, getDoc } from '@angular/fire/firestore';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-edituserinfo',
  templateUrl: './edituserinfo.component.html',
  styleUrls: ['./edituserinfo.component.css'],
})
export class EdituserinfoComponent implements OnInit {

  name: string  = ""
  email: string = ""
  state: string | undefined = ""
  city: string | undefined = ""
  job: string | undefined = ""
  editing : boolean = false

  constructor(private modalService: NgbModal, private infoService: InfoService,  private auth: Auth, private db:Firestore, private servicePage: ServicesService) { }

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
        item.setAttribute("style", "border-width: 2px; border-bottom-style: solid;")
      
    });

  }

  async saveData(){
    console.log("save", this.email)

    await updateDoc(doc(this.db, "costumer", this.email),{
      name: this.name,
      city: this.city,
      state: this.state,
      job: this.job

    })

    const infoUser = await (
      await getDoc(doc(this.db, 'costumer', "test1@test.com"))
    ).data();

    this.infoService.userInfo = infoUser

    


    this.editing = !this.editing

    const items = document.querySelectorAll(".editing")
    items.forEach(item => {
      item.setAttribute("readonly", "")
      item.setAttribute("style", "background: white; border-botton: none")
        
    });


  }

  ngOnInit(): void {

    this.name = typeof this.infoService.userInfo?.name == "string" ? this.infoService.userInfo?.name : ""
    this.email = typeof this.infoService.userInfo?.email == "string" ? this.infoService.userInfo?.email : ""
    this.state = this.infoService.userInfo?.state
    this.city = this.infoService.userInfo?.city
    this.job = this.infoService.userInfo?.job

  }

}

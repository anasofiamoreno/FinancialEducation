import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesAuth } from 'src/app/auth/services/services.Auth';
import { LoginComponent } from '../../auth/login/login.component';
import { EdituserinfoComponent } from '../edituserinfo/edituserinfo.component';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string | undefined = ""
  email: string | undefined = ""


  constructor(private modalService: NgbModal, private authServices: ServicesAuth, private infoServices: InfoService, private auth: Auth) { }

  openModal () { 
    const modalRef = this.modalService.open (LoginComponent, 
      { 
        scrollable: true,
        windowClass: 'myCustomModalClass', 
        keyboard: true,
        backdrop: 'static'
      });
      
    }

    openModalUser () { 
      const modalRef = this.modalService.open (EdituserinfoComponent, 
        { 
          scrollable: false,
          windowClass: 'myCustomModalClass', 
          keyboard: true,
          backdrop: 'static',
          centered: true
        });
        
      }

  ngOnInit(): void {

    onAuthStateChanged(this.auth, (user) => {
      if(user){
        console.log(user)
        this.email = typeof user?.email === 'string' ?  user.email : ""
    
      }
    })

    

  }

}

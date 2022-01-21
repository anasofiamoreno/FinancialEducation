import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  
  openModal () { 
    const modalRef = this.modalService.open (LoginComponent, 
      { 
        scrollable: true,
        windowClass: 'myCustomModalClass', 
        keyboard: false,
        backdrop: 'static'
      });
      
    }

  ngOnInit(): void {
  }

}

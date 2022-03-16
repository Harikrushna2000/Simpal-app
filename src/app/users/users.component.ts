import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userList:any;
  closeResult = '';

  usersForm = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor(private usersService: UsersService,private modalService: NgbModal) {}

  ngOnInit(): void {
    this.usersService.getUserList().subscribe(
      (res) => {
        this.userList = res;
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  
  open(content:any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(){
    console.log(this.usersForm.value)
  }

  deleteData(id:any){
    this.usersService.deleteUsers(id).subscribe((res)=>{
      console.log(res);
    },
    error=>{
      console.log(error);
    })
  }
}

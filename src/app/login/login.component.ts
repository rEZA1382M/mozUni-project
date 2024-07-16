import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Student } from "../students/student.model";
import { StudentService } from "../students/student.service";
import { EditformComponent } from "../editform/editform.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{

  constructor(public stSrv: StudentService, private modalService: NgbModal) {  }

  students: Student[] = []

  moz1: number = 0

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._]+@[a-zA-Z]+\\.+[a-z]+$")]),
    password: new FormControl('', [Validators.required])
  })

  login(){
    try{
    this.moz1 = 1;
    this.stSrv.logInCheckerFunc(this.loginForm)
    this.loginForm.markAsUntouched()
    this.stSrv.moz = undefined
    } catch (err){
      console.log("error", err)
    }
  }

  openCreateModal(){
    const modalRef = this.modalService.open(EditformComponent)
    modalRef.componentInstance.activeModal = modalRef
    modalRef.componentInstance.modalMode = 'create';
  }

  ngOnInit(){
    this.stSrv.getStudents().subscribe(result => {
      this.students = result
    })
    this.stSrv.moz = undefined
  }
}

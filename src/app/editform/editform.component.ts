import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from "../students/student.service";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { GradeCalculatorComponent } from "./grade-calculator/grade-calculator.component";

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit{

  constructor(private stSrv: StudentService, private modalService: NgbModal){ }

  newStudentDetails: any;

  activeModal: any;

  modalMode: any;

  tempInputValues: any

  avg1: any

  gradeChecker: boolean =  false;

  moz: boolean = false;

  profileForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    idDepartment: new FormControl('',[Validators.required, Validators.pattern("^10[1-4]")]),
    id: new FormControl(),
    age: new FormControl(''),
    grade: new FormControl('',[Validators.required, Validators.pattern("^[0-9]+$")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._]+@[a-zA-Z]+\\.+[a-z]+$")]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")])
  });

  updateProfile(){
    if (this.modalMode == 'edit'){
      if (this.profileForm.controls.grade.value == '') {
        this.gradeChecker = true
        console.log(1)
      }
      for (let control of Object.keys(this.profileForm.controls)){
        // @ts-ignore
        if (this.profileForm.controls[control].invalid){
          if (control == 'grade'){
            continue
          }
          this.profileForm.markAllAsTouched()
          return 1
        }
      }
        this.newStudentDetails = this.profileForm.value
        this.stSrv.updateStudent(this.newStudentDetails).subscribe();
        this.stSrv.subject.next(null);
        this.stSrv.loggedInStudent = this.newStudentDetails
        this.activeModal.close();
        return 0
    }
    else if(this.modalMode == 'create'){
       if (this.profileForm.controls.grade.value == '') {
          this.gradeChecker = true
       }
       if (this.profileForm.controls.role.invalid) {
         this.moz = true
       }
       for(let control of Object.keys(this.profileForm.controls)){
         // @ts-ignore
         if(this.profileForm.controls[control].invalid){
           if(control == 'grade'){
             if (this.profileForm.controls[control].value != ''){
               continue
             }else {
               this.profileForm.markAllAsTouched()
             }
           }
           this.profileForm.markAllAsTouched()
           return 1
         }
       }
      this.newStudentDetails = this.profileForm.value
      this.stSrv.createStudent(this.newStudentDetails).subscribe();
      this.activeModal.close();
      this.stSrv.subject.next(null)
      return 0
    }
    return 1
  }

  grade(){
    if(this.modalMode == 'edit'){
      this.profileForm.controls.grade.patchValue('')
    }
    this.newStudentDetails = this.profileForm.value
    this.stSrv.waitForGrade(this.newStudentDetails)
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
    };
    const modalRef = this.modalService.open(GradeCalculatorComponent, ngbModalOptions)
    modalRef.componentInstance.gradeModal = modalRef
    modalRef.closed.subscribe(() => {
      this.avg1 = modalRef.componentInstance.avg
      this.profileForm.controls.grade.patchValue(this.avg1)
      this.gradeChecker = false;
    })
  }

  ngOnInit() {
    // this.autoSave()
    this.stSrv.subject.subscribe(res => {
      this.tempInputValues = res
    })
    this.profileForm.patchValue(this.tempInputValues)
  }
}

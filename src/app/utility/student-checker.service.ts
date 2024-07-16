import { Injectable } from '@angular/core';
import { StudentService } from "../students/student.service";


@Injectable({
  providedIn: 'root'
})
export class StudentCheckerService {

  constructor(private stsrv: StudentService) { }

  isLoggedIn(): boolean{
    if (this.stsrv.loggedInStudent != undefined){
      if (this.stsrv.loggedInStudent.role == "teacher"){
        console.log("can not access this page")
        return false;
      }else{
        return true;
      }
    }
    else {
      return false;
    }
  }

}

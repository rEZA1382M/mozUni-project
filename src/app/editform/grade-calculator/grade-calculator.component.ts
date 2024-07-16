import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { StudentService } from "../../students/student.service";


@Component({
  selector: 'app-grade-calculator',
  templateUrl: './grade-calculator.component.html',
  styleUrls: ['./grade-calculator.component.css']
})
export class GradeCalculatorComponent{

  constructor(private stSrv: StudentService) {  }

  gradeModal: any;

  avg: number = 0;

  gradeForm = new FormGroup({
    subject1: new FormControl('', [Validators.required, Validators.min(0), Validators.max(20)]),
    subject2: new FormControl('', [Validators.required, Validators.min(0), Validators.max(20)]),
    subject3: new FormControl('', [Validators.required, Validators.min(0), Validators.max(20)]),
    subject4: new FormControl('', [Validators.required, Validators.min(0), Validators.max(20)])
  });

  calcGrade(){
    if(this.gradeForm.invalid){
      this.gradeForm.markAllAsTouched();
      return;
    }else{
      let i = 0;
      let sum = 0;
      for(let values of Object.values(this.gradeForm.value)){
        sum += Number(values);
        i++;
      }
      this.avg = sum / i;
      this.gradeModal.close();
    }
  }
}

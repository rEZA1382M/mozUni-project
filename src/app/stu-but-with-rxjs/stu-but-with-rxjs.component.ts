import { Component, HostListener } from '@angular/core';
import { Subject } from "rxjs";
import { StudentService } from "../students/student.service";
import { Student } from "../students/student.model";

@Component({
  selector: 'app-stu-but-with-rxjs',
  templateUrl: './stu-but-with-rxjs.component.html',
  styleUrls: ['./stu-but-with-rxjs.component.css']
})
export class StuButWithRxjsComponent {

  ngOnInit() {
    this.stSrv.getStudents().subscribe(result => {
      this.students = result
    })
  }

  value: any

  students: Student[] = []

  filteredStudents: Student[] = []

  constructor(private stSrv:StudentService) {  }

  time: string = new Date().toLocaleTimeString().slice(0, 2) + new Date().toLocaleTimeString().slice(3, 5) + new Date().toLocaleTimeString().slice(6, 8)

  @HostListener('document:keyup', ['$event'])
  KeyUpEvent() {
    this.time = new Date().toLocaleTimeString().slice(0, 2) + new Date().toLocaleTimeString().slice(3, 5) + new Date().toLocaleTimeString().slice(6, 8)
  }

  emptySearchBar: number =  0
  lastTime: string = new Date().toLocaleTimeString().slice(0, 2) + new Date().toLocaleTimeString().slice(3, 5) + new Date().toLocaleTimeString().slice(6, 8)
  enteredValue: string = ''
  check(value: any){
    this.enteredValue = value.target.value
    if (this.enteredValue == '' || this.enteredValue == null){
      this.filteredStudents = []
    }
    let nameSbj = new Subject()
    nameSbj.subscribe({
      next: (val: any) => {
        if(this.students.filter(item=> item.name.toLowerCase().startsWith(val.toLowerCase())).length == 0) {
          this.emptySearchBar++;
        }else{
          this.emptySearchBar = 0;
        }
       if (this.enteredValue.length > 2 || ((+this.time) >= ((+this.lastTime) + 2))){
         this.filteredStudents = this.students.filter(item=> item.name.toLowerCase().startsWith(val.toLowerCase()))
       }
      }
    })
    nameSbj.next(this.enteredValue)

    let timeSbj = new Subject()
    timeSbj.subscribe({
      next: (val1: any) => {
        this.lastTime = val1
      }
    })
    timeSbj.next(this.time)
  }
}

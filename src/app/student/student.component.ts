import { Component, OnInit } from '@angular/core';
import { StudentService } from "../students/student.service";
import { DepartmentService } from "../departments/department.service";
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  constructor(private stSrv:StudentService, private depSrv: DepartmentService) {  }

  students: ({
    name: string;
    id: number;
    idDepartment: number;
    age: number;
    grade: number;
    birthday: any;
  })[] = [];

  department: ({
    namedep:any;
    idDep: any;
  }) [] = []

  ngOnInit() {
    this.stSrv.getStudents().subscribe(result => {
      this.students = result
    })
    this.depSrv.getDepartments().subscribe(result => {
      this.department = result;
    })
  }

  value :any; //gets input
  //selected person details
  selectedPersonName: string = '';
  selectedPersonId: any;
  selectedPersonAge: any;
  selectedPersonGrade: any;
  selectedPersonDepartment: any;
  //empty searchbar controller variable
  emptySearchBar: number = 0


  //array which filters the names from the student list according to the user input
  filterednames: ({
    name: string;
    id: number;
    age: number;
    grade: number;
  })[] = [];

  //function that updates the filterednames array and the empty searchbar controller based on the user input
  update(value: any){
    //gets the input value from the user
    let okName = value.target.value;

    if (okName === ''){
      this.selectedPersonName = '';
    }
      this.filterednames = this.students.filter(item=> item.name.toLowerCase().startsWith(okName.toLowerCase()))

    if(this.filterednames.length === 0){
      this.emptySearchBar++;
      this.selectedPersonName = '';
    } else if(okName === ''){
      this.emptySearchBar = 0;
      this.filterednames = [];
    } else{
      this.emptySearchBar = 0;
    }
  }
  //sends the details of the selected student by the user to each variable
  showStudent(num1: any){
    this.selectedPersonName = num1.name;
    this.selectedPersonId = num1.id;
    this.selectedPersonAge = num1.age;
    this.selectedPersonGrade = num1.grade;
    this.selectedPersonDepartment = this.department.find(item => {
      if(item.idDep == num1.idDepartment){
        return item.namedep;
    }
    })
    this.filterednames = [];
    }


  protected readonly console = console;
}


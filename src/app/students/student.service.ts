import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";



@Injectable({
  providedIn: 'root'
})

export class StudentService{
  private studentsUrl = 'api/students';

  constructor (private http: HttpClient, private router: Router){ }

  loggedInStudent: any;

  students1: Student[] = [];

  moz: any

  loadingSpinnerChecker: boolean = false;


  allCoursesStorage: any = []
  satCoursesStorage: any = []
  sunCoursesStorage: any = []
  monCoursesStorage: any = []
  tueCoursesStorage: any = []
  wedCoursesStorage: any = []
  thrCoursesStorage: any = []
  friCoursesStorage: any = []


  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentsUrl);
  }

  createStudent(student: Student):Observable<Student>{
    student.id = null;
    return this.http.post<Student>(this.studentsUrl, student)
  }

  updateStudent(student: Student):Observable<any>{
    return this.http.put(this.studentsUrl + '/' + student.id, student);
  }

  deleteStudent(id: number){
    return this.http.delete(this.studentsUrl + '/' + id)
  }

  logInCheckerFunc(form: any): any {
    this.loadingSpinnerChecker = true
    setTimeout(() => this.getStudents().subscribe(res => {
      this.students1 = res
      this.students1.filter(result => {
        if (result.email == form.value.email && result.password == form.value.password){
          this.loadingSpinnerChecker = false
          this.loggedInStudent = result
          this.router.navigate(
            ["home"]
          )
        }
        else{
          this.loadingSpinnerChecker = false
          this.moz = false
        }
      })
    }), 2000)
  }


  subject = new BehaviorSubject<Student | null>(null)

  waitForGrade(student: Student){
    this.subject.next(student)
  }
}

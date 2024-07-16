import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { StudentComponent } from "./student/student.component";
import { TestingbootstrapComponent } from "./testingbootstrap/testingbootstrap.component";
import { DepartmentComponent } from "./department/department.component";
import { DepstudentsComponent } from "./department/depstudents/depstudents.component";
import { GradeCalculatorComponent } from "./editform/grade-calculator/grade-calculator.component";
import { LoginComponent } from "./login/login.component";
import { CheckerGuard } from "./utility/checker.guard";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { CourseUnitSelectionComponent } from "./course-unit-selection/course-unit-selection.component";
import { CourseTableComponent } from "./course-table/course-table.component";
import { StudentCheckerGuard } from "./utility/student-checker.guard";
import {InfoComponent} from "./info/info.component";
import {StuButWithRxjsComponent} from "./stu-but-with-rxjs/stu-but-with-rxjs.component";


const routes: Routes = [
  {path: '',component:HomeComponent, data: {title: 'home'}},
  {path: 'about',component:AboutComponent, data: {title: 'about'}},
  {path: 'student',component:StudentComponent, data: {title: 'student'}},
  {path: 'home',component:HomeComponent, data: {title: 'home'}},
  {path: 'test', component: TestingbootstrapComponent},
  {path: 'department', component: DepartmentComponent, data: {title: 'department'}},
  {path: 'depstudent', component: DepstudentsComponent},
  {path: 'facultyStaff', loadChildren: () => import('./faculty-staff/faculty-staff.module').then(res => res.FacultyStaffModule), data: {title: 'faculty staff'}},
  {path: 'studentBirthday', loadChildren: () => import('./student-birthday/student-birthday.module').then(result => result.StudentBirthdayModule), data: {title: 'student birthday'}, canActivate: [CheckerGuard]},
  {path: 'gradeCalculator', component: GradeCalculatorComponent},
  {path: 'login', component: LoginComponent, data: {title: 'login'}},
  {path: 'loading', component: LoadingSpinnerComponent},
  {path: 'courseUnit', component: CourseUnitSelectionComponent, data: {title: 'courses'}, canActivate: [StudentCheckerGuard]},
  {path: 'courseTable', component:CourseTableComponent},
  {path: 'info', component: InfoComponent, data: {title: 'info'}},
  {path: 'stu', component: StuButWithRxjsComponent, data: {title: 'StuRxjs'}}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

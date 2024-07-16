import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestingbootstrapComponent } from './testingbootstrap/testingbootstrap.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DepartmentComponent } from './department/department.component';
import { DepstudentsComponent } from './department/depstudents/depstudents.component';
import { HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './footer/footer.component';
import { EditformComponent } from './editform/editform.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from "./data.service";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { FacultyStaffComponent } from './faculty-staff/faculty-staff.component';
import { FacultyStaffModule } from "./faculty-staff/faculty-staff.module";
import { MypipePipe } from './mypipe.pipe';
import { StudentBirthdayComponent } from './student-birthday/student-birthday.component';
import { StudentBirthdayModule } from "./student-birthday/student-birthday.module";
import { NgPersianDatepickerModule } from "ng-persian-datepicker";
import { GradeCalculatorComponent } from './editform/grade-calculator/grade-calculator.component';
import { LoginComponent } from './login/login.component';
import { CheckerGuard } from "./utility/checker.guard";
import { CheckerServiceService } from "./utility/checker-service.service";
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CourseUnitSelectionComponent } from './course-unit-selection/course-unit-selection.component';
import { CourseTableComponent } from "./course-table/course-table.component";
import { StudentCheckerService } from "./utility/student-checker.service";
import { StudentCheckerGuard } from "./utility/student-checker.guard";
import { MobileModalComponent } from './mobile-modal/mobile-modal.component';
import { NgxEchartsModule } from "ngx-echarts";
import { InfoComponent } from './info/info.component';
import { StuButWithRxjsComponent } from './stu-but-with-rxjs/stu-but-with-rxjs.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    StudentComponent,
    TestingbootstrapComponent,
    NavbarComponent,
    DepartmentComponent,
    DepstudentsComponent,
    FooterComponent,
    EditformComponent,
    EditModalComponent,
    FacultyStaffComponent,
    MypipePipe,
    StudentBirthdayComponent,
    GradeCalculatorComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    CourseUnitSelectionComponent,
    CourseTableComponent,
    MobileModalComponent,
    InfoComponent,
    StuButWithRxjsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    FacultyStaffModule,
    StudentBirthdayModule,
    NgPersianDatepickerModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
  ],
  providers: [
    CheckerGuard,
    CheckerServiceService,
    StudentCheckerService,
    StudentCheckerGuard
  ],
  bootstrap: [AppComponent],

  exports: [
    MypipePipe,
  ]
})
export class AppModule { }

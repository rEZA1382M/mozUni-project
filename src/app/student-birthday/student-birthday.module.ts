import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StudentBirthdayRoutingModule } from './student-birthday-routing.module';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { DataService } from "../data.service";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { DatePipePipe } from './date-pipe.pipe';
import { DateSortPipePipe } from "./date-sort-pipe.pipe";
import { NgPersianDatepickerModule } from "ng-persian-datepicker";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    DatePipePipe,
    DateSortPipePipe
  ],
  exports: [
    DatePipePipe,
    DateSortPipePipe
  ],
  imports: [
    CommonModule,
    StudentBirthdayRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    NgPersianDatepickerModule,
    ReactiveFormsModule,
  ]
})
export class StudentBirthdayModule { }

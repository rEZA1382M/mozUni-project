import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FacultyStaffRoutingModule } from './faculty-staff-routing.module';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { DataService } from "../data.service";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { FacultyDetailsComponent } from "../faculty-details/faculty-details.component";

@NgModule({
  declarations: [
    FacultyDetailsComponent
  ],
  imports: [
    CommonModule,
    FacultyStaffRoutingModule,
    HttpClientModule,
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [],
  bootstrap: [],

})
export class FacultyStaffModule { }

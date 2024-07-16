import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyDetailsComponent } from "../faculty-details/faculty-details.component";
import { FacultyStaffComponent } from "./faculty-staff.component";

const routes: Routes = [
  {path: '', component: FacultyStaffComponent},
  {path: 'facultyDetails', component: FacultyDetailsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

@Injectable({providedIn: 'root'})


export class FacultyStaffRoutingModule { }

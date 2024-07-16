import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentBirthdayComponent } from "./student-birthday.component";

const routes: Routes = [
  {path: '', component: StudentBirthdayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentBirthdayRoutingModule { }

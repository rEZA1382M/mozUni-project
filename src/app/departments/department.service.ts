import { Injectable } from "@angular/core";
import { Department } from "./department.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DepartmentService{
  private departmentUrl = 'api/departments';

  constructor (private http: HttpClient){ }

  getDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(this.departmentUrl);
  }
}

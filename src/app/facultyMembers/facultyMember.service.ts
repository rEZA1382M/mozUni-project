import { Injectable } from "@angular/core";
import { FacultyMember } from "./facultyMember.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FacultyMemberService{
  private facultyMemberUrl = 'api/facultyMembers';

  constructor(private http: HttpClient) {  }

  getFacultyMembers(): Observable<FacultyMember[]>{
    return this.http.get<FacultyMember[]>(this.facultyMemberUrl);
  }

}

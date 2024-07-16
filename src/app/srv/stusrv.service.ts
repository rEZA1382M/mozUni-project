import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StusrvService {

  constructor(private http:HttpClient) { }

  getstudents(){
   return this.http.get<any>('./assets/data/students.json')
  }
  getdep(){
   return this.http.get<any>('./assets/data/dep.json')
  }

}

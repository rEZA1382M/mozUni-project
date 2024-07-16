import {Component, OnInit} from '@angular/core';
import {StusrvService} from "../srv/stusrv.service";
import {StudentService} from "../students/student.service";
import { Router } from "@angular/router";
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public stsrv: StudentService, public router: Router) {
  }

  ngOnInit(){
  }

}

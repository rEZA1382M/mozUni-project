import { Component } from '@angular/core';
import { StudentService } from "../students/student.service";
import { Router } from "@angular/router";
import{ HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  scrollPercentRounded: number = 0

  @HostListener('window:scroll')
  onScroll() {
    let scrollTop = window.scrollY;
    let componentHeight = document.body.scrollHeight;
    let browserHeight = window.innerHeight;
    let scrollPercent = scrollTop / (componentHeight - browserHeight);
    this.scrollPercentRounded = Math.round(scrollPercent * 100);
  }

  constructor(public stsrv: StudentService, public router: Router) { }

    protected readonly Component = Component;
}

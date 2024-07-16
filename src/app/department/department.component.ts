import {Component, OnInit} from '@angular/core';
import {DepartmentService} from "../departments/department.service";
import {StudentService} from "../students/student.service";
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {MobileModalComponent} from "../mobile-modal/mobile-modal.component";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent implements OnInit{

  departments: any

  constructor(private depSrv: DepartmentService, public stSrv: StudentService, private modalService: NgbModal) {  }

  mobileModalOptions : NgbModalOptions = {
    centered : true
  }

  ngOnInit() {
    this.depSrv.getDepartments().subscribe(result => {
      this.departments = result;
    })
    if (this.stSrv.loggedInStudent != undefined){
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        this.modalService.open(MobileModalComponent, this.mobileModalOptions)
      }
    }

  }

  protected readonly sessionStorage = sessionStorage;
}

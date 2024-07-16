import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FacultyMemberService} from "../facultyMembers/facultyMember.service";

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit{

  listStaff: ({
    nameMem: any;
    idDep: any;
  }) [] = []

  filterdStaff: ({
    nameMem: any;
    idDep: any
  }) [] = []

  receivedParams: any

  constructor(private route: ActivatedRoute, private router: Router, private facMemSrv: FacultyMemberService) {  }

  filterStaff(num: number){
    this.filterdStaff = this.listStaff.filter(item => item.idDep == num);
    return this.filterdStaff;
  }

  goBack(){
    this.router.navigate(
      ['facultyStaff']
    )
  }

  ngOnInit() {
    this.facMemSrv.getFacultyMembers().subscribe(result => {
      this.listStaff = result
      this.route.queryParams.subscribe(params => {
        this.receivedParams = params
        this.filterStaff(this.receivedParams.idDep)
      })
    })
  }


}

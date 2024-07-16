import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DepartmentService } from "../departments/department.service";
import { FacultyMemberService } from "../facultyMembers/facultyMember.service";
import { EChartsOption } from "echarts";

@Component({
  selector: 'app-faculty-staff',
  templateUrl: './faculty-staff.component.html',
  styleUrls: ['./faculty-staff.component.css']
})
export class FacultyStaffComponent implements OnInit{
  constructor(private router: Router, private depsrv: DepartmentService, private facMemSrv: FacultyMemberService) {  }

  departments: any

  listStaff: any

  value: any

  enteredName: string = ''

  names: any[] = []

  chart: any

  ngOnInit() {
    this.chart = {}
    this.depsrv.getDepartments().subscribe(result => {
      this.departments = result;
    })
    this.facMemSrv.getFacultyMembers().subscribe(result => {
      this.listStaff = result
      this.generateSeries(this.listStaff)
    })
  }

  generateSeries(list: any){
    this.chart = {
      title: {
        text: 'Teachers grades',
      },
      tooltip: {
        order: 'valueDesc',
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type : 'category',
        name: 'Year',
        boundaryGap: false,
        data: [2020, 2021, 2022, 2023],
        nameLocation: 'middle',
      },
      yAxis: {
        type: 'value',
        name: 'Grade',
        axisLabel: {
          margin: 30,
          fontSize: 16,
        },
        interval: 5,
        min: 5,
        max: 20
      },
      animationDuration: 3000,
      series: this.names,
    }
    for (let members of list){
      this.names.push({
        name: members.nameMem,
        type: 'line',
        smooth: 'true',
        symbolSize: 15,
        lineStyle: {
          width: 4
        },
        data: [members.grade2020, members.grade2021, members.grade2022, members.grade2023],
        labelLayout: {
          moveOverlap: 'shiftY'
        },
        endLabel: {
          show: true,
          formatter: members.nameMem,
          distance: 20,
          fontSize: 20,
          color: '#b5e0b5'
        },
        emphasis: {
          focus: 'series'
        },
      })
    }
  }

  update(value: any){
    this.enteredName = value.target.value
  }

  goToFacultyDetails(idDep: any){
    this.router.navigate(
      ['facultyStaff/facultyDetails'],
      {
        queryParams: {idDep}
      }
    )
  }
}

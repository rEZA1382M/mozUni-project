import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StudentService } from "../students/student.service";
import { FormControl } from "@angular/forms";
import { Jalali } from "jalali-ts";
import { Student } from "../students/student.model";
import { IDatepickerTheme } from 'ng-persian-datepicker';
import { EChartsOption } from "echarts";
import { MobileModalComponent } from "../mobile-modal/mobile-modal.component";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";

const customTheme: Partial<IDatepickerTheme> = {
  background: '#313336',
  text: '#c8c8c9',
  todayText: '#c8c8c9',
  selectedBackground: '#007262',
  selectedText: '#c8c8c9',
};

@Component({
  selector: 'app-student-birthday',
  templateUrl: './student-birthday.component.html',
  styleUrls: ['./student-birthday.component.css']
})
export class StudentBirthdayComponent implements OnInit, AfterViewInit {

  dateValueMin = new FormControl
  dateValueMax = new FormControl
  constructor(private stSrv: StudentService, public modalService: NgbModal) {  }

  listStudents: Student[] = [];

  enteredDateMin: any;
  enteredDateMax: any;

  under18: number = 0
  from18_20: number = 0
  from20_22: number = 0
  from22_24: number = 0
  more24: number = 0

  scatterChart: EChartsOption = {  }

  mobileModalOptions : NgbModalOptions = {
    centered : true
  }

  search(enteredMin: any, enteredMax: any){
    this.enteredDateMin = enteredMin.value.slice(0, 4) + enteredMin.value.slice(5, 7) + enteredMin.value.slice(8, 10);
    this.enteredDateMax = enteredMax.value.slice(0, 4) + enteredMax.value.slice(5, 7) + enteredMax.value.slice(8, 10);
  }

  ngOnInit() {
    this.stSrv.getStudents().subscribe(result => {
      this.listStudents = result;
      this.generateChart(this.listStudents)
    })
  }

  ngAfterViewInit(){
    if(/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      this.modalService.open(MobileModalComponent, this.mobileModalOptions)
    }
  }

  generateChart(list: any){
    for (let items of list){
      if(items.age < 18){
        this.under18++
      }else if(items.age >= 18 && items.age < 20){
        this.from18_20++
      }else if(items.age >= 20 && items.age < 22){
        this.from20_22++
      }else if(items.age >= 22 && items.age < 24){
        this.from22_24++
      }else{
        this.more24++
      }
    }
    this.scatterChart = {
      title:{
        text: 'Age'
      },
      xAxis: {
        type: 'category',
        name: 'age',
        data: ['< 18', '18-20', '20-22', '22-24', '24 >'],
        nameLocation: 'middle',
        axisLabel: {
          margin: 30,
          fontSize: 16,
        },
      },
      yAxis: {
        name: 'Number of Students',
        boundaryGap: false,
        nameLocation: 'middle',
      },
      series: [{
        symbolSize: 20,

        data: [
          ['< 18', this.under18],
          ['18-20', this.from18_20],
          ['20-22', this.from20_22],
          ['22-24', this.from22_24],
          ['24 >', this.more24],
        ],
        type: "scatter"
      }]
    }
  }

  protected readonly Jalali = Jalali;
  protected readonly console = console;
  protected readonly customTheme = customTheme;
}

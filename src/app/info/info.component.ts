import { Component, OnInit } from '@angular/core';
import { StudentService } from "../students/student.service";
import { EChartsOption } from "echarts";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{

  constructor(private stSrv: StudentService) {  }

  listStudents: any

  idDep101: number = 0

  idDep102: number = 0

  idDep103: number = 0

  idDep104: number = 0

  normalGrade101: number = 0

  normalGrade102: number = 0

  normalGrade103: number = 0

  normalGrade104: number = 0

  gradeA101: number = 0

  gradeA102: number = 0

  gradeA103: number = 0

  gradeA104: number = 0

  failed101: number = 0

  failed102: number = 0

  failed103: number = 0

  failed104: number = 0

  pieChart: EChartsOption = {
    title: {
      text: ''
    }
  }

  RadarChart: EChartsOption = {
    title: {
      text: ''
    }
  }

  ngOnInit() {
    this.stSrv.getStudents().subscribe(res => {
      this.listStudents = res
      this.generatePieChart(this.listStudents)
      this.generateRadarChart(this.listStudents)
    })
  }

  generateRadarChart(list: any){
    for (let members of list){
      if (members.idDepartment == 101){
        if (members.grade > 12 && members.grade < 17){
          this.normalGrade101++
        }else if (members.grade > 17){
          this.gradeA101++
        }else{
          this.failed101++
        }
      }
      if (members.idDepartment == 102){
        if (members.grade > 12 && members.grade < 17){
          this.normalGrade102++
        }else if (members.grade > 17){
          this.gradeA102++
        }else{
          this.failed102++
        }
      }
      if (members.idDepartment == 103){
        if (members.grade > 12 && members.grade < 17){
          this.normalGrade103++
        }else if (members.grade > 17){
          this.gradeA103++
        }else{
          this.failed103++
        }
      }
      if (members.idDepartment == 104){
        if (members.grade > 12 && members.grade < 17){
          this.normalGrade104++
        }else if (members.grade > 17){
          this.gradeA104++
        }else{
          this.failed104++
        }
      }
    }

    let dataArt = [this.normalGrade101, this.gradeA101, this.failed101]
    let dataEng = [this.normalGrade102, this.gradeA102, this.failed102]
    let dataSci = [this.normalGrade103, this.gradeA103, this.failed103]
    let dataMed = [this.normalGrade104, this.gradeA104, this.failed104]

    // @ts-ignore
    this.RadarChart = {
      title: {
        text: 'Student Grades',
        left: 'center',
        textStyle: {
          color: '#eee'
      }
    },
      legend: {
        bottom: 5,
        itemGap: 20,
        data: ['Art', 'Engineering', 'Science', 'Medical Science'],
        textStyle: {
          color: '#fff',
        },
      },
      radar: {
        indicator: [
          {name: 'Normal', max: 5},
          {name: 'A grade', max: 5},
          {name: 'Failed', max: 5}
        ],
        shape: 'circle',
        splitLine: {
          lineStyle: {
            color: [
              'rgba(255,179,0,0.1)',
              'rgba(248,159,0,0.2)',
              'rgba(255,186,0,0.4)',
              'rgba(255,192,0,0.6)',
              'rgba(246,166,0,0.8)',
              'rgb(255,170,0)',
            ].reverse()
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(238, 197, 102, 0.5)'
          }
        },
      },
      series: [
        {
          name: 'Art',
          type: 'radar',
          lineStyle: {
            width: 1,
            opacity: 0.7
          },
          data: [dataArt],
          symbol: 'none',
          itemStyle: {
            color: '#fa733e'
          },
          areaStyle: {
            opacity: 0.4
          }
        },
        {
          name: 'Engineering',
          type: 'radar',
          lineStyle: {
            width: 1,
            opacity: 0.7
          },
          data: [dataEng],
          symbol: 'none',
          itemStyle: {
            color: '#73f147'
          },
          areaStyle: {
            opacity: 0.4
          }
        },
        {
          name: 'Science',
          type: 'radar',
          lineStyle: {
            width: 1,
            opacity: 0.7
          },
          data: [dataSci],
          symbol: 'none',
          itemStyle: {
            color: '#42ffd2'
          },
          areaStyle: {
            opacity: 0.4
          }
        },
        {
          name: 'Medical Science',
          type: 'radar',
          lineStyle: {
            width: 1,
            opacity: 0.7
          },
          data: [dataMed],
          symbol: 'none',
          itemStyle: {
            color: '#ff2de6'
          },
          areaStyle: {
            opacity: 0.4
          }
        }
      ]
    }

  }

  generatePieChart(list: any){
    for (let members of list){
      switch (members.idDepartment){
        case 101:
          this.idDep101++
          break
        case 102:
          this.idDep102++
          break
        case 103:
          this.idDep103++
          break
        case 104:
          this.idDep104++
          break
      }
    }
    this.pieChart = {
      title: {
        text: 'Total Students',
        left: 'center',
        textStyle: {
          color: '#eee'
        },
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        left: 'center',
        bottom: 5,
        itemGap: 20,
        textStyle: {
          color: '#ced7d9'
        },
      },
      series: [{
        name: 'Departments',
        type: 'pie',
        top: '10%',
        radius: ['60%', '80%'],
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 25,
            fontWeight: 'bold',
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {value: this.idDep101, name: 'Art'},
          {value: this.idDep102, name: 'Engineering'},
          {value: this.idDep103, name: 'Science'},
          {value: this.idDep104, name: 'Medical Science'}
        ]
      }]
    }
  }
}

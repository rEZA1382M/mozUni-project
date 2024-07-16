import {Component, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';
import { StudentService } from "../students/student.service";

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnChanges{

  constructor(private stSrv: StudentService) {}

  @Input() checker: any

  firstDefaultTableChecker :number = 0

  daysOfTheWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  cellCounter = 700

  courseClickedOn: ({
    name: any;
    exam: any;
    examTimeStart: any
  })[] = []
  ngOnChanges(changes: SimpleChanges){

    let table = document.getElementById('table')
    if (this.checker == false && this.firstDefaultTableChecker == 0){

      // filling the table with a default empty format
      for(let item of this.daysOfTheWeek){
        this.firstDefaultTableChecker++
        //@ts-ignore
        let row = table.insertRow(-1)
        row.id = item + '_' + 'row'
        let dayCell = row.insertCell(-1)
        dayCell.innerText = item
        dayCell.id = item + '_' + 'cell'
        for(let i = 0; i < 41; i++){
          row.insertCell(-1)
        }
      }
    }

    // checking the local storage and filling the day rows

    if (localStorage.getItem('satCourses') != null){
      // @ts-ignore
      this.stSrv.satCoursesStorage = JSON.parse(localStorage.getItem('satCourses'))
      this.changeTableSat()
    }
    if (localStorage.getItem('sunCourses') != null){
      // @ts-ignore
      this.stSrv.sunCoursesStorage = JSON.parse(localStorage.getItem('sunCourses'))
      this.changeTableSun()
    }
    if (localStorage.getItem('monCourses') != null){
      // @ts-ignore
      this.stSrv.monCoursesStorage = JSON.parse(localStorage.getItem('monCourses'))
      this.changeTableMon()
    }
    if (localStorage.getItem('tueCourses') != null){
      // @ts-ignore
      this.stSrv.tueCoursesStorage = JSON.parse(localStorage.getItem('tueCourses'))
      this.changeTableTue()
    }
    if (localStorage.getItem('wedCourses') != null){
      // @ts-ignore
      this.stSrv.wedCoursesStorage = JSON.parse(localStorage.getItem('wedCourses'))
      this.changeTableWed()
    }
    if (localStorage.getItem('thrCourses') != null){
      // @ts-ignore
      this.stSrv.thrCoursesStorage = JSON.parse(localStorage.getItem('thrCourses'))
      this.changeTableThr()
    }if (localStorage.getItem('friCourses') != null){
      // @ts-ignore
      this.stSrv.friCoursesStorage = JSON.parse(localStorage.getItem('friCourses'))
      this.changeTableFri()
    }

  }

  // functions for each day that checks the student service and fills the table

  changeTableSat(){

    let table = document.getElementById('table')

    if(table != null){
        // @ts-ignore
        document.getElementById('Saturday_row').remove()
        // @ts-ignore
        let newSatRow = table.insertRow(0)
        newSatRow.id = 'Saturday_row'
        newSatRow.insertCell(-1).innerText = 'Saturday'
        let found0 = false

      while(1700 >= this.cellCounter){
        // @ts-ignore
        for(let i = 0; i < this.stSrv.satCoursesStorage.length; i++){
          if (this.stSrv.satCoursesStorage[i].time.start == this.cellCounter){
            let cell = newSatRow.insertCell(-1)
            cell.style.backgroundColor = '#007e6e'
            found0 = true
            cell.colSpan = this.stSrv.satCoursesStorage[i].time.colCounter
            cell.innerText = this.stSrv.satCoursesStorage[i].name
            this.cellCounter = this.stSrv.satCoursesStorage[i].time.end
            }
          }
          if (!found0){
            newSatRow.insertCell(-1);
            this.cellCounter += 15
            if (this.cellCounter % 100 == 60){
              this.cellCounter = (this.cellCounter + 100) - 60
            }
          }
          found0 = false
        }
      this.cellCounter = 700
    }
}

  changeTableSun(){

    let table = document.getElementById('table')

    if(table != null){
        // @ts-ignore
        document.getElementById('Sunday_row').remove()
        // @ts-ignore
        let newSunRow = table.insertRow(1)
        newSunRow.id = 'Sunday_row'
        newSunRow.insertCell(-1).innerText = 'Sunday'
        let found0 = false

        while(1700 >= this.cellCounter){
          // @ts-ignore
          for(let i = 0; i < this.stSrv.sunCoursesStorage.length; i++){
            if (this.stSrv.sunCoursesStorage[i].time.start == this.cellCounter){
              let cell = newSunRow.insertCell(-1)
              cell.style.backgroundColor = '#007e6e'
              found0 = true
              cell.colSpan = this.stSrv.sunCoursesStorage[i].time.colCounter
              cell.innerText = this.stSrv.sunCoursesStorage[i].name
              this.cellCounter = this.stSrv.sunCoursesStorage[i].time.end
            }
          }
          if (!found0){
            newSunRow.insertCell(-1);
            this.cellCounter += 15
            if (this.cellCounter % 100 == 60){
              this.cellCounter = (this.cellCounter + 100) - 60
            }
          }
          found0 = false
        }
    }
    this.cellCounter = 700
  }

  changeTableMon(){

    let table = document.getElementById('table')

    if(table != null){
        // @ts-ignore
        document.getElementById('Monday_row').remove()
        // @ts-ignore
        let newMonRow = table.insertRow(2)
        newMonRow.id = 'Monday_row'
        newMonRow.insertCell(-1).innerText = 'Monday'
        let found0 = false

        while(1700 >= this.cellCounter){
          // @ts-ignore
          for(let i = 0; i < this.stSrv.monCoursesStorage.length; i++){
            if (this.stSrv.monCoursesStorage[i].time.start == this.cellCounter){
              let cell = newMonRow.insertCell(-1)
              cell.style.backgroundColor = '#007e6e'
              found0 = true
              cell.colSpan = this.stSrv.monCoursesStorage[i].time.colCounter
              cell.innerText = this.stSrv.monCoursesStorage[i].name
              this.cellCounter = this.stSrv.monCoursesStorage[i].time.end
            }
          }
          if (!found0){
            newMonRow.insertCell(-1);
            this.cellCounter += 15
            if (this.cellCounter % 100 == 60){
              this.cellCounter = (this.cellCounter + 100) - 60
            }
          }
          found0 = false
        }
    }
    this.cellCounter = 700
  }

  changeTableTue(){
    let table = document.getElementById('table')

    if(table != null){
        // @ts-ignore
        document.getElementById('Tuesday_row').remove()
        // @ts-ignore
        let newTueRow = table.insertRow(3)
        newTueRow.id = 'Tuesday_row'
        newTueRow.insertCell(-1).innerText = 'Tuesday'
        let found0 = false

        while(1700 >= this.cellCounter){
          // @ts-ignore
          for(let i = 0; i < this.stSrv.tueCoursesStorage.length; i++){
            if (this.stSrv.tueCoursesStorage[i].time.start == this.cellCounter){
              let cell = newTueRow.insertCell(-1)
              cell.style.backgroundColor = '#007e6e'
              found0 = true
              cell.colSpan = this.stSrv.tueCoursesStorage[i].time.colCounter
              cell.innerText = this.stSrv.tueCoursesStorage[i].name
              this.cellCounter = this.stSrv.tueCoursesStorage[i].time.end
            }
          }
          if (!found0){
            newTueRow.insertCell(-1);
            this.cellCounter += 15
            if (this.cellCounter % 100 == 60){
              this.cellCounter = (this.cellCounter + 100) - 60
            }
          }
          found0 = false
        }
    }
    this.cellCounter = 700
  }

  changeTableWed(){
    let table = document.getElementById('table')

    if(table != null){
        // @ts-ignore
        document.getElementById('Wednesday_row').remove()
        // @ts-ignore
        let newWedRow = table.insertRow(4)
        newWedRow.id = 'Wednesday_row'
        newWedRow.insertCell(-1).innerText = 'Wednesday'
        let found0 = false

        while(1700 >= this.cellCounter){
          // @ts-ignore
          for(let i = 0; i < this.stSrv.wedCoursesStorage.length; i++){
            if (this.stSrv.wedCoursesStorage[i].time.start == this.cellCounter){
              let cell = newWedRow.insertCell(-1)
              cell.style.backgroundColor = '#007e6e'
              found0 = true
              cell.colSpan = this.stSrv.wedCoursesStorage[i].time.colCounter
              cell.innerText = this.stSrv.wedCoursesStorage[i].name
              this.cellCounter = this.stSrv.wedCoursesStorage[i].time.end
            }
          }
          if (!found0){
            newWedRow.insertCell(-1);
            this.cellCounter += 15
            if (this.cellCounter % 100 == 60){
              this.cellCounter = (this.cellCounter + 100) - 60
            }
          }
          found0 = false
        }
    }
    this.cellCounter = 700
  }

  changeTableThr(){
    let table = document.getElementById('table')

    if(table != null){
        // @ts-ignore
        document.getElementById('Thursday_row').remove()
        // @ts-ignore
        let newThrRow = table.insertRow(5)
        newThrRow.id = 'Thursday_row'
        newThrRow.insertCell(-1).innerText = 'Thursday'
        let found0 = false

        while(1700 >= this.cellCounter){
          // @ts-ignore
          for(let i = 0; i < this.stSrv.thrCoursesStorage.length; i++){
            if (this.stSrv.thrCoursesStorage[i].time.start == this.cellCounter){
              let cell = newThrRow.insertCell(-1)
              cell.style.backgroundColor = '#007e6e'
              found0 = true
              cell.colSpan = this.stSrv.thrCoursesStorage[i].time.colCounter
              cell.innerText = this.stSrv.thrCoursesStorage[i].name
              this.cellCounter = this.stSrv.thrCoursesStorage[i].time.end
            }
          }
          if (!found0){
            newThrRow.insertCell(-1);
            this.cellCounter += 15
            if (this.cellCounter % 100 == 60){
              this.cellCounter = (this.cellCounter + 100) - 60
            }
          }
          found0 = false
        }
    }
    this.cellCounter = 700
  }

  changeTableFri(){
    let table = document.getElementById('table')

    if(table != null){
        // @ts-ignore
        document.getElementById('Friday_row').remove()
        // @ts-ignore
        let newFriRow = table.insertRow(6)
        newFriRow.id = 'Friday_row'
        newFriRow.insertCell(-1).innerText = 'Friday'
        let found0 = false

        while(1700 >= this.cellCounter){
          // @ts-ignore
          for(let i = 0; i < this.stSrv.friCoursesStorage.length; i++){
            if (this.stSrv.friCoursesStorage[i].time.start == this.cellCounter){
              let cell = newFriRow.insertCell(-1)
              cell.style.backgroundColor = '#007e6e'
              found0 = true
              cell.colSpan = this.stSrv.friCoursesStorage[i].time.colCounter
              cell.innerText = this.stSrv.friCoursesStorage[i].name
              this.cellCounter = this.stSrv.friCoursesStorage[i].time.end
            }
          }
          if (!found0){
            newFriRow.insertCell(-1);
            this.cellCounter += 15
            if (this.cellCounter % 100 == 60){
              this.cellCounter = (this.cellCounter + 100) - 60
            }
          }
          found0 = false
        }
    }
    this.cellCounter = 700
  }

  @HostListener('click',['$event'])
  click(event: any) {
    if (event.srcElement.innerText != ''){
      // @ts-ignore
      for (let courses of JSON.parse(localStorage.getItem('Courses'))){
        if (event.srcElement.innerText == courses.name){
          this.courseClickedOn = courses
          console.log(this.courseClickedOn)
          break
        }
      }
    }
  }

}

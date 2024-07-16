import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { StudentService } from "../students/student.service";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { MobileModalComponent } from "../mobile-modal/mobile-modal.component";
import { Jalali } from "jalali-ts";
import { IDatepickerTheme } from "ng-persian-datepicker";

const customTheme: Partial<IDatepickerTheme> = {
  background: '#313336',
  text: '#c8c8c9',
  todayText: '#c8c8c9',
  selectedBackground: '#007262',
  selectedText: '#c8c8c9',
};

@Component({
  selector: 'app-course-unit-selection',
  templateUrl: './course-unit-selection.component.html',
  styleUrls: ['./course-unit-selection.component.css']
})
export class CourseUnitSelectionComponent implements OnInit, AfterViewInit{

  time = { hour: 13, minute: 30 };

  constructor(private stSrv: StudentService, public modalService: NgbModal) {  }

  mobileModalOptions : NgbModalOptions = {
    centered : true
  }

  ngAfterViewInit() {
    if(/Android|webOS|iPhone|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      this.modalService.open(MobileModalComponent, this.mobileModalOptions)
    }
  }
  ngOnInit(){

    // time picker accordion data
    while (+this.clock < 1700){
      this.minChecker++
      if (this.minChecker % 4 == 0){
        this.clock = (+this.clock + 100) - 45
      }else{
        this.clock = +this.clock + 15
      }
      if (this.clock.toString().length < 4){
        this.timesStart.push(this.clock.toString().slice(0, 1) + ':' + this.clock.toString().slice(1, 3))
      }else {
        this.timesStart.push(this.clock.toString().slice(0, 2) + ':' + this.clock.toString().slice(2, 4))
      }
    }
    this.minChecker = 0
    this.allCoursesTable()
  }

  courseForm = new FormGroup({

    // form group for a course
    courseName: new FormControl('', [Validators.required]),

    //sat
    start0: new FormControl(''),
    end0: new FormControl(''),

    //sun
    start1: new FormControl(''),
    end1: new FormControl(''),

    //mon
    start2: new FormControl(''),
    end2: new FormControl(''),

    //tue
    start3: new FormControl(''),
    end3: new FormControl(''),

    //wed
    start4: new FormControl(''),
    end4: new FormControl(''),

    //thr
    start5: new FormControl(''),
    end5: new FormControl(''),

    //fri
    start6: new FormControl(''),
    end6: new FormControl(''),

    examDate: new FormControl(''),
    examTimeStart: new FormControl(''),
})

  // checker variable for each day time picker accordions
  dayPicker = {
    satChecker : false,
    sunChecker : false,
    monChecker : false,
    tueChecker : false,
    wedChecker : false,
    thrChecker : false,
    friChecker : false}

  // Input for the table component
  moz = false

  // start time
  clock: any = "0700"

  // checker for the ngOnInit (because every hour is 60min)
  minChecker = 0

  // array of times divided by 15mins
  timesStart: any [] = []

  // checker function for each checker box change
  showSat(event: any){
    this.dayPicker.satChecker = event.target.checked;
  }
  showSun(event: any){
    this.dayPicker.sunChecker = event.target.checked;
  }
  showMon(event: any){
    this.dayPicker.monChecker = event.target.checked;
  }
  showTue(event: any){
    this.dayPicker.tueChecker = event.target.checked;
  }
  showWed(event: any){
    this.dayPicker.wedChecker = event.target.checked;
  }
  showThr(event: any){
    this.dayPicker.thrChecker = event.target.checked;
  }
  showFri(event: any){
    this.dayPicker.friChecker = event.target.checked;
  }

  // variable that stores the amount of colSpan for each course
  colCounter = 0

  // the courses of the user
  courses: any[] = []

  // counter for courses
  coursesIndex = 0

  // days of the course
  daysTimes: any[] = []

  // checker for no interfering with another course
  found :boolean = false

  // exam date variable
  enteredDate: any

  // exam time variable
  enteredTimeStart: any

  // all ExamDates
  courseNameExam : any

  coursesStore(){ // just to store each course when clicked submit

    // checking whether the user has entered a name for the course or not
    if (this.courseForm.controls.courseName.invalid){
      this.courseForm.controls.courseName.markAsTouched()
      window.alert('Please enter a name for the course')
      return 0;
    }

    // checking whether the course name is unique or not
    if(this.localCourses != null){
      for (let names of this.localCourses){
        if (this.courseForm.controls.courseName.value === names.name){
          window.alert('You have entered ' + names.name + ' before')
          return 0
        }
      }
    }

    // which days and times did the user select
    let dayCounterPusher = 0 //using numbers for each day is easier 0 is sat and 6 is fri
    for(let item of Object.keys(this.dayPicker)){
      // @ts-ignore
      switch (this.dayPicker[item]){
        case true:
          let start = 'start' + dayCounterPusher // start formControl
          let end = 'end' + dayCounterPusher // end formControl
          let timeStartNum = 0
          let timeEndNum = 0
          // converting the time entered to a number
          // @ts-ignore
          if (this.courseForm.controls[start].value.length < 5){
            // @ts-ignore
            timeStartNum = +(this.courseForm.controls[start].value.slice(0, 1) + this.courseForm.controls[start].value.slice(2, 4))
          }else{
            // @ts-ignore
            timeStartNum = +(this.courseForm.controls[start].value.slice(0, 2) + this.courseForm.controls[start].value.slice(3, 5))
          }
          // @ts-ignore
          if (this.courseForm.controls[end].value.length < 5){
            // @ts-ignore
            timeEndNum = +(this.courseForm.controls[end].value.slice(0, 1) + this.courseForm.controls[end].value.slice(2, 4))
          }else {
            // @ts-ignore
            timeEndNum = +(this.courseForm.controls[end].value.slice(0, 2) + this.courseForm.controls[end].value.slice(3, 5))
          }

          // how many columns does the course fill
          let startCol = timeStartNum
          while (startCol < timeEndNum){
            this.colCounter++;
            startCol += 15;
            if(startCol% 100 == 60){
              startCol = (startCol + 100) - 60;
            }
          }

          // @ts-ignore
          this.daysTimes.push({day: dayCounterPusher, start: timeStartNum, end: timeEndNum, colCounter: this.colCounter})
          this.colCounter = 0
          break
      }
      dayCounterPusher++
    }

    // checking whether the user entered any time for the course or not
    if (this.daysTimes.length == 0){
      window.alert('You haven\'t entered any time for ' + this.courseForm.controls.courseName.value + ', please enter the course time')
      return 0
    }

    if (this.courseForm.controls.examDate.value != null){
      this.enteredDate = this.courseForm.controls.examDate.value
      if (this.courseForm.controls.examTimeStart.value != null){
        this.enteredTimeStart = this.courseForm.controls.examTimeStart.value
        this.courseNameExam = {name: this.courseForm.controls.courseName.value, exam: this.enteredDate, examTimeStart: this.enteredTimeStart}
      }else {
        this.courseNameExam = {name: this.courseForm.controls.courseName.value, exam: this.enteredDate, examTimeStart: '-'}
      }
    }else{
      this.courseNameExam = {name: this.courseForm.controls.courseName.value, exam: '-', examTimeStart: '-'}
    }

    // @ts-ignore
    this.courses.push(this.daysTimes.concat(this.courseForm.controls.courseName.value))

    if (localStorage.getItem('Courses') != null){
      // @ts-ignore
      let storageHelper = JSON.parse(localStorage.getItem('Courses'))
      localStorage.removeItem('Courses')
      this.stSrv.allCoursesStorage = []
      for (let items of storageHelper){
        this.stSrv.allCoursesStorage.push(items)
      }
      this.stSrv.allCoursesStorage.push(this.courseNameExam)
    }else{
      this.stSrv.allCoursesStorage.push(this.courseNameExam)
    }
    localStorage.setItem('Courses', JSON.stringify(this.stSrv.allCoursesStorage))

    // checking whether the entered course is ok and storing it in the local storage

    for(let courseCounter = this.coursesIndex; courseCounter < this.courses.length; courseCounter++){
      for(let eachCourseCounter = 0; eachCourseCounter < (this.courses[courseCounter].length) - 1; eachCourseCounter++){
        switch (this.courses[courseCounter][eachCourseCounter].day){
          case 0:
            let helper0 = {time: this.courses[courseCounter][eachCourseCounter], name: this.courses[courseCounter][this.courses[courseCounter].length - 1]}
            for(let item of this.stSrv.satCoursesStorage){
              if((item.time.start <= helper0.time.start && item.time.end > helper0.time.start)
                ||(item.time.end >= helper0.time.end && item.time.start < helper0.time.end)){
                console.log('nope')
                window.alert('the time selected interferes with the class ' + item.name)
                this.found = true
                this.daysTimes = []
              }
            }
            if(!this.found){
              this.stSrv.satCoursesStorage.push(helper0)
              localStorage.setItem('satCourses', JSON.stringify(this.stSrv.satCoursesStorage))
              // this.moz = true
            }
            break;
          case 1:
            let helper1 = {time: this.courses[courseCounter][eachCourseCounter], name: this.courses[courseCounter][this.courses[courseCounter].length - 1]}
            for(let item of this.stSrv.sunCoursesStorage){
              if((item.time.start <= helper1.time.start && item.time.end > helper1.time.start)
                ||(item.time.end >= helper1.time.end && item.time.start < helper1.time.end)){
                console.log('nope')
                window.alert('the time selected interferes with the class ' + item.name)
                this.found = true
                this.daysTimes = []
              }
            }
            if(!this.found){
              this.stSrv.sunCoursesStorage.push(helper1)
              localStorage.setItem('sunCourses', JSON.stringify(this.stSrv.sunCoursesStorage))
              // this.moz = true
            }
            break;
          case 2:
            let helper2 = {time: this.courses[courseCounter][eachCourseCounter], name: this.courses[courseCounter][this.courses[courseCounter].length - 1]}
            for(let item of this.stSrv.monCoursesStorage){
              if((item.time.start <= helper2.time.start && item.time.end > helper2.time.start)
                ||(item.time.end >= helper2.time.end && item.time.start < helper2.time.end)){
                console.log('nope')
                window.alert('the time selected interferes with the class ' + item.name)
                this.found = true
                this.daysTimes = []
              }
            }
            if(!this.found) {
              this.stSrv.monCoursesStorage.push(helper2)
              localStorage.setItem('monCourses', JSON.stringify(this.stSrv.monCoursesStorage))
              // this.moz = true
            }
            break;
          case 3:
            let helper3 = {time: this.courses[courseCounter][eachCourseCounter], name: this.courses[courseCounter][this.courses[courseCounter].length - 1]}
            for(let item of this.stSrv.tueCoursesStorage){
              if((item.time.start <= helper3.time.start && item.time.end > helper3.time.start)
                ||(item.time.end >= helper3.time.end && item.time.start < helper3.time.end)){
                console.log('nope')
                window.alert('the time selected interferes with the class ' + item.name)
                this.found = true
                this.daysTimes = []
              }
            }
            if(!this.found) {
              this.stSrv.tueCoursesStorage.push(helper3)
              localStorage.setItem('tueCourses', JSON.stringify(this.stSrv.tueCoursesStorage))
              // this.moz = true
            }
            break;
          case 4:
            let helper4 = {time: this.courses[courseCounter][eachCourseCounter], name: this.courses[courseCounter][this.courses[courseCounter].length - 1]}
            for(let item of this.stSrv.wedCoursesStorage){
              if((item.time.start <= helper4.time.start && item.time.end > helper4.time.start)
                ||(item.time.end >= helper4.time.end && item.time.start < helper4.time.end)){
                console.log('nope')
                window.alert('the time selected interferes with the class ' + item.name)
                this.found = true
                this.daysTimes = []
              }
            }
            if(!this.found) {
              this.stSrv.wedCoursesStorage.push(helper4)
              localStorage.setItem('wedCourses', JSON.stringify(this.stSrv.wedCoursesStorage))
              // this.moz = true
            }
            break;
          case 5:
            let helper5 = {time: this.courses[courseCounter][eachCourseCounter], name: this.courses[courseCounter][this.courses[courseCounter].length - 1]}
            for(let item of this.stSrv.thrCoursesStorage){
              if((item.time.start <= helper5.time.start && item.time.end > helper5.time.start)
                ||(item.time.end >= helper5.time.end && item.time.start < helper5.time.end)){
                console.log('nope')
                window.alert('the time selected interferes with the class ' + item.name)
                this.found = true
                this.daysTimes = []
              }
            }
            if(!this.found) {
              this.stSrv.thrCoursesStorage.push(helper5)
              localStorage.setItem('thrCourses', JSON.stringify(this.stSrv.thrCoursesStorage))
              // this.moz = true
            }
            break;
          case 6:
            let helper6 = {time: this.courses[courseCounter][eachCourseCounter], name: this.courses[courseCounter][this.courses[courseCounter].length - 1]}
            for(let item of this.stSrv.friCoursesStorage){
              if((item.time.start <= helper6.time.start && item.time.end > helper6.time.start)
                ||(item.time.end >= helper6.time.end && item.time.start < helper6.time.end)){
                console.log('nope')
                window.alert('the time selected interferes with the class ' + item.name)
                this.found = true
                this.daysTimes = []
              }
            }
            if(!this.found) {
              this.stSrv.friCoursesStorage.push(helper6)
              localStorage.setItem('friCourses', JSON.stringify(this.stSrv.friCoursesStorage))
              // this.moz = true
            }
            break;
        }
      }
    }
    this.coursesIndex++
    this.found = false
    this.daysTimes = []
    this.courseNameExam = {}
    this.enteredDate = 0
    this.enteredTimeStart = 0
    this.courseForm.controls.courseName.reset()
    this.courseForm.controls.examTimeStart.reset()
    this.dayPicker.satChecker = false
    this.dayPicker.sunChecker = false
    this.dayPicker.monChecker = false
    this.dayPicker.tueChecker = false
    this.dayPicker.wedChecker = false
    this.dayPicker.thrChecker = false
    this.dayPicker.friChecker = false
    this.moz = !this.moz;
    this.allCoursesTable()
    return 1
  }

  checking: number = 0

  deleteCourse(courseName: any){

    // removing the course from the bottom table
    let courseRow = document.getElementById(courseName.name)
    // @ts-ignore
    courseRow.remove()
    for (let names of this.localCourses){
      if(names.name == courseName.name){
        this.localCourses.splice(this.checking, 1)
        break;
      }
      this.checking++
    }
    this.checking = 0
    localStorage.setItem('Courses', JSON.stringify(this.localCourses))

    // removing the course from each day

    if (this.stSrv.satCoursesStorage.length > 0){
      for (let items of this.stSrv.satCoursesStorage){
        if (courseName.name == items.name){
          this.stSrv.satCoursesStorage.splice(this.checking, 1)
          localStorage.setItem('satCourses',JSON.stringify(this.stSrv.satCoursesStorage))
          break;
        }
        this.checking++
      }
      this.checking = 0
    }

    if (this.stSrv.sunCoursesStorage.length > 0){
      for (let items of this.stSrv.sunCoursesStorage){
        if (courseName.name == items.name){
          this.stSrv.sunCoursesStorage.splice(this.checking, 1)
          localStorage.setItem('sunCourses',JSON.stringify(this.stSrv.sunCoursesStorage))
          break;
        }
        this.checking++
      }
      this.checking = 0
    }

    if (this.stSrv.monCoursesStorage.length > 0){
      for (let items of this.stSrv.monCoursesStorage){
        if (courseName.name == items.name){
          this.stSrv.monCoursesStorage.splice(this.checking, 1)
          localStorage.setItem('monCourses',JSON.stringify(this.stSrv.monCoursesStorage))
          break;
        }
        this.checking++
      }
      this.checking = 0
    }

    if (this.stSrv.tueCoursesStorage.length > 0){
      for (let items of this.stSrv.tueCoursesStorage){
        if (courseName.name == items.name){
          this.stSrv.tueCoursesStorage.splice(this.checking, 1)
          localStorage.setItem('tueCourses',JSON.stringify(this.stSrv.tueCoursesStorage))
          break;
        }
        this.checking++
      }
      this.checking = 0
    }

    if (this.stSrv.wedCoursesStorage.length > 0){
      for (let items of this.stSrv.wedCoursesStorage){
        if (courseName.name == items.name){
          this.stSrv.wedCoursesStorage.splice(this.checking, 1)
          localStorage.setItem('wedCourses',JSON.stringify(this.stSrv.wedCoursesStorage))
          break;
        }
        this.checking++
      }
      this.checking = 0
    }

    if (this.stSrv.thrCoursesStorage.length > 0){
      for (let items of this.stSrv.thrCoursesStorage){
        if (courseName.name == items.name){
          this.stSrv.thrCoursesStorage.splice(this.checking, 1)
          localStorage.setItem('thrCourses',JSON.stringify(this.stSrv.thrCoursesStorage))
          break;
        }
        this.checking++
      }
      this.checking = 0
    }

    if (this.stSrv.friCoursesStorage.length > 0){
      for (let items of this.stSrv.friCoursesStorage){
        if (courseName.name == items.name){
          this.stSrv.friCoursesStorage.splice(this.checking, 1)
          localStorage.setItem('friCourses',JSON.stringify(this.stSrv.friCoursesStorage))
          break;
        }
        this.checking++
      }
      this.checking = 0
    }

    this.moz = !this.moz;
  }
  // name of the courses that we store all in the local storage
  localCourses: any

  allCoursesTable(){
    if(localStorage.getItem('Courses') != null){
      // @ts-ignore
      this.localCourses = JSON.parse(localStorage.getItem('Courses'))
    }
  }


  protected readonly Jalali = Jalali;
  protected readonly customTheme = customTheme;
}

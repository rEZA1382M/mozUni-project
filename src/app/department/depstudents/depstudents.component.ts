import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from "../../students/student.service";
import { EditformComponent } from "../../editform/editform.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Student } from "../../students/student.model";
import { EditModalComponent } from "../../edit-modal/edit-modal.component";

@Component({
  selector: 'app-depstudents',
  templateUrl: './depstudents.component.html',
  styleUrls: ['./depstudents.component.css']
})

export class DepstudentsComponent implements OnInit{

  constructor(public stSrv: StudentService, private modalService: NgbModal) {
  }

  @Input() depID: any;

  listStudentsReceiver: Student[] = [];

  filteredNames: Student[] = [];

  filteringNames(num1: number){
   this.filteredNames = this.listStudentsReceiver.filter(item => item.idDepartment == num1);
   return this.filteredNames;
  }

  sortTable(num1: number){
    this.filteredNames.sort((name1, name2) => {
      if (name1.name.toLowerCase() > name2.name.toLowerCase()){
        return (num1);
      } else if (name1.name.toLowerCase() < name2.name.toLowerCase()){
        return -1 * (num1);
      } else {
        return 0;
      }
    })
  }

  openModal(mode: string, values: any){
    const modalRef = this.modalService.open(EditformComponent)
    modalRef.componentInstance.activeModal = modalRef
    modalRef.componentInstance.modalMode = mode;

    if (mode == "edit"){
      modalRef.componentInstance.profileForm.patchValue(this.stSrv.loggedInStudent)
    }


    modalRef.closed.subscribe(() => this.stSrv.getStudents().subscribe(response => {
      this.listStudentsReceiver = response;
      this.filteringNames(this.depID.idDep);
    }))
  }

  deleteSelectedStudent(id: number){
    const modalRef = this.modalService.open(EditModalComponent);
    modalRef.componentInstance.activeModal = modalRef;
    modalRef.closed.subscribe(() => {
      if (modalRef.componentInstance.checker == true){
        this.stSrv.deleteStudent(id).subscribe();
        this.stSrv.loggedInStudent = undefined;
      }
    })
  }

  trackById(index: number, item: Student){
    return item.id;
  }

  ngOnInit() {
    this.stSrv.getStudents().subscribe(result => {
      this.listStudentsReceiver = result;
      this.filteringNames(this.depID.idDep);
    })
  }

  protected readonly EditformComponent = EditformComponent;
  protected readonly sessionStorage = sessionStorage;

}

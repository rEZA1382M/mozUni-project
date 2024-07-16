import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  activeModal: any;
  checker: any;

  saveChanges(){
    this.checker = true;
    this.activeModal.close()
  }
}

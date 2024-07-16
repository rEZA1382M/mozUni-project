import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnChanges{

  @Input() checker: any

  ngOnChanges(){
    console.log(this.checker)
  }





}

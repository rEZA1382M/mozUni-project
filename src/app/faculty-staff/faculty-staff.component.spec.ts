import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyStaffComponent } from './faculty-staff.component';

describe('FacultyStaffComponent', () => {
  let component: FacultyStaffComponent;
  let fixture: ComponentFixture<FacultyStaffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyStaffComponent]
    });
    fixture = TestBed.createComponent(FacultyStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

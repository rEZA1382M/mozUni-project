import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUnitSelectionComponent } from './course-unit-selection.component';

describe('CourseUnitSelectionComponent', () => {
  let component: CourseUnitSelectionComponent;
  let fixture: ComponentFixture<CourseUnitSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseUnitSelectionComponent]
    });
    fixture = TestBed.createComponent(CourseUnitSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

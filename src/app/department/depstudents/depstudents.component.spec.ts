import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepstudentsComponent } from './depstudents.component';

describe('DepstudentsComponent', () => {
  let component: DepstudentsComponent;
  let fixture: ComponentFixture<DepstudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepstudentsComponent]
    });
    fixture = TestBed.createComponent(DepstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

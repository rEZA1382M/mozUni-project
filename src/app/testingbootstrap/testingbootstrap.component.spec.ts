import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingbootstrapComponent } from './testingbootstrap.component';

describe('TestingbootstrapComponent', () => {
  let component: TestingbootstrapComponent;
  let fixture: ComponentFixture<TestingbootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingbootstrapComponent]
    });
    fixture = TestBed.createComponent(TestingbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

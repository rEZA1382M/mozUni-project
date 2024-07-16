import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuButWithRxjsComponent } from './stu-but-with-rxjs.component';

describe('StuButWithRxjsComponent', () => {
  let component: StuButWithRxjsComponent;
  let fixture: ComponentFixture<StuButWithRxjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuButWithRxjsComponent]
    });
    fixture = TestBed.createComponent(StuButWithRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

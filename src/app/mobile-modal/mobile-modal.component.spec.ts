import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileModalComponent } from './mobile-modal.component';

describe('MobileModalComponent', () => {
  let component: MobileModalComponent;
  let fixture: ComponentFixture<MobileModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileModalComponent]
    });
    fixture = TestBed.createComponent(MobileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

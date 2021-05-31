import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackcustomerComponent } from './feedbackcustomer.component';

describe('FeedbackcustomerComponent', () => {
  let component: FeedbackcustomerComponent;
  let fixture: ComponentFixture<FeedbackcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

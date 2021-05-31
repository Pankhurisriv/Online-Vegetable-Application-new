import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustorderFormComponent } from './custorder-form.component';

describe('CustorderFormComponent', () => {
  let component: CustorderFormComponent;
  let fixture: ComponentFixture<CustorderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustorderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustorderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

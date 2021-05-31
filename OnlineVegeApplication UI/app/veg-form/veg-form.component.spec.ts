import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegFormComponent } from './veg-form.component';

describe('VegFormComponent', () => {
  let component: VegFormComponent;
  let fixture: ComponentFixture<VegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

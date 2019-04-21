import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMotorbikeComponent } from './add-motorbike.component';

describe('AddMotorbikeComponent', () => {
  let component: AddMotorbikeComponent;
  let fixture: ComponentFixture<AddMotorbikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMotorbikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMotorbikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

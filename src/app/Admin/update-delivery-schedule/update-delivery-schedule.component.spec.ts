import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeliveryScheduleComponent } from './update-delivery-schedule.component';

describe('UpdateDeliveryScheduleComponent', () => {
  let component: UpdateDeliveryScheduleComponent;
  let fixture: ComponentFixture<UpdateDeliveryScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDeliveryScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDeliveryScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

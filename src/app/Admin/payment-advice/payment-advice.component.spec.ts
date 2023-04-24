import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAdviceComponent } from './payment-advice.component';

describe('PaymentAdviceComponent', () => {
  let component: PaymentAdviceComponent;
  let fixture: ComponentFixture<PaymentAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAdviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

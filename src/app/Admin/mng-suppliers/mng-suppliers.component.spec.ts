import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MngSuppliersComponent } from './mng-suppliers.component';

describe('MngSuppliersComponent', () => {
  let component: MngSuppliersComponent;
  let fixture: ComponentFixture<MngSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MngSuppliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MngSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

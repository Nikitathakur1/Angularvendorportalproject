import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierCreateComponentComponent } from './supplier-create-component.component';

describe('SupplierCreateComponentComponent', () => {
  let component: SupplierCreateComponentComponent;
  let fixture: ComponentFixture<SupplierCreateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierCreateComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

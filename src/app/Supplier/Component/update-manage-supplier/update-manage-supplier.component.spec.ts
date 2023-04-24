import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateManageSupplierComponent } from './update-manage-supplier.component';

describe('UpdateManageSupplierComponent', () => {
  let component: UpdateManageSupplierComponent;
  let fixture: ComponentFixture<UpdateManageSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateManageSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateManageSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

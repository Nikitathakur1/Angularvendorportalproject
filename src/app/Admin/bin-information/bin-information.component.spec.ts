import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinInformationComponent } from './bin-information.component';

describe('BinInformationComponent', () => {
  let component: BinInformationComponent;
  let fixture: ComponentFixture<BinInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

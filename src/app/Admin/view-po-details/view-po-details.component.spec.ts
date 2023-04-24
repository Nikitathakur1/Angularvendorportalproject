import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPoDetailsComponent } from './view-po-details.component';

describe('ViewPoDetailsComponent', () => {
  let component: ViewPoDetailsComponent;
  let fixture: ComponentFixture<ViewPoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

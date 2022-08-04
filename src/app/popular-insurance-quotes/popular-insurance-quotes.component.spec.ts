import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularInsuranceQuotesComponent } from './popular-insurance-quotes.component';

describe('PopularInsuranceQuotesComponent', () => {
  let component: PopularInsuranceQuotesComponent;
  let fixture: ComponentFixture<PopularInsuranceQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularInsuranceQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularInsuranceQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

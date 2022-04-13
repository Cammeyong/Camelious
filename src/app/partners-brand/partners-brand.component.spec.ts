import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersBrandComponent } from './partners-brand.component';

describe('PartnersBrandComponent', () => {
  let component: PartnersBrandComponent;
  let fixture: ComponentFixture<PartnersBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnersBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

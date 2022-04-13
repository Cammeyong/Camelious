import { ComponentFixture, TestBed } from '@angular/core/testing';


import { TopSelectionComponent } from './top-selection.component';

describe('TopSelectionComponent', () => {
  let component: TopSelectionComponent;
  let fixture: ComponentFixture<TopSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

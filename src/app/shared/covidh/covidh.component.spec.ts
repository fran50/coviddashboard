import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidhComponent } from './covidh.component';

describe('CovidhComponent', () => {
  let component: CovidhComponent;
  let fixture: ComponentFixture<CovidhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

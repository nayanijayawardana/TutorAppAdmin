import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartTutorComponent } from './piechart-tutor.component';

describe('PiechartTutorComponent', () => {
  let component: PiechartTutorComponent;
  let fixture: ComponentFixture<PiechartTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiechartTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

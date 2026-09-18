import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MOECalendarComponent } from './moe-calendar.component';

describe('MOECalendarComponent', () => {
  let component: MOECalendarComponent;
  let fixture: ComponentFixture<MOECalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MOECalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MOECalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

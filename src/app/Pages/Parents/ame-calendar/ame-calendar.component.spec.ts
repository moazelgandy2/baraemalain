import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMECalendarComponent } from './ame-calendar.component';

describe('AMECalendarComponent', () => {
  let component: AMECalendarComponent;
  let fixture: ComponentFixture<AMECalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AMECalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AMECalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

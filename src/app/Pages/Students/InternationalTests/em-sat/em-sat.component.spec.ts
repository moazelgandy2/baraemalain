import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmSATComponent } from './em-sat.component';

describe('EmSATComponent', () => {
  let component: EmSATComponent;
  let fixture: ComponentFixture<EmSATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmSATComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmSATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

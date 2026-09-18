import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompassionComponent } from './compassion.component';

describe('CompassionComponent', () => {
  let component: CompassionComponent;
  let fixture: ComponentFixture<CompassionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompassionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

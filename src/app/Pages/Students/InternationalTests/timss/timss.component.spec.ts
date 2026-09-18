import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TIMSSComponent } from './timss.component';

describe('TIMSSComponent', () => {
  let component: TIMSSComponent;
  let fixture: ComponentFixture<TIMSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TIMSSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TIMSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

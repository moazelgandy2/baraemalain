import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalUnderstandingComponent } from './global-understanding.component';

describe('GlobalUnderstandingComponent', () => {
  let component: GlobalUnderstandingComponent;
  let fixture: ComponentFixture<GlobalUnderstandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalUnderstandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalUnderstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

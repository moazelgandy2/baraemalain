import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradCardComponent } from './grad-card.component';

describe('GradCardComponent', () => {
  let component: GradCardComponent;
  let fixture: ComponentFixture<GradCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GradCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

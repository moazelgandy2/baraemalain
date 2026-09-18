import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicReadingChallengeComponent } from './arabic-reading-challenge.component';

describe('ArabicReadingChallengeComponent', () => {
  let component: ArabicReadingChallengeComponent;
  let fixture: ComponentFixture<ArabicReadingChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArabicReadingChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArabicReadingChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

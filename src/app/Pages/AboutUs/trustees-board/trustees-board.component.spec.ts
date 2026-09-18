import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrusteesBoardComponent } from './trustees-board.component';

describe('TrusteesBoardComponent', () => {
  let component: TrusteesBoardComponent;
  let fixture: ComponentFixture<TrusteesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrusteesBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrusteesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

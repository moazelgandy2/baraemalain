import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelongingComponent } from './belonging.component';

describe('BelongingComponent', () => {
  let component: BelongingComponent;
  let fixture: ComponentFixture<BelongingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BelongingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelongingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

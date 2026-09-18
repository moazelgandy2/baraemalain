import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftedComponent } from './gifted.component';

describe('GiftedComponent', () => {
  let component: GiftedComponent;
  let fixture: ComponentFixture<GiftedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiftedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinkerCADComponent } from './tinker-cad.component';

describe('TinkerCADComponent', () => {
  let component: TinkerCADComponent;
  let fixture: ComponentFixture<TinkerCADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TinkerCADComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinkerCADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

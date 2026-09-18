import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QubitsComponent } from './qubits.component';

describe('QubitsComponent', () => {
  let component: QubitsComponent;
  let fixture: ComponentFixture<QubitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QubitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QubitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PIRLSComponent } from './pirls.component';

describe('PIRLSComponent', () => {
  let component: PIRLSComponent;
  let fixture: ComponentFixture<PIRLSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PIRLSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PIRLSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

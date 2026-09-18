import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PISAComponent } from './pisa.component';

describe('PISAComponent', () => {
  let component: PISAComponent;
  let fixture: ComponentFixture<PISAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PISAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PISAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

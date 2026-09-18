import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadrasaComponent } from './madrasa.component';

describe('MadrasaComponent', () => {
  let component: MadrasaComponent;
  let fixture: ComponentFixture<MadrasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MadrasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadrasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

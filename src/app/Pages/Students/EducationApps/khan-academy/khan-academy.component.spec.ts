import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhanAcademyComponent } from './khan-academy.component';

describe('KhanAcademyComponent', () => {
  let component: KhanAcademyComponent;
  let fixture: ComponentFixture<KhanAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KhanAcademyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhanAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

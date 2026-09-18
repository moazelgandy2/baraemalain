import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KutubeeComponent } from './kutubee.component';

describe('KutubeeComponent', () => {
  let component: KutubeeComponent;
  let fixture: ComponentFixture<KutubeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KutubeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KutubeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

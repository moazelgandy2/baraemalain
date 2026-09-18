import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatificComponent } from './matific.component';

describe('MatificComponent', () => {
  let component: MatificComponent;
  let fixture: ComponentFixture<MatificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatificComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

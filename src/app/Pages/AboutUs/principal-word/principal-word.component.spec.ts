import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalWordComponent } from './principal-word.component';

describe('PrincipalWordComponent', () => {
  let component: PrincipalWordComponent;
  let fixture: ComponentFixture<PrincipalWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipalWordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

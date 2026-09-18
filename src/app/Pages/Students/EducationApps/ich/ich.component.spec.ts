import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICHComponent } from './ich.component';

describe('ICHComponent', () => {
  let component: ICHComponent;
  let fixture: ComponentFixture<ICHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ICHComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ICHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

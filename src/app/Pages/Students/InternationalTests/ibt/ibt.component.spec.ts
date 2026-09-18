import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IBTComponent } from './ibt.component';

describe('IBTComponent', () => {
  let component: IBTComponent;
  let fixture: ComponentFixture<IBTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IBTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IBTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

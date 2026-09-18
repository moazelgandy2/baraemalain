import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McGrawHillComponent } from './mc-graw-hill.component';

describe('McGrawHillComponent', () => {
  let component: McGrawHillComponent;
  let fixture: ComponentFixture<McGrawHillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McGrawHillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McGrawHillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNationalIDComponent } from './main-national-id.component';

describe('MainNationalIDComponent', () => {
  let component: MainNationalIDComponent;
  let fixture: ComponentFixture<MainNationalIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainNationalIDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNationalIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

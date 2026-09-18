import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDojoComponent } from './class-dojo.component';

describe('ClassDojoComponent', () => {
  let component: ClassDojoComponent;
  let fixture: ComponentFixture<ClassDojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassDojoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassDojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantFilesComponent } from './important-files.component';

describe('ImportantFilesComponent', () => {
  let component: ImportantFilesComponent;
  let fixture: ComponentFixture<ImportantFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportantFilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportantFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorPolicyComponent } from './behavior-policy.component';

describe('BehaviorPolicyComponent', () => {
  let component: BehaviorPolicyComponent;
  let fixture: ComponentFixture<BehaviorPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BehaviorPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatantGroupComponent } from './combatant-group.component';

describe('CombatantGroupComponent', () => {
  let component: CombatantGroupComponent;
  let fixture: ComponentFixture<CombatantGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatantGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatantGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

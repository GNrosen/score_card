import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAmountComponent } from './player-amount.component';

describe('PlayerAmountComponent', () => {
  let component: PlayerAmountComponent;
  let fixture: ComponentFixture<PlayerAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsTabComponent } from './standings-tab.component';

describe('StandingsTabComponent', () => {
  let component: StandingsTabComponent;
  let fixture: ComponentFixture<StandingsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingsTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStandingsComponent } from './current-standings-table.component';

describe('LeaderboardTableComponent', () => {
  let component: CurrentStandingsComponent;
  let fixture: ComponentFixture<CurrentStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentStandingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

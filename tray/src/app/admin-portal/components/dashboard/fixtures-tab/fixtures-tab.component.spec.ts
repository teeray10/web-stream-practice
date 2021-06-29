import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesTabComponent } from './fixtures-tab.component';

describe('FixturesTabComponent', () => {
  let component: FixturesTabComponent;
  let fixture: ComponentFixture<FixturesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixturesTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddResultFormComponent } from "./template-add-result-form.component";

describe("AddResultFormComponent", () => {
  let component: AddResultFormComponent;
  let fixture: ComponentFixture<AddResultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResultFormComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component)
      .toBeTruthy();
  });
});

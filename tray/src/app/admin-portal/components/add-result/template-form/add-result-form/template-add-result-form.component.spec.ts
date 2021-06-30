import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TemplateAddResultFormComponent } from "./template-add-result-form.component";

describe("AddResultFormComponent", () => {
  let component: TemplateAddResultFormComponent;
  let fixture: ComponentFixture<TemplateAddResultFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAddResultFormComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateAddResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component)
      .toBeTruthy();
  });
});

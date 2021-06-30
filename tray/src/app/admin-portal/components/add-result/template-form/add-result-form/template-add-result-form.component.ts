import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { Result } from "../../../../../models/Result";

@Component({
  selector: "app-template-add-result-form",
  templateUrl: "./template-add-result-form.component.html",
  styleUrls: ["./template-add-result-form.component.scss"],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: "outline" } }
  ]
})
export class TemplateAddResultFormComponent implements OnInit {
  public result: Result = {
    date: "",
    time: "",
    team1: "",
    team1Goals: "",
    team2: "",
    team2Goals: "",
  }

  @Output() submitted: EventEmitter<Result> = new EventEmitter<Result>();

  constructor() {}

  ngOnInit(): void {}

  submit() {
    
    this.submitted.emit(this.result);
  }
}

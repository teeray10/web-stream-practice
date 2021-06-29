import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Result } from '../../../../models/Result';

@Component({
  selector: 'app-add-result-form',
  templateUrl: './add-result-form.component.html',
  styleUrls: ['./add-result-form.component.scss'],
})
export class AddResultFormComponent implements OnInit {
  addResultFormGroup: FormGroup = this.formBuilder.group({
    date: '',
    time: '',
    team1: '',
    team1Goals: '',
    team2Goals: '',
    team2: '',
  });

  @Output() submitted: EventEmitter<Result> = new EventEmitter<Result>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    let result: Result = this.addResultFormGroup.value;
    this.submitted.emit(result);
  }
}

import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export function ForbiddenTitleValidator(titleRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = titleRe.test(control.value);
    return forbidden ? { ForbiddenTitle: { value: control.value }} : null;
  }
}

@Directive({
  selector: '[appForbiddenTitle]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appForbiddenTitle') forbiddenTitle = '';

  validate(control: AbstractControl): ValidationErrors | null{
    return this.forbiddenTitle ? ForbiddenTitleValidator(
      new RegExp(this.forbiddenTitle, 'i'))(control) : null;
  }

}

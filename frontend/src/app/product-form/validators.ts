import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function greaterThan(value: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value !== null && control.value <= value) {
      return {
        greaterThan: {
          value: control.value,
          message: `Value must be greater than ${value}`
        }
      };
    }
    return null;
  };
}

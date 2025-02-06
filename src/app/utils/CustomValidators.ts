// CustomValidators.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators { 
  // Custom Validator to check if the passwords match
  static MatchValidator (source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceValue = control.get(source)?.value;
      const targetValue = control.get(target)?.value;
      return sourceValue === targetValue ? null : { match: true };
    };
  }
}
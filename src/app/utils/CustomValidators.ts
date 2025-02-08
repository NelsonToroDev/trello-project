// CustomValidators.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators { 
  // Custom Validator to check if the passwords match
  static MatchValidator (source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceControl = control.get(source);
      const targetControl = control.get(target);
      return sourceControl && targetControl && sourceControl.value !== targetControl.value ? { mismatch: true } : null; 
    };
  }
}
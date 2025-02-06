// recovery-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomValidators } from '../../utils/CustomValidators';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from "../btn/btn.component";

@Component({
  selector: 'app-recovery-form',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, BtnComponent],
  templateUrl: './recovery-form.component.html'
})
export class RecoveryFormComponent {

  // Reference to form group
  recoveryForm = this.formBuilder.group({
    // FormControls
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  },
  {
    // Options
    validators: [
      // Custom Validator to check if the passwords match
      CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
    ]
  }
  );

  status: string = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;

  // formBuilder is injected
  constructor(private formBuilder : FormBuilder) {

  }

  recovery () { 
    if (this.recoveryForm.valid) {
      // Todo
    }
    else {
      // formControl touched occurs when the user clicks on the button for the first time
      this.recoveryForm.markAllAsTouched();
    }
  }
}

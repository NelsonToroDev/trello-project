import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomValidators } from '../../utils/CustomValidators';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from "../btn/btn.component";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, BtnComponent],
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  registerForm = this.formBuilder.nonNullable.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(6)],
      confirmPassword: ['', Validators.required]
    },
    {
      validators: [CustomValidators.MatchValidator('password', 'confirmPassword')]
    });
  
  status: string = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword: boolean = false;

  register () {
    if (this.registerForm.valid) {
      this.status = 'loading';
      const { name, email, password } = this.registerForm.getRawValue();
      console.log(this.registerForm.getRawValue());
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

}

import { Component } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FontAwesomeModule, BtnComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  status: string = 'init';

  constructor(private formBuilder: FormBuilder) { }

  loginForm = this.formBuilder.group(
    {
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }
  );

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin () {
    if (this.loginForm.valid) {
      this.status = 'loading';
      // TODO
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}

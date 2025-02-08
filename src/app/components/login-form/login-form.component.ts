import { Component, inject } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestStatus } from '@models/request-status.model';

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
  status: RequestStatus = 'init';
  authService = inject(AuthService);
  router = inject(Router);
  activeRoute = inject(ActivatedRoute);

  constructor(private formBuilder: FormBuilder) {
    this.activeRoute.queryParamMap.subscribe(params => {
      const email = params.get('email');
      if (email) {
        this.loginForm.controls.email.setValue(email);
      }
    })

  }

  loginForm = this.formBuilder.group(
    {
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
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
      const { email, password } = this.loginForm.getRawValue();
      this.authService.login(email!, password!)
        .subscribe({
          next: () => {
            this.status = 'success';
            this.router.navigate(['/app']);
          },
          error: () => {
            this.status = 'failed';
          }
        });    
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}

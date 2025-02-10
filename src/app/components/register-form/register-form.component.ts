import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomValidators } from '../../utils/CustomValidators';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from "../btn/btn.component";
import { RequestStatus } from '@models/request-status.model';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, BtnComponent, CommonModule],
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {

  constructor(private formBuilder: FormBuilder) { }
  
  userForm = this.formBuilder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]]
  });

  registerForm = this.formBuilder.nonNullable.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    },
    {
      validators: [CustomValidators.MatchValidator('password', 'confirmPassword')]
    }
  );  
  
  status: RequestStatus = 'init';
  statusUser: RequestStatus = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword: boolean = false;
  showRegister: boolean = false;

  router = inject(Router);
  authService = inject(AuthService);

  validateUser() {
    if (this.userForm.valid) {
      this.statusUser = 'loading';
      const { email } = this.userForm.getRawValue();
      this.authService.isAvailable(email)
        .subscribe({
          next: (res) => {
            this.statusUser = 'success';
            if (res.isAvailable) {
              this.showRegister = true;
              this.registerForm.controls.email.setValue(email);
            } else{
              this.router.navigate(['/login'], {
                queryParams: { email }
              });
            }
          },
          error: (error) => {
            this.statusUser = 'failed';
            console.log(error);
          }
        });
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  register () {
    if (this.registerForm.valid) {
      this.status = 'loading';
      const { name, email, password } = this.registerForm.getRawValue();
      this.authService.registerAndLogin(name, email, password)
        .subscribe({
          next: () => {
            this.status = 'success',
            this.router.navigate(['/app/boards']);
          },
          error: (error) => {
            this.status = 'failed';
            console.log(error);
          }
        });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}

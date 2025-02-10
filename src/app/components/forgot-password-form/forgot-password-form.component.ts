import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnComponent } from "../btn/btn.component";
import { RequestStatus } from '@models/request-status.model';
import { AuthService } from '@services/auth.service';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forgot-password-form',
  standalone: true,
  imports: [ReactiveFormsModule, BtnComponent],
  templateUrl: './forgot-password-form.component.html'
})
export class ForgotPasswordFormComponent {

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]]
  });
  status: RequestStatus = 'init';
  emailSent: boolean = false;
  authService = inject(AuthService);

  constructor(private formBuilder: FormBuilder) {
  }

  sendLink() {
    if (this.form.valid) {
      console.log(this.form.value);
      const { email } = this.form.getRawValue();
      if (email) {
        this.authService.recovery(email)
        .subscribe({
          next: () => {
            this.status = 'success';
            this.emailSent = true;
          },
          error: () => {
            this.status = 'failed';
            this.emailSent = false;
          }
         });  
      }
    }
    else {
      this.form.markAllAsTouched();
    }
  }
}

// recovery-form.component.ts
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomValidators } from '../../utils/CustomValidators';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from "../btn/btn.component";
import { AuthService } from '@services/auth.service';
import { RequestStatus } from '@models/request-status.model';
import { ActivatedRoute, Router } from '@angular/router';

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
    newPassword: ['', [Validators.required, Validators.minLength(8)]],
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

  status: RequestStatus = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  authService = inject(AuthService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  token = '';

  // formBuilder is injected
  constructor(private formBuilder: FormBuilder) {
    this.route.queryParamMap.subscribe(params => {
      const tokenParam = params.get('token');
      if (tokenParam) {
        this.token = tokenParam;
      }
      else {
        this.router.navigate(['/login']);
      }
    });
  }

  recovery () { 
    if (this.recoveryForm.valid) {
      const { newPassword } = this.recoveryForm.getRawValue();
      this.status = 'loading';
      if (newPassword) {
        this.authService.changePassword(this.token, newPassword)
          .subscribe({
            next: () => {
              this.status = 'success';
              this.router.navigate(['/login']);
            },
            error: () => {
              this.status = 'failed';
            }
          });
      }
    }
    else {
      // formControl touched occurs when the user clicks on the button for the first time
      this.recoveryForm.markAllAsTouched();
    }
  }
}

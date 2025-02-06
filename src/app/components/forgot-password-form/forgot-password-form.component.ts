import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnComponent } from "../btn/btn.component";

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
  status: string = 'init';
  emailSent: boolean = false;

  constructor(private formBuilder: FormBuilder) {
  }

  sendLink() {
    if (this.form.valid) {
      console.log(this.form.value);
      const { email } = this.form.getRawValue();
    }
    else {
      this.form.markAllAsTouched();
    }
  }
}

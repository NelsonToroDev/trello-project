import { Component } from '@angular/core';
import { BackgroundComponent } from "../../../components/background/backgroud.component";
import { HeaderComponent } from "../../../components/header/header.component";
import { ForgotPasswordFormComponent } from "../../../components/forgot-password-form/forgot-password-form.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [BackgroundComponent, HeaderComponent, ForgotPasswordFormComponent, FooterComponent, RouterModule],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {

}

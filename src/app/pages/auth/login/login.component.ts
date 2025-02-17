import { Component } from '@angular/core';
import { LoginFormComponent } from "../../../components/login-form/login-form.component";
import { HeaderComponent } from "../../../components/header/header.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { BackgroundComponent } from "../../../components/background/backgroud.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, HeaderComponent, FooterComponent, BackgroundComponent, RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}

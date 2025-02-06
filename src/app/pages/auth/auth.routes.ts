import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryComponent } from './recovery/recovery.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    title: 'login',
    path: 'login',
    component: LoginComponent
  },
  {
    title: 'Forgot password',
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    title: 'register',
    path: 'register',
    component: RegisterComponent
  },
  {
    title: 'recovery',
    path: 'recovery',
    component: RecoveryComponent
  }
];

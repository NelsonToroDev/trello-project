import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/layout/layout.routes').then(m => m.LayoutRoutes)
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AuthRoutes)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/layout/layout.routes').then(m => m.LayoutRoutes)
  },
];

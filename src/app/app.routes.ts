// app.routes.ts

import { Routes } from '@angular/router';
import { authGuard } from '@guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AuthRoutes)
  },
  {
    path: 'app',
    canActivate: [authGuard],
    loadChildren: () => import('./pages/layout/layout.routes').then(m => m.LayoutRoutes)
  },
];

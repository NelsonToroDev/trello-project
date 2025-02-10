// app.routes.ts

import { Routes } from '@angular/router';
import { authGuard } from '@guards/auth.guard';
import { redirectGuard } from '@guards/redirect.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [redirectGuard], // If already has a session then redirect to /app
    loadChildren: () => import('./pages/auth/auth.routes').then(m => m.AuthRoutes)
  },
  {
    path: 'app',
    canActivate: [authGuard],  // If there is not a session then redirect to /login
    loadChildren: () => import('./pages/layout/layout.routes').then(m => m.LayoutRoutes)
  },
];

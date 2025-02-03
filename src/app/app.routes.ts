import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/layout/layout.routes').then(m => m.LayoutRoutes)
  },
        
];

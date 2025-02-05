import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const LayoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'boards',
        pathMatch: 'full',
      },
      {
        path: 'boards',
        loadComponent: () => import('../boards/boards.component').then(m => m.BoardsComponent)
      },
      {
        path: 'boards/:id',
        loadComponent: () => import('../board/board.component').then(m => m.BoardComponent)
      },
      {
        path: 'profile',
        loadComponent: () => import('../profile/profile.component').then(m => m.ProfileComponent)
      },
      {
        path: 'users',
        loadComponent: () => import('../users/users.component').then(m => m.UsersComponent)
      },
      {
        // route every undefined path to the boards component
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

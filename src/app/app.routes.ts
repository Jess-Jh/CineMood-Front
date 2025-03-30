import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard-admin',
    loadComponent: () => import('./features/admin/pages/dashboard-admin-page/dashboard-admin-page.component'),
    children: [
      {
        path: 'movies',
        loadComponent: () => import('./features/admin/pages/manage-movies-page/manage-movies-page.component'),
      },
      {
        path: '**',
        redirectTo: 'manage-movies',
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard-admin',
  },
];

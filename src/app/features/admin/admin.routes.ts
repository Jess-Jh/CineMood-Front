import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard-admin-page/dashboard-admin-page.component'),
    children: [
      {
        path: 'movies',
        loadComponent: () => import('./pages/manage-movies-page/manage-movies-page.component'),
      },
      {
        path: 'theaters',
        loadComponent: () => import('./pages/manage-theaters-page/manage-theaters-page.component'),
      },
      {
        path: 'confectionery',
        loadComponent: () => import('./pages/manage-confectionery-page/manage-confectionery-page.component'),
      },
      {
        path: 'coupons',
        loadComponent: () => import('./pages/manage-coupons-page/manage-coupons-page.component'),
      },
      {
        path: 'theater-managers',
        loadComponent: () => import('./pages/manage-theater-managers-page/manage-theater-managers-page.component'),
      },
      {
        path: '**',
        redirectTo: 'movies',
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard-admin',
  },
];

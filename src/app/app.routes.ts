import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'app',
  //   loadChildren: () =>
  //     import('./modules/app/app.routes').then(m => m.APP_ROUTES),
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./modules/auth/auth.routes').then(m => m.AUTH_ROUTES),
  // },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'app',
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'alone',
    loadComponent: () =>
      import('./alone/pages/alone-page/alone-page.component').then(
        (m) => m.AlonePageComponent
      ),
  },
];

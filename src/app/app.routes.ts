import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: '/map',
    pathMatch: 'full',
  },
  { path: 'map', component: MapComponent }
];

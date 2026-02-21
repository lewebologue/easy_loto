import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DisplayComponent } from './pages/display/display.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'display',
    component: DisplayComponent
  },
];

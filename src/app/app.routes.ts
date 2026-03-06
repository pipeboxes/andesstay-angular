import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { HotelDetail } from './pages/hotel-detail/hotel-detail';
import { Favorites } from './pages/favorites/favorites';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'hotels/:id', component: HotelDetail },
  { path: 'favorites', component: Favorites },
  { path: '**', redirectTo: '' },
];

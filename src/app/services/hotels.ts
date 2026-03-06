import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Hotel {
  id: string;
  name: string;
  city: string;
  country: string;
  pricePerNight: number;
  rating: number;
}

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  private readonly hotels: Hotel[] = [
    {
      id: 'hst-001',
      name: 'AndesStay Santiago Centro',
      city: 'Santiago',
      country: 'Chile',
      pricePerNight: 59000,
      rating: 4.6,
    },
    {
      id: 'hst-002',
      name: 'AndesStay Valparaíso Vista Mar',
      city: 'Valparaíso',
      country: 'Chile',
      pricePerNight: 72000,
      rating: 4.4,
    },
    {
      id: 'hst-003',
      name: 'AndesStay Puerto Varas Lago',
      city: 'Puerto Varas',
      country: 'Chile',
      pricePerNight: 98000,
      rating: 4.8,
    },
  ];

  getHotels(): Observable<Hotel[]> {
    return of(this.hotels);
  }
}

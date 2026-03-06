import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsService, Hotel } from '../../services/hotels';
import { HotelCard } from '../../components/hotel-card/hotel-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HotelCard],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelsService: HotelsService) {}

  ngOnInit(): void {
    this.hotelsService.getHotels().subscribe((data: Hotel[]) => {
      this.hotels = data;
    });
  }
}

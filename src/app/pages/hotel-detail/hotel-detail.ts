import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HotelsService, Hotel } from '../../services/hotels';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-detail.html',
  styleUrls: ['./hotel-detail.scss']
})
export class HotelDetail implements OnInit {

  hotel?: Hotel;

  constructor(
    private route: ActivatedRoute,
    private hotelsService: HotelsService
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.hotelsService.getHotels().subscribe((hotels) => {
      this.hotel = hotels.find(h => h.id === id);
    });

  }

}

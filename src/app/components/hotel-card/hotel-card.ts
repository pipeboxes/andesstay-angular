import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Hotel } from '../../services/hotels';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hotel-card.html',
  styleUrls: ['./hotel-card.scss'],
})
export class HotelCard {
  @Input() hotel!: Hotel;
}

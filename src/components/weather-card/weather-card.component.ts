import { Component, Input } from '@angular/core';
import { ICONS, IMAGE_URL } from 'src/const';
import { WeatherDay } from 'src/interfaces';

@Component({
  selector: 'weather-card',
  standalone: true,
  styleUrls: ['./weather-card.component.css'],
  templateUrl: './weather-card.component.html'
})
export class WeatherCardComponent {
  @Input() data: WeatherDay | null = null;

  getIconUrl(icon: string) {
    const image = ICONS[icon];
    return `${IMAGE_URL}/${image}`;
  }

  getFormattedDate(datetime: string) {
    const date = new Date(datetime);
    return `${date.toLocaleString('en-US', { weekday: 'short' })}, ${date.toLocaleDateString()}`;
  }
}

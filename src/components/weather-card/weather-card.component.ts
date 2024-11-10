import { Component, Input } from '@angular/core';
import { WeatherDay } from 'src/interfaces';

@Component({
  selector: 'weather-card',
  standalone: true,
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @Input() data: WeatherDay | null = null;

  getIconUrl(icon: string) {
    return `http://openweathermap.org/img/wn/${icon}.png`;
  }

  getFormattedDate(datetime: string) {
    const date = new Date(datetime);
    return `${date.toLocaleString('en-US', { weekday: 'short' })}, ${date.toLocaleDateString()}`;
  }
}

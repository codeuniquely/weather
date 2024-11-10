import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShareDataService } from 'src/services/share-data.service';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  imports:[FormsModule],
  selector: 'city-input',
  standalone: true,
  styleUrls: ['./city-input.component.css'],
  templateUrl: './city-input.component.html'
})
export class CityInputComponent {
  city: string = '';

  sharedDataService = inject(ShareDataService);
  weatherDataService = inject(WeatherDataService);

  onSubmit() {
    if (!this.city.trim()) {
      this.sharedDataService.setWeather({} as any);
      return;
    }

    this.weatherDataService
      .getLocationWeather(this.city)
      .then(data => {
        this.sharedDataService.setWeather(data);
        this.sharedDataService.clearDataError();
      })
      .catch(error => {
        this.sharedDataService.setWeather({} as any);
        this.sharedDataService.setDataError(error); // 'City not found. Please try again.'
      });
  }
}

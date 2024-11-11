import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Any, APIResponse } from 'src/interfaces';
import { ShareDataService } from 'src/services/share-data.service';
import { WeatherDataService } from 'src/services/weather-data.service';

const EmptyWeather:APIResponse = {} as Any;

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
      this.sharedDataService.setWeather(EmptyWeather);
      return;
    }

    this.weatherDataService
      .getLocationWeather(this.city)
      .then(data => {
        this.sharedDataService.setWeather(data);
        this.sharedDataService.clearDataError();
      })
      .catch(error => {
        this.sharedDataService.setWeather(EmptyWeather);
        this.sharedDataService.setDataError(error); // 'City not found. Please try again.'
      });
  }
}

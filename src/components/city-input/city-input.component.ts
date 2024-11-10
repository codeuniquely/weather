import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShareDataService } from 'src/services/share-data.service';
import { WeatherDataService } from 'src/services/weather-data.service';

@Component({
  imports:[FormsModule],
  // [ngModelOptions]="{standalone: true}"
  selector: 'city-input',
  standalone: true,
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css']
})
export class CityInputComponent {
  city: string = '';

  sharedDataService = inject(ShareDataService);
  weatherDataService = inject(WeatherDataService);

  onSubmit() {
    console.log('HELLO');

    // this.sharedDataService.setCity(this.city);
    if (!this.city.trim()) {
      return;
    }


    //
    console.log('GET SOME DATA');

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

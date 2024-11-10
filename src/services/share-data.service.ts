import { Injectable, signal } from '@angular/core';
import type { APIResponse, LocationInfo, WeatherDay } from 'src/interfaces';
import { daysNotIncludingToday } from 'src/utils';

export type WeatherError = {
  message?: string;
  name?: string;
};

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  private city  = signal<string>('')
  private days = signal<Array<WeatherDay>>([]);
  private error = signal<Array<string>>([]);
  private location = signal<LocationInfo | any>({});

  getCity(): string {
    return this.city();
  }

  getDays(): Array<WeatherDay> {
    return this.days();
  }

  getLocationInfo(): LocationInfo {
    return this.location();
  }

  clearDataError() {
    this.error.update(() => []);
  }

  getError(): Array<string> {
    return this.error();
  }

  setCity(city: string) {
    this.city.update(() => city);
  }

  setDataError(error: Error) {
    const message = `${error.message}`;
    this.error.update(() => [message]);
  }

  setWeather(response: APIResponse) {
    this.days.update(() => daysNotIncludingToday(response));

    this.location.update(() => ({
        address: response.address,
        latitude: response.latitude,
        longitude: response.longitude,
        resolvedAddress: response.resolvedAddress,
        timezone: response.timezone
      })
    )
  }
}

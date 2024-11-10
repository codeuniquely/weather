import { Injectable } from '@angular/core';
import type { APIResponse } from 'src/interfaces';
import { buildRequestUrl } from 'src/utils';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  async getLocationWeather(city: string): Promise<APIResponse> {
    const url = buildRequestUrl(city);

    return fetch(url).then(r => r.json());
  }
}

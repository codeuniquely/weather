import { TestBed } from '@angular/core/testing';
import { WeatherDataService } from '../weather-data.service';
import { MOCK_DATA } from './mock-data';

const setup = () => {
  TestBed.configureTestingModule({});

  const service = TestBed.inject(WeatherDataService);

  const spy = jest.spyOn(global, 'fetch').mockImplementation(
    jest.fn(
      () => Promise.resolve({ json: () => Promise.resolve(MOCK_DATA),
    }),
  ) as jest.Mock);

  return {
    spy,
    service,
  };
};

it('should create the weather service', async () => {
  const { service } = setup();

  expect(service).toBeDefined();
});

it('should fetch weather data', async () => {
  const { service } = setup();

  const actual = await service.getLocationWeather('chalgrove');
  expect(actual).toEqual(MOCK_DATA);
});

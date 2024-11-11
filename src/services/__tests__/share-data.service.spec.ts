import { MOCK_DATA, MOCK_DAYS, MOCK_ERROR, MOCK_LOCATION } from './mock-data';
import { ShareDataService } from '../share-data.service';

const setup = () => {
  const service = new ShareDataService();
  return {
    service,
  };
};

it('should create the shared data service', () => {
  const { service } = setup();
  expect(service).toBeDefined();
});

it(`should return empty days list when nothing has been set`, () => {
  const { service } = setup();

  const days = service.getDays();
  const info = service.getLocationInfo();

  expect(days).toEqual([]);
  expect(info).toEqual({});
});

it(`should get the empty errors list when nothing has been set`, () => {
  const { service } = setup();

  const errors = service.getError();
  expect(errors).toEqual([]);
});

it(`should set an error in errors list`, () => {
  const { service } = setup();

  service.setDataError(new Error(MOCK_ERROR));

  const errors = service.getError();
  expect(errors).toEqual([MOCK_ERROR]);
});

it(`should clear any errors`, () => {
  const { service } = setup();

  service.setDataError(new Error(MOCK_ERROR));
  service.clearDataError();

  const errors = service.getError();
  expect(errors).toEqual([]);
});

it(`should get the empty list when days are NOT loaded`, () => {
  const { service } = setup();

  const heros = service.getDays();
  expect(heros).toEqual([]);
});

it(`should set days and location info when weather data is loaded list`, () => {
  const { service } = setup();

  service.setWeather(MOCK_DATA);

  const info = service.getLocationInfo();
  const days = service.getDays();

  expect(info).toEqual(MOCK_LOCATION);
  expect(days).toEqual(MOCK_DAYS);
});

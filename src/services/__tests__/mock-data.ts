import { APIResponse } from "src/interfaces";

export const MOCK_DATA: APIResponse = {
  address: "Chalgrove",
  description: "Similar temperatures continuing with no rain expected.",
  latitude: 51.6677,
  longitude: -1.08107,
  queryCost: 1,
  resolvedAddress: "Chalgrove, Oxford, England, United Kingdom",
  timezone: "Europe/London",
  tzoffset: 0.0,
  days: [
      {
        conditions: "Partially cloudy",
        datetime: "2024-11-11",
        description: "Partly cloudy throughout the day.",
        icon: "partly-cloudy-day",
        temp: 7.8,
        tempmax: 10.0,
        tempmin: 5.2,
        winddir: 347.9,
        windspeed: 15.1
      },
      {
        conditions: "Partially cloudy",
        datetime: "2024-11-12",
        description: "Partly cloudy throughout the day.",
        icon: "partly-cloudy-day",
        temp: 6.7,
        tempmax: 9.5,
        tempmin: 4.5,
        winddir: 12.5,
        windspeed: 21.6
      },
      {
        conditions: "Overcast",
        datetime: "2024-11-13",
        description: "Cloudy skies throughout the day.",
        icon: "cloudy",
        temp: 7.3,
        tempmax: 9.2,
        tempmin: 5.7,
        winddir: 355.2,
        windspeed: 12.2
      },
      {
        conditions: "Overcast",
        datetime: "2024-11-14",
        description: "Cloudy skies throughout the day.",
        icon: "cloudy",
        temp: 8.3,
        tempmax: 9.7,
        tempmin: 5.9,
        winddir: 36.5,
        windspeed: 13.0
      },
      {
        conditions: "Partially cloudy",
        datetime: "2024-11-15",
        description: "Partly cloudy throughout the day.",
        icon: "partly-cloudy-day",
        temp: 5.0,
        tempmax: 7.8,
        tempmin: 2.6,
        winddir: 270.1,
        windspeed: 10.1
      },
      {
        conditions: "Overcast",
        datetime: "2024-11-16",
        description: "Cloudy skies throughout the day.",
        icon: "cloudy",
        temp: 7.1,
        tempmax: 9.5,
        tempmin: 4.9,
        winddir: 247.9,
        windspeed: 11.9
      }
  ]
};

export const MOCK_DAYS = [
  MOCK_DATA.days[1],
  MOCK_DATA.days[2],
  MOCK_DATA.days[3],
  MOCK_DATA.days[4],
  MOCK_DATA.days[5],
]

export const MOCK_ERROR = 'MOCK ERROR';

export const MOCK_LOCATION = {
  address: MOCK_DATA.address,
  latitude: MOCK_DATA.latitude,
  longitude: MOCK_DATA.longitude,
  resolvedAddress: MOCK_DATA.resolvedAddress,
  timezone: MOCK_DATA.timezone
}


export type ObjectMap = { [key: string]: unknown };
export type ObjectMapAny = { [key: string]: any }; // eslint-disable-line @typescript-eslint/no-explicit-any
export type ObjectMapString = { [key: string]: string };

export const Icons = {
  'cloudy': 'cloudy',
  'partly-cloudy-day': 'partly-cloudy-day',
  'rainy': 'rainy',
  'sunny': 'sunny'
}

// "address":"oxford",
// "description":"Similar temperatures continuing with no rain expected.",
// "latitude":51.7563,
// "longitude":-1.25951,
// "queryCost":1,
// "resolvedAddress":"Oxford, England, United Kingdom",
// "timezone":"Europe/London",
// "tzoffset":0.0,
export type APIResponse = {
  address: string;
  days: Array<WeatherDay>
  description: string;
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string,
  timezone: string;
  tzoffset: number;
}

export type LocationInfo = {
  address: string,
  resolvedAddress: string,
  latitude: number;
  longitude: number;
  timezone: string;
}

export type WeatherDay = {
  conditions: string; // "Overcast",
  datetime: string; // "2024-11-10",
  description: string; // "Cloudy skies throughout the day.",
  icon: string; // "cloudy",
  temp: number; // 9.6,
  tempmax: number; // 13,
  tempmin:number; //  6.5,
  winddir: number; // 254.3,
  windspeed: number; // 10.1
}

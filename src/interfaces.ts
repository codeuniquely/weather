export type Any = any; // eslint-disable-line @typescript-eslint/no-explicit-any
export type ObjectMap = { [key: string]: unknown };
export type ObjectMapAny = { [key: string]: Any };
export type ObjectMapString = { [key: string]: string };

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
  conditions: string;
  datetime: string;
  description: string;
  icon: string;
  temp: number;
  tempmax: number;
  tempmin:number;
  winddir: number;
  windspeed: number;
}

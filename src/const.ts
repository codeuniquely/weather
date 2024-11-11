import { ObjectMapString } from "./interfaces";

export const DaysLongFormat = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const DaysShortFormat = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const FETCH_ERROR = 'Bad API Request:Invalid location parameter value.';

export const ICONS : ObjectMapString = {
  'clear-day': 'clear-day.c5680783.svg',
  'cloudy': 'cloudy.61f1f7c3.svg',
  'partly-cloudy-day': 'partly-cloudy-day.3f13edae.svg',
  'rain': 'rain.36d72e24.svg',
  'showers-day': 'showers-day.2f888a31.svg',
  'snow': 'snow.1a97ed19.svg',
  'snow-showers-day': 'snow-showers-day.ca1b4104.svg',
}

export const IMAGE_URL = 'https://www.visualcrossing.com/img';

export const PARAMS = {
  contentType: 'json',
  elements: 'datetime,resolvedAddress,latitude,longitude,tempmax,tempmin,temp,windspeed,winddir,conditions,description,icon',
  include: 'days,fcst',
  key: 'G9M6FLRBK98X7ED2J2FGR4RTP',
  unitGroup: 'metric',
}

export const ROOT_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

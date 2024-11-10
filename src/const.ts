export const DaysLongFormat = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const DaysShortFormat = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const PARAMS = {
  contentType: 'json',
  elements: 'datetime,resolvedAddres,latitude,longitude,tempmax,tempmin,temp,windspeed,winddir,condition,description,icon',
  include: 'days,fcst',
  key: 'G9M6FLRBK98X7ED2J2FGR4RTP',
  unitGroup: 'metric',
}

export const ROOT_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

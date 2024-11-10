import { PARAMS, ROOT_URL } from "./const";
import { APIResponse, ObjectMapAny } from "./interfaces";

export const buildRequestUrl = (city: string) => {
  const encodedParams = encodeParams(PARAMS);
  return `${ROOT_URL}${city}/next5days?${encodedParams}`
}

export const encodeParams = (params: ObjectMapAny = {}): string => {
  const form = [];

  for (const [key, value] of Object.entries(params)) {
    const encodedValue = encodeURIComponent(value);
    form.push(`${key}=${encodedValue}`);
  }

  return form.join('&');
};

export const isThisDayToday = (datetime: string, todaysDay: number) => new Date(datetime).getDay() === todaysDay;

export const daysNotIncludingToday = (response: APIResponse) => {
  const today = new Date(Date.now()).getDay();
  return response.days.filter(day => !isThisDayToday(day.datetime, today) ? day : null);
}

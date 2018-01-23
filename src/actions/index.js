import axios from 'axios';

const API_KEY = 'ea6ba045c03c3da5a43955868de62c45';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// as a convention we use a single variable as our action type,
// to avoid typos when dealing with strings.
// exported vars come up as suggestions 
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},no`;
  const request = axios.get(url);
  // axios returns a promise and we pass that promise into the payload of the return of the action
  console.log('Request ---> ', request);

  return {
    type: 'FETCH_WEATHER',
    payload: request
  };
}
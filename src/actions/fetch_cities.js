import fetchJsonp from 'fetch-jsonp';

const API_KEY = 'sp228916872664231778662139964184';
const CITY_URL = `http://partners.api.skyscanner.net/apiservices/xd/autosuggest/v1.0/US/USD/en-US?query=`;
export const FETCH_CITIES = 'FETCH_CITIES';


export function fetchCities(city) {
  const url = `${CITY_URL}${city}&apiKey=${API_KEY}`

  const request = fetchJsonp(url)
    .then(res => res.json())

  console.log('Request:', request);

  return {
    type: FETCH_CITIES,
    payload: request
  };
}

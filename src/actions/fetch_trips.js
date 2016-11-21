import fetchJsonp from 'fetch-jsonp';
import API_KEY from './fetch_cities'

const TRIP_URL = `http://partners.api.skyscanner.net/apiservices/xd/browseroutes/v1.0/US/USD/en-US/`;
export const FETCH_TRIPS = 'FETCH_TRIPS';

export function fetchTrips(city_code, date) {
  const url = `${TRIP_URL}${city_code}/anywhere/${date}?&apiKey=${API_KEY}`

  const request = fetchJsonp(url)
    .then(res => res.json())

  console.log('Request:', request);

  return {
    type: FETCH_TRIPS,
    payload: request
  };
}

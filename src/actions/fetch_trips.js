import fetchJsonp from 'fetch-jsonp';
export const API_KEY = 'sp228916872664231778662139964184';

const TRIP_URL = `http://partners.api.skyscanner.net/apiservices/xd/browseroutes/v1.0/US/USD/en-US/`;
export const FETCH_TRIPS = 'FETCH_TRIPS';

export function fetchTrips(city_code, departureDate, returnDate) {
  console.log(city_code);
  if (returnDate) {
    returnDate = `/${returnDate}`
  }
  const url = `${TRIP_URL}${city_code}/anywhere/${departureDate}${returnDate}?&apiKey=${API_KEY}`
  const request = fetchJsonp(url)
    .then(res => res.json())

  console.log('Request:', request);

  return {
    type: FETCH_TRIPS,
    payload: request
  };
}

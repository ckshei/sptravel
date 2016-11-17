import axios from 'axios';

const API_KEY = 'sp228916872664231778662139964184';
const CITY_URL = `http://partners.api.skyscanner.net/apiservices/autosuggest/v1.0/US/USD/en-US?query=`;

export const FETCH_CITIES = 'FETCH_CITIES';


export function fetchCities(city) {
  const url = `${CITY_URL}${city}&apiKey=${API_KEY}`
  const request = axios({
    method: 'get',
    url: url, 
    head: {'Content-Type': 'JSON' } 
  });

  return {
    type: FETCH_CITIES,
    payload: request
  };
}

export function changeToDeparture() {
  return {
    type: 'RENDER_DEPARTURE'
  };
}

export function changeToDate() {
  return {
  type: 'RENDER_DATE'
  };
}

export function changeToBudget() {
  return {
  type: 'RENDER_BUDGET'
  };
}

export function changeToResult() {
  return {
  type: 'RENDER_RESULT'
  };
}

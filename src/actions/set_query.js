export const SET_CITY = "SET_CITY";
export const SET_DEPARTURE = "SET_DEPARTURE";
export const SET_RETURN  = "SET_RETURN";
export const SET_BUDGET = "SET_BUDGET";

export function setCity(city) {
  return {
      type: SET_CITY,
      payload: city
  };
}

export function setDeparture(departureDate) {
  console.log(departureDate)
  return {
    type: SET_DEPARTURE,
    payload: departureDate
  };
}

export function setReturn(returnDate) {
  return {
    type: SET_RETURN,
    payload: returnDate
  };
}
export function setBudget(budget) {
  return {
  type: SET_BUDGET,
  payload: budget
  };
}

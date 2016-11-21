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

export function setDeparture(departure) {
  return {
    type: SET_DEPARTURE,
    payload: departure
  };
}

export function setReturn(return) {
  return {
    type: SET_RETURN,
    payload: return
  };
}

export function setBudget(budget) {
  return {
  type: SET_BUDGET,
  payload: budget
  };
}



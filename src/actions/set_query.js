export const SET_CITY = "SET_CITY";
export const SET_DEPARTURE = "SET_DEPARTURE";
export const SET_RETURN  = "SET_RETURN";
export connst SET_BUDGET = "SET_BUDGET";

export function setCity(city) {
  return {
      type: SET_CITY
  };
}

export function setDeparture() {
  return {
    type: SET_DEPARTURE
  };
}

export function setReturn() {
  return {
    type: SET_RETURN
  };
}

export function setBudget() {
  return {
  type: SET_BUDGET
  };
}



export const RENDER_DEPARTURE = "RENDER_DEPARTURE";
export const RENDER_DATE = "RENDER_DATE";
export const RENDER_BUDGET = "RENDER_BUDGET";
export const RENDER_RESULT = "RENDER_RESULT";

export function changeToDeparture() {
  return {
    type: RENDER_DEPARTURE
  };
}

export function changeToDate() {
  return {
  type: RENDER_DATE
  };
}

export function changeToBudget() {
  return {
  type: RENDER_BUDGET
  };
}

export function changeToResult() {
  return {
  type: RENDER_RESULT
  };
}

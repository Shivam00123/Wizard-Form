import {
  CHANGE_STEP,
  UPDATE_DETAILS_ALTERNATE,
  UPDATE_DETAILS_EMAIL,
  UPDATE_DETAILS_FIRSTNAME,
  UPDATE_DETAILS_LASTNAME,
  UPDATE_DETAILS_PASSWORD,
  UPDATE_DETAILS_PHONE,
} from "./actionTypes";

export function changeStep(step) {
  return {
    type: CHANGE_STEP,
    step,
  };
}
export function updateDetailsFirstName(value) {
  return {
    type: UPDATE_DETAILS_FIRSTNAME,
    value,
  };
}
export function updateDetailslastName(value) {
  return {
    type: UPDATE_DETAILS_LASTNAME,
    value,
  };
}
export function updateDetailsEmail(value) {
  return {
    type: UPDATE_DETAILS_EMAIL,
    value,
  };
}
export function updateDetailsPassword(value) {
  return {
    type: UPDATE_DETAILS_PASSWORD,
    value,
  };
}
export function updateDetailsPhone(value) {
  return {
    type: UPDATE_DETAILS_PHONE,
    value,
  };
}
export function updateDetailsAlternate(value) {
  return {
    type: UPDATE_DETAILS_ALTERNATE,
    value,
  };
}

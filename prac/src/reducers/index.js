import {
  CHANGE_STEP,
  UPDATE_DETAILS_ALTERNATE,
  UPDATE_DETAILS_EMAIL,
  UPDATE_DETAILS_FIRSTNAME,
  UPDATE_DETAILS_LASTNAME,
  UPDATE_DETAILS_PASSWORD,
  UPDATE_DETAILS_PHONE,
} from "../actions/actionTypes";

const initialState = {
  currentStep: "step1",
  newFirstName: "",
  newLastName: "",
  newEmail: "",
  newPassword: "",
  phone: "",
  alternate: "",
};

export default function changingStep(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STEP:
      return {
        ...state,
        currentStep: action.step,
      };
    case UPDATE_DETAILS_FIRSTNAME:
      return {
        ...state,
        newFirstName: action.value,
      };
    case UPDATE_DETAILS_LASTNAME:
      return {
        ...state,
        newLastName: action.value,
      };
    case UPDATE_DETAILS_EMAIL:
      return {
        ...state,
        newEmail: action.value,
      };
    case UPDATE_DETAILS_PASSWORD:
      return {
        ...state,
        newPassword: action.value,
      };
    case UPDATE_DETAILS_PHONE:
      return {
        ...state,
        phone: action.value,
      };
    case UPDATE_DETAILS_ALTERNATE:
      return {
        ...state,
        alternate: action.value,
      };
    default:
      return {
        ...state,
      };
  }
}

import {
  INCREASE_CURRENT_PAGE,
  DECREASE_CURRENT_PAGE,
  SET_NUMBER_OF_LIGN_TO_DISPLAY,
} from "../constants/rrtable-types";

export const rrtableReducer = (state, action) => {
  switch (action.type) {
    case INCREASE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage + 1,
      };
    case DECREASE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage - 1,
      };
    case SET_NUMBER_OF_LIGN_TO_DISPLAY:
      return {
        ...state,
        nbrOfLignToDisplay: action.nbrOfLignToDisplay,
      };
    default:
      return state;
  }
};

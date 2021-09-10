import * as types from "../constants/rrtable-types";

export const increaseCurrentPage = (currentPage) => {
  return {
    type: types.INCREASE_CURRENT_PAGE,
    currentPage,
  };
};

export const decreaseCurrentPage = (currentPage) => {
  return {
    type: types.DECREASE_CURRENT_PAGE,
    currentPage,
  };
};

export const setNumberOfLignToDisplay = (nbrOfLignToDisplay) => {
  return {
    type: types.SET_NUMBER_OF_LIGN_TO_DISPLAY,
    nbrOfLignToDisplay,
  };
};

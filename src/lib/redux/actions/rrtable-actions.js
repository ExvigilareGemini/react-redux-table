import * as types from "../constants/rrtable-types";

export const initiateState = (rowsNumber, numberOfLignToDisplay) => {
  const numberOfPages = Math.ceil(rowsNumber/numberOfLignToDisplay)
  return {
    type: types.INITIATE_STATE,
    rowsNumber,
    numberOfLignToDisplay,
    numberOfPages,
  };
};

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

export const setNumberOfPages = (nbrOfLignToDisplay) => {
  return {
    type: types.SET_NUMBER_OF_PAGES,
    nbrOfLignToDisplay,
  };
};

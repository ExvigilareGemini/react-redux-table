import * as types from "../constants/rrtable-types";

export const initiateState = (rowsNumber, numberOfLignToDisplay) => {
  const numberOfPages = Math.ceil(rowsNumber / numberOfLignToDisplay);
  return {
    type: types.INITIATE_STATE,
    rowsNumber,
    numberOfLignToDisplay,
    numberOfPages,
  };
};

// Force the value of the page
export const setCurrentPage = (currentPage) => {
  if (currentPage < 0) currentPage = 0 ; 
  return {
    type: types.SET_CURRENT_PAGE,
    currentPage,
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

export const setNumberOfPages = (numberOfLignToDisplay, rowsNumber) => {
  const numberOfPages = Math.ceil(rowsNumber / numberOfLignToDisplay);
  return {
    type: types.SET_NUMBER_OF_PAGES,
    numberOfLignToDisplay,
    rowsNumber,
    numberOfPages,
  };
};
export const sortColumn = (actualSortedColumn, columnToSort, sortingOrder) => {
  if (actualSortedColumn === columnToSort) {
    sortingOrder = sortingOrder * -1;
  } else {
    sortingOrder = 1;
    actualSortedColumn = columnToSort;
  }
  return {
    type: types.SORT_COLUMN,
    actualSortedColumn,
    sortingOrder,
  };
};

export const setFilterSearch = (searchValue) => {
  return {
    type: types.SET_FILTER_SEARCH,
    searchValue,
  }
}

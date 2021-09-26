import * as types from "../constants/rrtable-types";

/**
 *  Redux action creator that initialise the state in redux
 * @category Redux
 * @subcategory Actions
 * @param {number} rowsNumber - Total number of rows
 * @param {number} numberOfLignToDisplay - numberOfLignToDisplay
 * @returns {initiateStateReturn}
 */
export function initiateState(rowsNumber, numberOfLignToDisplay) {
  const numberOfPages = Math.ceil(rowsNumber / numberOfLignToDisplay);
  return {
    type: types.INITIATE_STATE,
    rowsNumber,
    numberOfLignToDisplay,
    numberOfPages,
  };
}

/**
 * Redux action creator that set the value of the current displayed page
 * @category Redux
 * @subcategory Actions
 * @param {number} - The value to set for the current page
 * @returns {setCurrentPageReturn}
 */
export function setCurrentPage(currentPage) {
  if (currentPage < 0) currentPage = 0;
  return {
    type: types.SET_CURRENT_PAGE,
    currentPage,
  };
}

/**
 * Redux action creator that increase the value of the current page
 * @category Redux
 * @subcategory Actions
 * @param {number} - The value of the actual page
 * @returns {increaseCurrentPageReturn}
 */
export function increaseCurrentPage(currentPage) {
  return {
    type: types.INCREASE_CURRENT_PAGE,
    currentPage,
  };
}

/**
 * Redux action creator that decrease the value of the current page
 * @category Redux
 * @subcategory Actions
 * @param {number} - The value of the actual page
 * @returns {decreaseCurrentPageReturn}
 */
export function decreaseCurrentPage(currentPage) {
  return {
    type: types.DECREASE_CURRENT_PAGE,
    currentPage,
  };
}

/**
 * Redux action creator that set the total number of pages
 * @category Redux
 * @subcategory Actions
 * @param {number} rowsNumber - Total number of rows
 * @param {number} numberOfLignToDisplay - numberOfLignToDisplay
 * @returns {setNumberOfPagesReturn}
 */
export function setNumberOfPages(rowsNumber, numberOfLignToDisplay) {
  const numberOfPages = Math.ceil(rowsNumber / numberOfLignToDisplay);
  return {
    type: types.SET_NUMBER_OF_PAGES,
    numberOfLignToDisplay,
    rowsNumber,
    numberOfPages,
  };
}

/**
 * Redux action creator that sort columns
 * @category Redux
 * @subcategory Actions
 * @param {string} actualSortedColumn - Name of the column's category that is sorted
 * @param {string} columnToSort - Name of the column's category to sort
 * @param {number} sortingOrder - Sorting order : 1 smaller to bigger, -1 bigger to smaller
 * @returns {sortColumnReturn}
 */
export function sortColumn(actualSortedColumn, columnToSort, sortingOrder) {
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
}

/**
 * Redux action creator that set the value to search inside Redux state
 * @category Redux
 * @subcategory Actions
 * @property {string} searchValue - The value to search inside the table
 * @returns {setFilterSearchReturn}
 */
export function setFilterSearch(searchValue) {
  return {
    type: types.SET_FILTER_SEARCH,
    searchValue,
  };
}

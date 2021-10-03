"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initiateState = initiateState;
exports.setCurrentPage = setCurrentPage;
exports.increaseCurrentPage = increaseCurrentPage;
exports.decreaseCurrentPage = decreaseCurrentPage;
exports.setNumberOfPages = setNumberOfPages;
exports.sortColumn = sortColumn;
exports.setFilterSearch = setFilterSearch;

var types = _interopRequireWildcard(require("../constants/rrtable-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 *  Redux action creator that initialise the state in redux
 * @category Redux
 * @subcategory Actions
 * @param {number} rowsNumber - Total number of rows
 * @param {number} numberOfLignToDisplay - numberOfLignToDisplay
 * @returns {initiateStateReturn}
 */
function initiateState(rowsNumber, arrayOfLignToDisplayToTest) {
  const numberOfLignToDisplay = arrayOfLignToDisplayToTest === undefined ? rowsNumber : arrayOfLignToDisplayToTest[0];
  const numberOfPages = Math.ceil(rowsNumber / numberOfLignToDisplay);
  return {
    type: types.INITIATE_STATE,
    rowsNumber,
    numberOfLignToDisplay,
    numberOfPages
  };
}
/**
 * Redux action creator that set the value of the current displayed page
 * @category Redux
 * @subcategory Actions
 * @param {number} - The value to set for the current page
 * @returns {setCurrentPageReturn}
 */


function setCurrentPage(currentPage) {
  if (currentPage < 0) currentPage = 0;
  return {
    type: types.SET_CURRENT_PAGE,
    currentPage
  };
}
/**
 * Redux action creator that increase the value of the current page
 * @category Redux
 * @subcategory Actions
 * @param {number} - The value of the actual page
 * @returns {increaseCurrentPageReturn}
 */


function increaseCurrentPage(currentPage) {
  return {
    type: types.INCREASE_CURRENT_PAGE,
    currentPage
  };
}
/**
 * Redux action creator that decrease the value of the current page
 * @category Redux
 * @subcategory Actions
 * @param {number} - The value of the actual page
 * @returns {decreaseCurrentPageReturn}
 */


function decreaseCurrentPage(currentPage) {
  return {
    type: types.DECREASE_CURRENT_PAGE,
    currentPage
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


function setNumberOfPages(rowsNumber, numberOfLignToDisplayToTest) {
  const numberOfLignToDisplay = numberOfLignToDisplayToTest === undefined ? rowsNumber : numberOfLignToDisplayToTest;
  const numberOfPages = Math.ceil(rowsNumber / numberOfLignToDisplay);
  return {
    type: types.SET_NUMBER_OF_PAGES,
    numberOfLignToDisplay,
    rowsNumber,
    numberOfPages
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


function sortColumn(actualSortedColumn, columnToSort, sortingOrder) {
  if (actualSortedColumn === columnToSort) {
    sortingOrder = sortingOrder * -1;
  } else {
    sortingOrder = 1;
    actualSortedColumn = columnToSort;
  }

  return {
    type: types.SORT_COLUMN,
    actualSortedColumn,
    sortingOrder
  };
}
/**
 * Redux action creator that set the value to search inside Redux state
 * @category Redux
 * @subcategory Actions
 * @property {string} searchValue - The value to search inside the table
 * @returns {setFilterSearchReturn}
 */


function setFilterSearch(searchValue) {
  return {
    type: types.SET_FILTER_SEARCH,
    searchValue
  };
}
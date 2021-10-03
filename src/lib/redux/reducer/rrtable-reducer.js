import {
  INITIATE_STATE,
  SET_CURRENT_PAGE,
  INCREASE_CURRENT_PAGE,
  DECREASE_CURRENT_PAGE,
  SET_NUMBER_OF_PAGES,
  SORT_COLUMN,
  SET_FILTER_SEARCH,
} from "../constants/rrtable-types";
import { initialState } from "../initialState/rrtable-initialState";

/**
 * Component's reducer
 *
 * @category Redux
 * @subcategory Reducer
 * @param {State} state state of the table
 * @param {Object} action actions to execute
 * @param {string} action.type redux action type
 * @param {any} action.payload payload of action
 * @return {State} New state modified
 */

export default function rrtableReducer(state = initialState, action) {
  switch (action.type) {
    case INITIATE_STATE:
      return {
        ...state,
        rowsNumber: action.rowsNumber,
        numberOfLignToDisplay: action.numberOfLignToDisplay,
        numberOfPages: action.numberOfPages,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
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
    case SET_NUMBER_OF_PAGES:
      return {
        ...state,
        numberOfLignToDisplay: action.numberOfLignToDisplay,
        rowsNumber: action.rowsNumber,
        numberOfPages: action.numberOfPages,
      };
    case SORT_COLUMN:
      return {
        ...state,
        actualSortedColumn: action.actualSortedColumn,
        sortingOrder: action.sortingOrder,
      };
    case SET_FILTER_SEARCH:
      return {
        ...state,
        searchValue: action.searchValue,
        currentPage: 0,
      };
    default:
      return state;
  }
}

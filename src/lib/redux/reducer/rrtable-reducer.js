import {
  INITIATE_STATE,
  SET_CURRENT_PAGE,
  INCREASE_CURRENT_PAGE,
  DECREASE_CURRENT_PAGE,
  SET_NUMBER_OF_PAGES,
  SORT_COLUMN,
} from "../constants/rrtable-types";
import { initialState } from "../initialState/rrtable-initialState";

export const rrtableReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_STATE:
      console.log("Reducer initiate state");
      return {
        ...state,
        rrtable: {
          ...state.rrtable,
          rowsNumber: action.rowsNumber,
          numberOfLignToDisplay: action.numberOfLignToDisplay,
          numberOfPages: action.numberOfPages,
        },
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        rrtable: {
          ...state.rrtable,
          currentPage: action.currentPage,
        },
      };
    case INCREASE_CURRENT_PAGE:
      return {
        ...state,
        rrtable: {
          ...state.rrtable,
          currentPage: action.currentPage + 1,
        },
      };
    case DECREASE_CURRENT_PAGE:
      return {
        ...state,
        rrtable: {
          ...state.rrtable,
          currentPage: action.currentPage - 1,
        },
      };
    case SET_NUMBER_OF_PAGES:
      return {
        ...state,
        rrtable: {
          ...state.rrtable,
          numberOfLignToDisplay: action.numberOfLignToDisplay,
          numberOfPages: action.numberOfPages,
        },
      };
    case SORT_COLUMN:
      return {
        ...state,
        rrtable: {
          ...state.rrtable,
          actualSortedColumn: action.actualSortedColumn,
          sortingOrder: action.sortingOrder,
        },
      };
    default:
      console.log("Reducer default");
      return state;
  }
};

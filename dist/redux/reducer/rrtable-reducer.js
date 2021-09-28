"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rrtable = rrtable;

var _rrtableTypes = require("../constants/rrtable-types");

var _rrtableInitialState = require("../initialState/rrtable-initialState");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
function rrtable() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _rrtableInitialState.initialState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _rrtableTypes.INITIATE_STATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        rowsNumber: action.rowsNumber,
        numberOfLignToDisplay: action.numberOfLignToDisplay,
        numberOfPages: action.numberOfPages
      });

    case _rrtableTypes.SET_CURRENT_PAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentPage: action.currentPage
      });

    case _rrtableTypes.INCREASE_CURRENT_PAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentPage: action.currentPage + 1
      });

    case _rrtableTypes.DECREASE_CURRENT_PAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentPage: action.currentPage - 1
      });

    case _rrtableTypes.SET_NUMBER_OF_PAGES:
      return _objectSpread(_objectSpread({}, state), {}, {
        numberOfLignToDisplay: action.numberOfLignToDisplay,
        rowsNumber: action.rowsNumber,
        numberOfPages: action.numberOfPages
      });

    case _rrtableTypes.SORT_COLUMN:
      return _objectSpread(_objectSpread({}, state), {}, {
        actualSortedColumn: action.actualSortedColumn,
        sortingOrder: action.sortingOrder
      });

    case _rrtableTypes.SET_FILTER_SEARCH:
      return _objectSpread(_objectSpread({}, state), {}, {
        searchValue: action.searchValue,
        currentPage: 0
      });

    default:
      return state;
  }
}
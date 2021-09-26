"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableConstructor;

var _react = _interopRequireDefault(require("react"));

var _TableBody = _interopRequireDefault(require("./components/TableBody"));

var _TableHeader = _interopRequireDefault(require("./components/TableHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
 * Render the table
 * @module TableConstructor
 * @component
 * @category Table
 * @subcategory
 * @requires React
 * @returns {JSX} {@link Header} & {@link TableBody}
 */
function TableConstructor(props) {
  const {
    rowsContent,
    headersArray,
    currentPage,
    rowsNumber,
    numberOfLignToDisplay,
    numberOfPages,
    sortingOrder,
    actualSortedColumn,
    searchValue,
    sortColumn,
    setCurrentPage,
    setNumberOfPages
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_TableHeader.default, {
    headersArray: headersArray,
    sortColumn: sortColumn,
    sortingOrder: sortingOrder,
    actualSortedColumn: actualSortedColumn
  }), /*#__PURE__*/_react.default.createElement(_TableBody.default, {
    headersArray: headersArray,
    rowsContent: rowsContent,
    currentPage: currentPage,
    rowsNumber: rowsNumber,
    numberOfLignToDisplay: numberOfLignToDisplay,
    numberOfPages: numberOfPages,
    sortingOrder: sortingOrder,
    searchValue: searchValue,
    actualSortedColumn: actualSortedColumn,
    setCurrentPage: setCurrentPage,
    setNumberOfPages: setNumberOfPages
  }));
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableBody;

var _react = _interopRequireDefault(require("react"));

var _Rows = _interopRequireDefault(require("./Rows"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
   * Render the table body
   * @namespace TableBody
   * @component
   * @category Table
   * @subcategory 
   * @param {Object} props
   * @requires React
   * @return {JSX} {@link Rows}
*/
function TableBody(props) {
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
    setCurrentPage,
    setNumberOfPages
  } = props;
  return /*#__PURE__*/_react.default.createElement("tbody", {
    className: "rrtable-table-body"
  }, /*#__PURE__*/_react.default.createElement(_Rows.default, {
    headersArray: headersArray,
    rowsContent: rowsContent,
    currentPage: currentPage,
    rowsNumber: rowsNumber,
    numberOfLignToDisplay: numberOfLignToDisplay,
    numberOfPages: numberOfPages,
    sortingOrder: sortingOrder,
    actualSortedColumn: actualSortedColumn,
    searchValue: searchValue,
    setCurrentPage: setCurrentPage,
    setNumberOfPages: setNumberOfPages
  }));
}
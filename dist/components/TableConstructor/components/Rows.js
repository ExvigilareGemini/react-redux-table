"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Rows;

var _react = _interopRequireWildcard(require("react"));

var _Cells = _interopRequireDefault(require("./Cells"));

var _sort = require("../../../functions/sort");

var _filter = require("../../../functions/filter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
   * Render the rows
   * @namespace Rows
   * @component
   * @category Table
   * @subcategory TableBody
   * @param {Object} props
   * @requires React
   * @return {JSX} {@link Cells}
*/
function Rows(props) {
  const {
    rowsContent,
    headersArray,
    numberOfLignToDisplay,
    currentPage,
    numberOfPages,
    rowsNumber,
    sortingOrder,
    actualSortedColumn,
    searchValue,
    setCurrentPage,
    setNumberOfPages
  } = props;
  const sortedRowsContent = (0, _sort.sortingColumn)(rowsContent, sortingOrder, actualSortedColumn);
  const sortedAndFilteredRowsContent = (0, _filter.filterContent)(sortedRowsContent, searchValue);
  const actualNbrOfFirstLign = currentPage * numberOfLignToDisplay;
  const rowsToDisplay = sortedAndFilteredRowsContent.slice(actualNbrOfFirstLign, actualNbrOfFirstLign + numberOfLignToDisplay);
  (0, _react.useEffect)(() => {
    if (numberOfLignToDisplay > rowsNumber - actualNbrOfFirstLign) {
      setCurrentPage(numberOfPages - 1);
    }

    setNumberOfPages(sortedAndFilteredRowsContent.length, numberOfLignToDisplay);
  }, [numberOfLignToDisplay, actualNbrOfFirstLign, numberOfPages, rowsNumber, setCurrentPage, setNumberOfPages, sortedAndFilteredRowsContent.length]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, rowsToDisplay.map((arr, index1) => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      className: "rrtable-row",
      key: index1
    }, /*#__PURE__*/_react.default.createElement(_Cells.default, {
      headersArray: headersArray,
      arr: arr,
      index1: index1
    }));
  }));
}
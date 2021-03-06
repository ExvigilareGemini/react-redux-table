"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableHeader;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function columnIsSorted(category, actualSortedColumn, sortingOrder) {
  if (category === actualSortedColumn) {
    return sortingOrder === -1 ? "rrtable-table-header-cell selectedBigger" : "rrtable-table-header-cell selectedSmaller";
  }

  return "rrtable-table-header-cell";
}
/**
 * Render columns headers
 * @namespace TableHeaders
 * @component
 * @category Table
 * @subcategory
 * @param {Object} props
 * @requires React
 */


function TableHeader(props) {
  const {
    headersArray,
    sortColumn,
    sortingOrder,
    actualSortedColumn
  } = props;
  return /*#__PURE__*/_react.default.createElement("thead", {
    className: "rrtable-table-header"
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: "rrtable-table-header-row"
  }, headersArray.map((el, index) => {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: el.title + index,
      className: columnIsSorted(el.category, actualSortedColumn, sortingOrder),
      onClick: () => sortColumn(actualSortedColumn, el.category, sortingOrder)
    }, el.title);
  })));
}
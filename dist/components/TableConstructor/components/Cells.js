"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Cells;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function columnIsSorted(category, actualSortedColumn) {
  if (category === actualSortedColumn) {
    return "rrtable-row-cell selected";
  }

  return "rrtable-row-cell";
}
/**
 * Render a cell
 * @namespace Cells
 * @component
 * @category Table
 * @subcategory TableBody
 * @param {Object} props
 * @requires React
 */


function Cells(props) {
  const {
    headersArray,
    arr,
    index1,
    actualSortedColumn
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, headersArray.map((head, index2) => {
    const indexOfCorrespondingCategory = arr.findIndex(el => el.category === head.category);

    if (indexOfCorrespondingCategory === -1) {
      console.log("No match for category for row ".concat(index1, " at cell number ").concat(index2));
      return /*#__PURE__*/_react.default.createElement("td", {
        className: "rrtable-row-cell",
        key: index1 + index2
      }, "Error");
    }

    return /*#__PURE__*/_react.default.createElement("td", {
      className: columnIsSorted(arr[indexOfCorrespondingCategory].category, actualSortedColumn),
      key: index1 + index2
    }, arr[indexOfCorrespondingCategory].cellValue);
  }));
}
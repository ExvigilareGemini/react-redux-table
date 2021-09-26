"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EdgeEllipsis;

var _react = _interopRequireDefault(require("react"));

var _isSelected = _interopRequireDefault(require("../../../../functions/isSelected"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
   * Render sets of buttons with ellipsis at the beginning or the end
   * @namespace EdgeEllipsis
   * @component
   * @category Footer
   * @subcategory PageSelector
   * @param {Object} props
   * @requires React
   * @return {JSX}
*/
function EdgeEllipsis(props) {
  const {
    currentPage,
    numberOfPages,
    setCurrentPage
  } = props; // if I'm in the beginning or ending of the pages

  const valueToAddToIndex = currentPage <= numberOfPages / 2 ? 1 : numberOfPages - 4;

  function changeCurrentPage(index) {
    setCurrentPage(index);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, valueToAddToIndex !== 1 && /*#__PURE__*/_react.default.createElement("p", {
    className: "rrtable-pageSelector-ellipsis"
  }, "..."), Array(3).fill(null).map((el, index) => {
    return /*#__PURE__*/_react.default.createElement("button", {
      className: (0, _isSelected.default)(index + valueToAddToIndex, currentPage),
      key: index + valueToAddToIndex + 1,
      onClick: () => changeCurrentPage(index + valueToAddToIndex)
    }, index + valueToAddToIndex + 1);
  }), valueToAddToIndex === 1 && /*#__PURE__*/_react.default.createElement("p", {
    className: "rrtable-pageSelector-ellipsis"
  }, "..."));
}
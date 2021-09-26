"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CenterEllipsis;

var _react = _interopRequireDefault(require("react"));

var _isSelected = _interopRequireDefault(require("../../../../functions/isSelected"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
   * Render sets of buttons with ellipsis on each sides
   * @namespace CenterEllipsis
   * @component
   * @category Footer
   * @subcategory PageSelector
   * @param {Object} props
   * @requires React
   * @return {JSX}
*/
function CenterEllipsis(props) {
  const {
    currentPage,
    setCurrentPage
  } = props;

  function changeCurrentPage(index) {
    setCurrentPage(index);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "rrtable-pageSelector-ellipsis"
  }, "..."), Array(3).fill(null).map((el, index) => {
    return /*#__PURE__*/_react.default.createElement("button", {
      className: (0, _isSelected.default)(index + currentPage - 1, currentPage),
      key: index + currentPage,
      onClick: () => changeCurrentPage(index + currentPage - 1)
    }, index + currentPage);
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "rrtable-pageSelector-ellipsis"
  }, "..."));
}
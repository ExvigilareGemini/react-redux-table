"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageNumberButtonEllipsis;

var _react = _interopRequireDefault(require("react"));

var _CenterEllipsis = _interopRequireDefault(require("./PageNumberButtonEllipsis/CenterEllipsis"));

var _EdgeEllipsis = _interopRequireDefault(require("./PageNumberButtonEllipsis/EdgeEllipsis"));

var _isSelected = _interopRequireDefault(require("../../../functions/isSelected"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
   * Render a set of buttons to navigate through pages and ellipsis
   * @namespace PageNumberButtonEllipsis
   * @component 
   * @category Footer
   * @subcategory PageSelector
   * @param {Object} props
   * @requires React
   * @return {JSX} {@link CenterEllipsis} or {@link EdgeEllipsis}
*/
function PageNumberButtonEllipsis(props) {
  const {
    currentPage,
    numberOfPages,
    setCurrentPage
  } = props;

  function changeCurrentPage(index) {
    setCurrentPage(index);
  }

  function isCentered() {
    if (currentPage <= 3 || currentPage >= numberOfPages - 4) {
      return false;
    }

    return true;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    className: (0, _isSelected.default)(0, currentPage),
    key: 1,
    onClick: () => changeCurrentPage(0)
  }, 1), isCentered() ? /*#__PURE__*/_react.default.createElement(_CenterEllipsis.default, {
    currentPage: currentPage,
    numberOfPages: numberOfPages,
    setCurrentPage: setCurrentPage
  }) : /*#__PURE__*/_react.default.createElement(_EdgeEllipsis.default, {
    currentPage: currentPage,
    numberOfPages: numberOfPages,
    setCurrentPage: setCurrentPage
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: (0, _isSelected.default)(numberOfPages - 1, currentPage),
    key: numberOfPages,
    onClick: () => changeCurrentPage(numberOfPages)
  }, numberOfPages));
}
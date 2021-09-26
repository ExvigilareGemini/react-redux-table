"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageSelector;

var _react = _interopRequireDefault(require("react"));

var _PageNumberButton = _interopRequireDefault(require("./PageNumberButton"));

var _PageNumberButtonEllipsis = _interopRequireDefault(require("./PageNumberButtonEllipsis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
   * Render page number buttons
   * @namespace PageSelector
   * @component
   * @category Footer
   * @subcategory 
   * @param {Object} props
   * @requires React
   * @return {JSX} {@link PageNumberButtonEllipsis} or {@link PageNumberButton}
*/
function PageSelector(props) {
  const {
    currentPage,
    decreaseCurrentPage,
    increaseCurrentPage,
    numberOfPages,
    setCurrentPage
  } = props;

  function previousButton() {
    decreaseCurrentPage(currentPage);
  }

  function nextButton() {
    increaseCurrentPage(currentPage);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    className: "rrtable-pageSelector-pageButton",
    onClick: previousButton,
    disabled: currentPage === 0 ? true : false
  }, "Previous"), numberOfPages > 6 ? /*#__PURE__*/_react.default.createElement(_PageNumberButtonEllipsis.default, {
    currentPage: currentPage,
    numberOfPages: numberOfPages,
    setCurrentPage: setCurrentPage
  }) : /*#__PURE__*/_react.default.createElement(_PageNumberButton.default, {
    currentPage: currentPage,
    numberOfPages: numberOfPages,
    setCurrentPage: setCurrentPage
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "rrtable-pageSelector-pageButton",
    onClick: nextButton,
    disabled: currentPage === numberOfPages - 1 ? true : false
  }, "Next"));
}
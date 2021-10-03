"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = _interopRequireDefault(require("react"));

var _PageSelector = _interopRequireDefault(require("./components/PageSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render the footer of the table including show entries and PageSelector
 * @namespace Footer
 * @component
 * @category Footer
 * @subcategory
 * @param {Object} props
 * @requires React
 * @return {JSX} {@link PageSelector}
 */
function Footer(props) {
  const {
    showEntries,
    rowsNumber,
    currentPage,
    numberOfLignToDisplay,
    numberOfPages,
    setCurrentPage,
    increaseCurrentPage,
    decreaseCurrentPage,
    hideButtons
  } = props;
  const bigNumber = (currentPage + 1) * numberOfLignToDisplay;
  const smallNumber = bigNumber - (numberOfLignToDisplay - 1);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rrtable-footer-container"
  }, showEntries && /*#__PURE__*/_react.default.createElement("p", null, "Showing ", rowsNumber === 0 ? 0 : smallNumber, " to", " ", bigNumber > rowsNumber ? rowsNumber : bigNumber, " of ", rowsNumber, " ", "entries"), !hideButtons && /*#__PURE__*/_react.default.createElement("div", {
    className: "rrtable-pageSelector"
  }, /*#__PURE__*/_react.default.createElement(_PageSelector.default, {
    currentPage: currentPage,
    numberOfLignToDisplay: numberOfLignToDisplay,
    numberOfPages: numberOfPages,
    setCurrentPage: setCurrentPage,
    increaseCurrentPage: increaseCurrentPage,
    decreaseCurrentPage: decreaseCurrentPage
  })));
}
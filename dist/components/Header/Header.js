"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Header of the table, contains the title, select and searching sections
 * @namespace Header
 * @component
 * @category Header
 * @subcategory 
 * @param {*} props 
 */
function Header(props) {
  const {
    title,
    entriesSelector,
    filter,
    setNumberOfPages,
    rowsNumber,
    numberOfLignToDisplay,
    setFilterSearch
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, title && /*#__PURE__*/_react.default.createElement("h1", {
    className: "rrtable-header-title"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "rrtable-header-labelContainer"
  }, entriesSelector && /*#__PURE__*/_react.default.createElement("label", {
    className: "rrtable-header-label"
  }, "Show", /*#__PURE__*/_react.default.createElement("select", {
    className: "rrtable-header-input",
    defaultValue: numberOfLignToDisplay,
    onChange: e => setNumberOfPages(rowsNumber, parseInt(e.target.value))
  }, entriesSelector.map((el, index) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      value: el,
      key: el + index
    }, el);
  }))), filter && /*#__PURE__*/_react.default.createElement("label", {
    className: "rrtable-header-label"
  }, "Search", /*#__PURE__*/_react.default.createElement("input", {
    className: "rrtable-header-input",
    type: "search",
    onChange: e => setFilterSearch(e.target.value)
  }))));
}
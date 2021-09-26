"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageNumberButton;

var _react = _interopRequireDefault(require("react"));

var _isSelected = _interopRequireDefault(require("../../../functions/isSelected"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
   * Render a set of buttons to navigate through pages
   * @namespace PageNumberButton
   * @component
   * @category Footer
   * @subcategory PageSelector
   * @param {Object} props
   * @requires React
   * @return {JSX}
*/
function PageNumberButton(props) {
  const {
    numberOfPages,
    currentPage,
    setCurrentPage
  } = props;

  function changeCurrentPage(index) {
    setCurrentPage(index);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Array(numberOfPages).fill(null).map((el, index) => {
    return /*#__PURE__*/_react.default.createElement("button", {
      className: (0, _isSelected.default)(index, currentPage),
      key: index + 1,
      onClick: () => changeCurrentPage(index)
    }, index + 1);
  }));
}
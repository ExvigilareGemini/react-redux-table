"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.search.js");

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("./Header/Header"));

var _TableConstructor = _interopRequireDefault(require("./TableConstructor/TableConstructor"));

var _Footer = _interopRequireDefault(require("./Footer/Footer"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _rrtableActions = require("../redux/actions/rrtable-actions");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../style/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Root component of the table
 * 
 * @namespace Table
 * @component
 * @category Table
 * @param {typedefs.rowsContent} props 
 */
function Table(props) {
  const {
    headersArray,
    rowsContent,
    title,
    filter,
    entriesSelector,
    showEntries,
    // redux states
    currentPage,
    rowsNumber,
    numberOfLignToDisplay,
    numberOfPages,
    sortingOrder,
    actualSortedColumn,
    searchValue,
    // redux actions
    initiateState,
    setCurrentPage,
    increaseCurrentPage,
    decreaseCurrentPage,
    setNumberOfPages,
    sortColumn,
    setFilterSearch
  } = props;
  (0, _react.useEffect)(() => {
    initiateState(rowsContent.length, entriesSelector[0]);
  }, [entriesSelector, initiateState, rowsContent.length]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "rrtable"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "rrtable-header"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    title: title,
    filter: filter,
    entriesSelector: entriesSelector // redux states
    ,
    rowsNumber: rowsNumber,
    numberOfLignToDisplay: numberOfLignToDisplay // redux actions
    ,
    setNumberOfPages: setNumberOfPages,
    setFilterSearch: setFilterSearch
  })), /*#__PURE__*/_react.default.createElement("table", {
    className: "rrtable-table"
  }, /*#__PURE__*/_react.default.createElement(_TableConstructor.default, {
    headersArray: headersArray,
    rowsContent: rowsContent // redux states
    ,
    currentPage: currentPage,
    rowsNumber: rowsNumber,
    numberOfLignToDisplay: numberOfLignToDisplay,
    numberOfPages: numberOfPages,
    sortingOrder: sortingOrder,
    actualSortedColumn: actualSortedColumn,
    searchValue: searchValue // redux actions
    ,
    setCurrentPage: setCurrentPage,
    sortColumn: sortColumn,
    setNumberOfPages: setNumberOfPages
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "rrtable-footer"
  }, /*#__PURE__*/_react.default.createElement(_Footer.default, {
    showEntries: showEntries // redux states
    ,
    currentPage: currentPage,
    rowsNumber: rowsNumber,
    numberOfLignToDisplay: numberOfLignToDisplay,
    numberOfPages: numberOfPages // redux actions
    ,
    setCurrentPage: setCurrentPage,
    increaseCurrentPage: increaseCurrentPage,
    decreaseCurrentPage: decreaseCurrentPage
  }))));
}

Table.propTypes = {
  /**
   * PropTypes
   */
  title: _propTypes.default.string,
  filter: _propTypes.default.bool,
  entriesSelector: _propTypes.default.array,
  headersArray: _propTypes.default.arrayOf(_propTypes.default.object),
  rowsContent: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.object)),
  showEntries: _propTypes.default.bool,
  // redux states
  currentPage: _propTypes.default.number,
  rowsNumber: _propTypes.default.number,
  numberOfLignToDisplay: _propTypes.default.number,
  numberOfPages: _propTypes.default.number,
  sortingOrder: _propTypes.default.number,
  actualSortedColumn: _propTypes.default.string,
  searchValue: _propTypes.default.string,
  // redux actions
  initiateState: _propTypes.default.elementType,
  setCurrentPage: _propTypes.default.elementType,
  increaseCurrentPage: _propTypes.default.elementType,
  decreaseCurrentPage: _propTypes.default.elementType,
  setNumberOfPages: _propTypes.default.elementType,
  sortColumn: _propTypes.default.elementType,
  setFilterSearch: _propTypes.default.elementType
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    rowsNumber: state.rowsNumber,
    numberOfLignToDisplay: state.numberOfLignToDisplay,
    numberOfPages: state.numberOfPages,
    sortingOrder: state.sortingOrder,
    actualSortedColumn: state.actualSortedColumn,
    searchValue: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return (0, _redux.bindActionCreators)({
    initiateState: _rrtableActions.initiateState,
    setCurrentPage: _rrtableActions.setCurrentPage,
    increaseCurrentPage: _rrtableActions.increaseCurrentPage,
    decreaseCurrentPage: _rrtableActions.decreaseCurrentPage,
    setNumberOfPages: _rrtableActions.setNumberOfPages,
    sortColumn: _rrtableActions.sortColumn,
    setFilterSearch: _rrtableActions.setFilterSearch
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Table);

exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Table", {
  enumerable: true,
  get: function get() {
    return _Table.default;
  }
});
Object.defineProperty(exports, "rrtable", {
  enumerable: true,
  get: function get() {
    return _rrtableReducer.rrtable;
  }
});

var _Table = _interopRequireDefault(require("./components/Table"));

var _rrtableReducer = require("./redux/reducer/rrtable-reducer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
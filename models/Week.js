"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var WeekSchema = new _mongoose["default"].Schema({
  date: String,
  unixDate: Date,
  data: [],
  result: [],
  tagCount: []
});

var Week = _mongoose["default"].Model("Week", WeekSchema);

var _default = Week;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _csvParser = _interopRequireDefault(require("csv-parser"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var results = [];

_fs["default"].createReadStream(_path["default"].join(__dirname, './testing/jun6/jun6data.csv')).pipe((0, _csvParser["default"])()).on('data', function (data) {
  return results.push(data);
}).on('end', function () {
  console.log(results);
});
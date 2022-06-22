"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _csvParser = _interopRequireDefault(require("csv-parser"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var CSVReader = /*#__PURE__*/(0, _createClass2["default"])(function CSVReader() {
  (0, _classCallCheck2["default"])(this, CSVReader);
}); // Testing

(0, _defineProperty2["default"])(CSVReader, "readStreamAsync", function (stream) {
  return new Promise(function (resolve, reject) {
    var data = [];

    _fs["default"].createReadStream();
  });
});
(0, _defineProperty2["default"])(CSVReader, "read", /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(csvPath) {
    var options,
        stringify,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {
              stringify: false
            };
            stringify = options.stringify; //const results = []

            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              var data = [];

              _fs["default"].createReadStream(_path["default"].join(__dirname, csvPath)).pipe((0, _csvParser["default"])()).on('data', function (chunk) {
                return data.push(chunk);
              }).on('end', function () {
                if (data) {
                  resolve(stringify ? JSON.stringify(data) : data);
                } else {
                  reject(Error("No data found"));
                }
              });
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _defineProperty2["default"])(CSVReader, "write", function (csvPath, rows) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    delim: ","
  };
  var delim = options.delim;

  var stream = _fs["default"].createWriteStream(_path["default"].join(__dirname, csvPath));

  stream.once('open', function (fd) {
    rows.forEach(function (row, idx) {
      var rowString = '';

      if (idx === 0) {
        for (var col in row) {
          rowString += col + delim;
        }
      } else {
        for (var _col in row) {
          rowString += row[_col] + delim;
        }
      }

      rowString += '\n';
      stream.write(rowString);
    });
  });
});
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var jun6;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return CSVReader.read('./testing/jun6/jun6data.csv');

        case 2:
          jun6 = _context.sent;
          console.log(jun6); //CSVReader.write('./testing/testing.csv', jun6)

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
var _default = CSVReader;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _helpers = require("../utils/helpers");

var resolvers = {
  Query: {
    hello: function hello(_, _ref) {
      var name = _ref.name;

      if (name) {
        return "Hello ".concat(name, "!");
      }

      return "Hello!";
    },
    week: function () {
      var _week = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref2) {
        var dates;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dates = _ref2.dates;
                return _context.abrupt("return", dates.map(function (date) {
                  return {
                    date: date,
                    unixDate: (0, _helpers.getUnixTimestamp)(new Date(date)),
                    data: "blah",
                    result: "blah",
                    tagCount: "blah"
                  };
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function week(_x, _x2) {
        return _week.apply(this, arguments);
      }

      return week;
    }()
  },
  Mutation: {
    createWeek: function () {
      var _createWeek = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, _ref3) {
        var date, data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                date = _ref3.date, data = _ref3.data;
                return _context2.abrupt("return", {
                  date: date,
                  unixDate: (0, _helpers.getUnixTimestamp)(new Date(date)),
                  data: data
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createWeek(_x3, _x4) {
        return _createWeek.apply(this, arguments);
      }

      return createWeek;
    }(),
    addResult: function () {
      var _addResult = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, _ref4) {
        var date, result, tagCount;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                date = _ref4.date, result = _ref4.result, tagCount = _ref4.tagCount;
                return _context3.abrupt("return", {
                  date: date,
                  unixDate: (0, _helpers.getUnixTimestamp)(new Date(date)),
                  data: 'blah',
                  result: result,
                  tagCount: tagCount
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function addResult(_x5, _x6) {
        return _addResult.apply(this, arguments);
      }

      return addResult;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUnixTimestamp = void 0;

var getUnixTimestamp = function getUnixTimestamp(date) {
  return Math.floor(date.getTime() / 1000);
};

exports.getUnixTimestamp = getUnixTimestamp;
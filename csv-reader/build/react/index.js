"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = void 0;

var read = function read(csvString) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // const { stringify, delim } = false;
  if (!options.stringifigy) {
    options.stringifigy = false;
  }

  if (!options.delim) {
    options.delim = ",";
  }

  var stringifigy = options.stringifigy,
      delim = options.delim;
  var rows = csvString.split("\n");
  console.log({
    rows: rows
  });
  var headers = [];
  console.log({
    delim: delim
  });
  return rows.map(function (row, rIdx) {
    if (rIdx === 0) {
      headers = row.split(delim);
      console.log({
        headers: headers
      });
      return null;
    } else {
      var res = {};
      var values = row.split(delim);
      console.log({
        values: values
      });
      headers.forEach(function (header, hIdx) {
        if (header) {
          res[header] = values[hIdx];
        }
      });
      console.log({
        res: res
      });
      return res;
    }
  }).filter(function (item) {
    return item;
  }); // remove null
};

exports.read = read;
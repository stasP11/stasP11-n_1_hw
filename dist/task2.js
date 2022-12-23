"use strict";

var _csvtojson = require("csvtojson");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const csvFilePath = "nodejs-hw1-ex1.csv";
const parameters = {
  output: "json"
};

const writeableStream = _fs.default.createWriteStream("test.txt");

(0, _csvtojson.csv)(parameters).fromFile(csvFilePath).subscribe(json => {
  return new Promise((resolve, reject) => {
    if (json) {
      resolve(json);
    } else {
      reject("some error");
    }
  }).then(data => {
    return data;
  });
}).pipe(writeableStream);
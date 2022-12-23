"use strict";

var _process = _interopRequireDefault(require("process"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showReverseString(string) {
  const result = string.split("").reverse().join("");

  _process.default.stdout.write(result + '\n ' + '\n ' + '\n ');
}

_process.default.stdin.on("data", string => {
  showReverseString(string.toString());
});
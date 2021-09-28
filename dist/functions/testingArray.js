"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = testingArray;

/** Check if array is null
 *
 * @param {any} arrayToTest - The array to check
 * @param {string} name - The name of the array
 * @returns {Array} - If null, return an empty array, else return arrayToTest
 */
function testingArray(arrayToTest, name) {
  if (arrayToTest) {
    return arrayToTest;
  }

  console.log("".concat(name, " is null"));
  return [];
}
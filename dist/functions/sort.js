"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortingColumn = sortingColumn;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.sort.js");

/**
 * Compare the value inside two arrays
 * @category Functions
 * @param {Object[]} arr1 - First array
 * @param {Object[]} arr2 - Second array
 * @param {number} index - The place of the object to compare inside both arrays
 * @returns {bool} - True if the value in first array is bigger than in the second, false if not
 */
function compareArrays(arr1, arr2, index) {
  return arr1[index].cellValue.toLowerCase() > arr2[index].cellValue.toLowerCase() ? true : false;
}
/**
 * Invert the string date format from dd/mm/yyyy to yyyy/mm/dd and vice versa
 * @category Functions
 * @param {string} date - The date to invert
 * @returns {string} - The invertes date
 */


function reverseDateRepresentation(date) {
  let parts = date.split("/");
  return "".concat(parts[2], "-").concat(parts[1], "-").concat(parts[0]);
}
/**
 * Compare date on string format dd/mm/yyyy
 * @category Functions
 * @param {Object[]} arr1 - First array to compare
 * @param {Object[]} arr2 - Second array to compare
 * @param {number} index - The place in the array corresponding to the date category
 * @returns {bool} True if date is bigger in first array, false if not
 */


function compareArraysOfDateFormat(arr1, arr2, index) {
  const arrDateFormat1 = reverseDateRepresentation(arr1[index].cellValue);
  const arrDateFormat2 = reverseDateRepresentation(arr2[index].cellValue);
  return arrDateFormat1 > arrDateFormat2 ? true : false;
}

const regexIsDateFormat = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
/**
 * Sort an array according to one column category
 * @category Functions
 * @param {Array.Object[]} arrayToSort - The array to sort
 * @param {number} sortingOrder - Sorting direction : 1 smaller to bigger, -1 bigger to smaller
 * @param {string} categoryToCompare - The name of the category to compare
 * @returns {Array.Object[]} The sorted array
 */

function sortingColumn(arrayToSort, sortingOrder, categoryToCompare) {
  if (sortingOrder === 0 || sortingOrder === undefined || categoryToCompare === "" || categoryToCompare === undefined) {
    return arrayToSort;
  }

  arrayToSort.sort((arr1, arr2) => {
    const indexOfCorrespondingCategory = arr1.findIndex(el => el.category === categoryToCompare); // If in date format

    if (regexIsDateFormat.test(arr1[indexOfCorrespondingCategory].cellValue)) {
      if (compareArraysOfDateFormat(arr1, arr2, indexOfCorrespondingCategory)) {
        return sortingOrder;
      }
    } else if (compareArrays(arr1, arr2, indexOfCorrespondingCategory)) {
      return sortingOrder;
    }

    return -sortingOrder;
  });
  return arrayToSort;
}
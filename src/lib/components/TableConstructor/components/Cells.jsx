import React from "react";

function columnIsSorted(category, actualSortedColumn) {
  if (category === actualSortedColumn) {
    return "rrtable-row-cell selected";
  }
  return "rrtable-row-cell";
}

/**
 * Render a cell
 * @namespace Cells
 * @component
 * @category Table
 * @subcategory TableBody
 * @param {Object} props
 * @requires React
 */
export default function Cells(props) {
  const { headersArray, arr, index1, actualSortedColumn } = props;
  return (
    <>
      {headersArray.map((head, index2) => {
        const indexOfCorrespondingCategory = arr.findIndex(
          (el) => el.category === head.category
        );
        if (indexOfCorrespondingCategory === -1) {
          console.log(
            `No match for category for row ${index1} at cell number ${index2}`
          );
          return (
            <td className="rrtable-row-cell" key={index1 + index2}>
              Error
            </td>
          );
        }
        return (
          <td className={columnIsSorted(arr[indexOfCorrespondingCategory].category, actualSortedColumn)} key={index1 + index2}>
            {arr[indexOfCorrespondingCategory].cellValue}
          </td>
        );
      })}
    </>
  );
}

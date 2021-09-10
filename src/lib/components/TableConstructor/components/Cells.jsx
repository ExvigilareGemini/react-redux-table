import React from "react";

export default function Cells(props) {
  const { headersArray, arr, index1 } = props;
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
            <td className="rrtable-cell" key={index1 + index2}>
              Error
            </td>
          );
        } else {
          return (
            <td className="rrtable-cell" key={index1 + index2}>
              {arr[indexOfCorrespondingCategory].cellValue}
            </td>
          );
        }
      })}
    </>
  );
}

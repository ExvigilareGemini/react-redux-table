import React from "react";

export default function TableBody(props) {
  const { rowsContent, headersArray } = props;

  return (
    <tbody className="rrtable-table-body">
      {rowsContent.map((arr, index1) => {
        return (
          <tr className="rrtable-row" key={index1}>
            {headersArray.map((head, index2) => {
              const indexOfCorrespondingCategory = arr.findIndex(
                (el) => el.category === head.category
              );
              if (indexOfCorrespondingCategory === -1) {
                console.log(`No match for category for row ${index1} at cell number ${index2}`);
                return <td className="rrtable-cell" key={index1 + index2}>Error</td>
              } else {
                return (
                  <td className="rrtable-cell" key={index1 + index2}>
                    {arr[indexOfCorrespondingCategory].cellValue}
                  </td>
                );
              }
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

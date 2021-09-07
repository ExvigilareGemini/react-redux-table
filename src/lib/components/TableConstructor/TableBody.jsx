import React from "react";

export default function TableBody(props) {
  return (
    <tbody className="rrtable-table-body">
      {props.rowsContent.map((arr, index1) => {
        return (
          <tr className="rrtable-row" key={index1}>
            {props.headersArray.map((head, index2) => {
              const indexOfCorrespondingCategory = arr.findIndex(
                (el) => el.category === head.category
              );
              return indexOfCorrespondingCategory !== -1 ? (
                <td className="rrtable-cell" key={index1 + index2}>
                  {arr[indexOfCorrespondingCategory].cellValue}
                </td>
              ) : (
                console.log("No match for category")
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

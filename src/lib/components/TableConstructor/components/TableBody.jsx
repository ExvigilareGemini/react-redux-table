import React from "react";
import Rows from "./Rows";

export default function TableBody(props) {
  const { rowsContent, headersArray } = props;

  return (
    <tbody className="rrtable-table-body">
      <Rows headersArray={headersArray} rowsContent={rowsContent} />
    </tbody>
  );
}

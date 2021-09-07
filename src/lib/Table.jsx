import React from "react";
import TableConstructor from "./components/TableConstructor";
import { headersArray, rowsContent } from "../datas/mock";

export default function Table(props) {
  return (
    <table className="rrtable">
      {/* Header */}
      <TableConstructor
        headersArray={headersArray}
        rowsContent={rowsContent}
      />
      {/* Footer */}
    </table>
  );
}

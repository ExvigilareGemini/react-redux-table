import React from "react";
import Header from "./components/Header";
import TableConstructor from "./components/TableConstructor";

export default function Table(props) {
  return (
    <>
      <Header title={props.title} filter={props.filter} entriesSelector={props.entriesSelector} />
      <table className="rrtable">
        <TableConstructor
          headersArray={props.headersArray}
          rowsContent={props.rowsContent}
        />
        {/* Footer */}
      </table>
    </>
  );
}

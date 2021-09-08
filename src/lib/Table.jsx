import React from "react";
import Header from "./components/Header/Header";
import TableConstructor from "./components/TableConstructor/TableConstructor";
import Footer from "./components/Footer/Footer";

export default function Table(props) {
  return (
    <>
      <Header
        title={props.title}
        filter={props.filter}
        entriesSelector={props.entriesSelector}
      />
      <table className="rrtable">
        <TableConstructor
          headersArray={props.headersArray}
          rowsContent={props.rowsContent}
        />
      </table>
      <Footer showEntries={props.showEntries} pageSelector={props.pageSelector} />
    </>
  );
}

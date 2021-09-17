import React from "react";
import Rows from "./Rows";

export default function TableBody(props) {
  const {
    rowsContent,
    headersArray,
    currentPage,
    rowsNumber,
    numberOfLignToDisplay,
    numberOfPages,
    sortingOrder,
    actualSortedColumn,
    searchValue,
    setCurrentPage,
  } = props;

  return (
    <tbody className="rrtable-table-body">
      <Rows
        headersArray={headersArray}
        rowsContent={rowsContent}
        currentPage={currentPage}
        rowsNumber={rowsNumber}
        numberOfLignToDisplay={numberOfLignToDisplay}
        numberOfPages={numberOfPages}
        sortingOrder={sortingOrder}
        actualSortedColumn={actualSortedColumn}
        searchValue={searchValue}
        setCurrentPage={setCurrentPage}
      />
    </tbody>
  );
}

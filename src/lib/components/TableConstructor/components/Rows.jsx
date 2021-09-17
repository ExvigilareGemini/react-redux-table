import React, { useEffect } from "react";
import Cells from "./Cells";
import { sortingColumn } from "../../../functions/sort";
import { filterContent } from "../../../functions/filter";

export default function Rows(props) {
  const {
    rowsContent,
    headersArray,
    numberOfLignToDisplay,
    currentPage,
    numberOfPages,
    rowsNumber,
    sortingOrder,
    actualSortedColumn,
    searchValue,
    setCurrentPage,
  } = props;

  const sortedRowsContent = sortingColumn(
    rowsContent,
    sortingOrder,
    actualSortedColumn
  );

  const sortedAndFilteredRowsContent = filterContent(
    sortedRowsContent,
    searchValue
  );

  const actualNbrOfFirstLign = currentPage * numberOfLignToDisplay;

  const rowsToDisplay = sortedAndFilteredRowsContent.slice(
    actualNbrOfFirstLign,
    actualNbrOfFirstLign + numberOfLignToDisplay
  );

  useEffect(() => {
    if (numberOfLignToDisplay > rowsNumber - actualNbrOfFirstLign) {
      setCurrentPage(numberOfPages - 1);
    }
  });

  return (
    <>
      {rowsToDisplay.map((arr, index1) => {
        return (
          <tr className="rrtable-row" key={index1}>
            <Cells headersArray={headersArray} arr={arr} index1={index1} />
          </tr>
        );
      })}
    </>
  );
}

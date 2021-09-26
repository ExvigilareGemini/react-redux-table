import React from "react";
import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";


/** 
 * Render the table
 * @module TableConstructor
 * @component
 * @category Table
 * @subcategory
 * @requires React
 * @returns {JSX} {@link Header} & {@link TableBody}
 */
export default function TableConstructor(props) {
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
    sortColumn,
    setCurrentPage,
    setNumberOfPages,
  } = props;

  return (
    <>
      <TableHeader
        headersArray={headersArray}
        sortColumn={sortColumn}
        sortingOrder={sortingOrder}
        actualSortedColumn={actualSortedColumn}
      />
      <TableBody
        headersArray={headersArray}
        rowsContent={rowsContent}
        currentPage={currentPage}
        rowsNumber={rowsNumber}
        numberOfLignToDisplay={numberOfLignToDisplay}
        numberOfPages={numberOfPages}
        sortingOrder={sortingOrder}
        searchValue={searchValue}
        actualSortedColumn={actualSortedColumn}
        setCurrentPage={setCurrentPage}
        setNumberOfPages={setNumberOfPages}
      />
    </>
  );
}

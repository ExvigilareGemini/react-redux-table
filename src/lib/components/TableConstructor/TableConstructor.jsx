import React from "react";
import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";



/** Functionnal component, render the table
 *
 * @param {Object} props
 * @param {Array.<Objject>} props.headersArray Contain datas to construct the head part of the table
 * @param {Array} props.headersArray.title The title of the column to display in the head
 * @param {Array} props.headersArray.category The category of the column
 * @param {Array.<rowContent>} props.rowsContent Contain datas of each rows
 * @returns {JSX} The full table containing TableHeader and TableBody
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

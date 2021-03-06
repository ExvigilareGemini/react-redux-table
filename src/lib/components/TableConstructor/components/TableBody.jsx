import React from "react";
import Rows from "./Rows";

/**
   * Render the table body
   * @namespace TableBody
   * @component
   * @category Table
   * @subcategory 
   * @param {Object} props
   * @requires React
   * @return {JSX} {@link Rows}
*/

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
    setNumberOfPages
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
        setNumberOfPages={setNumberOfPages}
      />
    </tbody>
  );
}

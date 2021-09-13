import React, { useEffect } from "react";
import Cells from "./Cells";

export default function Rows(props) {
  const {
    rowsContent,
    headersArray,
    numberOfLignToDisplay,
    currentPage,
    numberOfPages,
    rowsNumber,
    setCurrentPage,
  } = props;

  const actualNbrOfFirstLign = currentPage * numberOfLignToDisplay;

  useEffect(() => {
    if (numberOfLignToDisplay > rowsNumber - actualNbrOfFirstLign) {
      setCurrentPage(numberOfPages - 1);
    }
  });

  const rowsToDisplay = rowsContent.slice(
    actualNbrOfFirstLign,
    actualNbrOfFirstLign + numberOfLignToDisplay
  );

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


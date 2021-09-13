import React from "react";
import PageSelector from "./components/PageSelector";
import "../../style/Footer.css";

export default function Footer(props) {
  const {
    showEntries,
    pageSelector,
    rowsNumber,
    currentPage,
    numberOfLignToDisplay,
    numberOfPages,
    setCurrentPage,
    increaseCurrentPage,
    decreaseCurrentPage,
  } = props;

  const smallNumber = currentPage * numberOfLignToDisplay;
  const bigNumber = (currentPage + 1) * numberOfLignToDisplay;

  return (
    <>
      {showEntries && (
        <p>
          Showing {smallNumber + 1} to{" "}
          {bigNumber > rowsNumber ? rowsNumber : bigNumber} of {rowsNumber}{" "}
          entries
        </p>
      )}
      {pageSelector && (
        <PageSelector
          currentPage={currentPage}
          numberOfLignToDisplay={numberOfLignToDisplay}
          numberOfPages={numberOfPages}
          setCurrentPage={setCurrentPage}
          increaseCurrentPage={increaseCurrentPage}
          decreaseCurrentPage={decreaseCurrentPage}
        />
      )}
    </>
  );
}

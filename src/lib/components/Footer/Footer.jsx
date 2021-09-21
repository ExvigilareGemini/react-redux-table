import React from "react";
import PageSelector from "./components/PageSelector";

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

  const bigNumber = (currentPage + 1) * numberOfLignToDisplay;
  const smallNumber = bigNumber - (numberOfLignToDisplay - 1);
console.log(smallNumber)
  return (
    <div className="rrtable-footer-container">
      {showEntries && (
        <p>
          Showing {rowsNumber === 0 ? 0 : smallNumber} to{" "}
          {bigNumber > rowsNumber ? rowsNumber : bigNumber} of {rowsNumber}{" "}
          entries
        </p>
      )}
      {pageSelector && (
        <div className="rrtable-pageSelector">
          <PageSelector
            currentPage={currentPage}
            numberOfLignToDisplay={numberOfLignToDisplay}
            numberOfPages={numberOfPages}
            setCurrentPage={setCurrentPage}
            increaseCurrentPage={increaseCurrentPage}
            decreaseCurrentPage={decreaseCurrentPage}
          />
        </div>
      )}
    </div>
  );
}

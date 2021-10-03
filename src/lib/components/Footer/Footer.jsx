import React from "react";
import PageSelector from "./components/PageSelector";

/**
 * Render the footer of the table including show entries and PageSelector
 * @namespace Footer
 * @component
 * @category Footer
 * @subcategory
 * @param {Object} props
 * @requires React
 * @return {JSX} {@link PageSelector}
 */

export default function Footer(props) {
  const {
    showEntries,
    rowsNumber,
    currentPage,
    numberOfLignToDisplay,
    numberOfPages,
    setCurrentPage,
    increaseCurrentPage,
    decreaseCurrentPage,
    hideButtons,
  } = props;

  const bigNumber = (currentPage + 1) * numberOfLignToDisplay;
  const smallNumber = bigNumber - (numberOfLignToDisplay - 1);
  return (
    <div className="rrtable-footer-container">
      {showEntries && (
        <p>
          Showing {rowsNumber === 0 ? 0 : smallNumber} to{" "}
          {bigNumber > rowsNumber ? rowsNumber : bigNumber} of {rowsNumber}{" "}
          entries
        </p>
      )}

      {!hideButtons && <div className="rrtable-pageSelector">
        <PageSelector
          currentPage={currentPage}
          numberOfLignToDisplay={numberOfLignToDisplay}
          numberOfPages={numberOfPages}
          setCurrentPage={setCurrentPage}
          increaseCurrentPage={increaseCurrentPage}
          decreaseCurrentPage={decreaseCurrentPage}
        />
      </div>}
    </div>
  );
}

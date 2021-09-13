import React from "react";
import PageNumberButton from "./PageNumberButton";

export default function PageSelector(props) {
  const {
    currentPage,
    decreaseCurrentPage,
    increaseCurrentPage,
    numberOfPages,
    setCurrentPage,
  } = props;

  function previousButton() {
    decreaseCurrentPage(currentPage);
  }

  function nextButton() {
    increaseCurrentPage(currentPage);
  }

  return (
    <>
      <button
        onClick={previousButton}
        disabled={currentPage === 0 ? true : false}
      >
        Previous
      </button>

      <PageNumberButton
        currentPage={currentPage}
        numberOfPages={numberOfPages}
        setCurrentPage={setCurrentPage}
      />

      <button
        onClick={nextButton}
        disabled={currentPage === numberOfPages - 1 ? true : false}
      >
        Next
      </button>
    </>
  );
}

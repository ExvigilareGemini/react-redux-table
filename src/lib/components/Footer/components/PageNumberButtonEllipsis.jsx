import React from "react";
import CenterEllipsis from "./PageNumberButtonEllipsis/CenterEllipsis";
import EdgeEllipsis from "./PageNumberButtonEllipsis/EdgeEllipsis";

export default function PageNumberButtonEllipsis(props) {
  const { currentPage, numberOfPages, setCurrentPage } = props;

  function isSelected(index) {
    if (index === currentPage) {
      return "pageNumberButton-selected";
    }
    return "pageNumberButton";
  }

  function changeCurrentPage(index) {
    setCurrentPage(index);
  }

  function isCentered() {
    if (currentPage <= 3 || currentPage >= numberOfPages - 4) {
      return false;
    }
    return true;
  }

  return (
    <>
      <button
        className={isSelected(0)}
        key={1}
        onClick={() => changeCurrentPage(0)}
      >
        {1}
      </button>
      {isCentered() ? (
        <CenterEllipsis
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <EdgeEllipsis
          currentPage={currentPage}
          numberOfPages={numberOfPages}
          setCurrentPage={setCurrentPage}
        />
      )}
      <button
        className={isSelected(numberOfPages - 1)}
        key={numberOfPages}
        onClick={() => changeCurrentPage(numberOfPages)}
      >
        {numberOfPages}
      </button>
    </>
  );
}

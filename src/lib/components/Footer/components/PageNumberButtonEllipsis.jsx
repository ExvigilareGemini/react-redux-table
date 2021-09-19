import React from "react";
import CenterEllipsis from "./PageNumberButtonEllipsis/CenterEllipsis";
import EdgeEllipsis from "./PageNumberButtonEllipsis/EdgeEllipsis";
import isSelected from "../../../functions/isSelected";

export default function PageNumberButtonEllipsis(props) {
  const { currentPage, numberOfPages, setCurrentPage } = props;

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
        className={isSelected(0, currentPage)}
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
        className={isSelected(numberOfPages - 1, currentPage)}
        key={numberOfPages}
        onClick={() => changeCurrentPage(numberOfPages)}
      >
        {numberOfPages}
      </button>
    </>
  );
}

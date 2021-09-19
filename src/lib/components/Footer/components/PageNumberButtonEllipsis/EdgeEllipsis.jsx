import React from "react";
import isSelected from "../../../../functions/isSelected";


export default function EdgeEllipsis(props) {
  const { currentPage, numberOfPages, setCurrentPage } = props;

  // if I'm in the beginning or ending of the pages
  const valueToAddToIndex =
    currentPage <= numberOfPages / 2 ? 1 : numberOfPages - 4;

  function changeCurrentPage(index) {
    setCurrentPage(index);
  }

  return (
    <>
      {valueToAddToIndex !== 1 && (
        <p className="rrtable-pageSelector-ellipsis">...</p>
      )}
      {Array(3)
        .fill(null)
        .map((el, index) => {
          return (
            <button
              className={isSelected((index + valueToAddToIndex), currentPage)}
              key={index + valueToAddToIndex + 1}
              onClick={() => changeCurrentPage(index + valueToAddToIndex)}
            >
              {index + valueToAddToIndex + 1}
            </button>
          );
        })}
      {valueToAddToIndex === 1 && (
        <p className="rrtable-pageSelector-ellipsis">...</p>
      )}
    </>
  );
}

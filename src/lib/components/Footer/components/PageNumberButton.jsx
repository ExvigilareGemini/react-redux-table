import React from "react";

export default function PageNumberButton(props) {
  const { numberOfPages, currentPage, setCurrentPage } = props;

  function isSelected(index) {
    if (index === currentPage) {
      return "pageNumberButton-selected";
    }
    return "pageNumberButton";
  }

  function changeCurrentPage(index) {
    setCurrentPage(index);
  }

  return (
    <>
      {Array(numberOfPages)
        .fill(null)
        .map((el, index) => {
          return (
            <button
              className={isSelected(index)}
              key={index + 1}
              onClick={() => changeCurrentPage(index)}
            >
              {index + 1}
            </button>
          );
        })}
    </>
  );
}

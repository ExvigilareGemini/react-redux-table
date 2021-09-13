import React from "react";

export default function PageNumberButton(props) {
  const { numberOfPages, currentPage, setCurrentPage } = props;

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
              className={
                index === currentPage
                  ? "pageNumberButton-selected"
                  : "pageNumberButton"
              }
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

import React from "react";

export default function CenterEllipsis(props) {
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

  return (
    <>
      <p className="pageNumberButtonEllipsis">...</p>
      {Array(3)
        .fill(null)
        .map((el, index) => {
          return (
            <button
              className={isSelected(index + currentPage - 1)}
              key={index + currentPage}
              onClick={() => changeCurrentPage(index + currentPage - 1)}
            >
              {index + currentPage}
            </button>
          );
        })}
      <p className="pageNumberButtonEllipsis">...</p>
    </>
  );
}

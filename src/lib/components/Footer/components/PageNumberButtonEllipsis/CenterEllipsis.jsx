import React from "react";
import isSelected from "../../../../functions/isSelected";

export default function CenterEllipsis(props) {
  const { currentPage, setCurrentPage } = props;

  function changeCurrentPage(index) {
    setCurrentPage(index);
  }

  return (
    <>
      <p className="rrtable-pageSelector-ellipsis">...</p>
      {Array(3)
        .fill(null)
        .map((el, index) => {
          return (
            <button
              className={isSelected((index + currentPage - 1), currentPage)}
              key={index + currentPage}
              onClick={() => changeCurrentPage(index + currentPage - 1)}
            >
              {index + currentPage}
            </button>
          );
        })}
      <p className="rrtable-pageSelector-ellipsis">...</p>
    </>
  );
}

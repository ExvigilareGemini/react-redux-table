import React from "react";
import isSelected from "../../../functions/isSelected";

/**
   * Render a set of buttons to navigate through pages
   * @namespace PageNumberButton
   * @component
   * @category Footer
   * @subcategory PageSelector
   * @param {Object} props
   * @requires React
   * @return {JSX}
*/

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
              className={isSelected(index, currentPage)}
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

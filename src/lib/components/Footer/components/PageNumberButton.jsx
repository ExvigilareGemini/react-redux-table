import React from "react";
import { connect } from "react-redux";

function PageNumberButton(props) {
  const { numberOfPages, currentPage } = props;

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
            >
              {index + 1}
            </button>
          );
        })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfPages: state.rrtable.numberOfPages,
    currentPage: state.rrtable.currentPage,
  };
};

export default connect(mapStateToProps, null)(PageNumberButton);

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCurrentPage } from "../../../redux/actions/rrtable-actions";

function PageNumberButton(props) {
  const { numberOfPages, currentPage, setCurrentPage } = props;

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
              onClick={() => setCurrentPage(index)}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setCurrentPage,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNumberButton);

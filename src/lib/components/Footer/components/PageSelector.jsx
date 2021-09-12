import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  increaseCurrentPage,
  decreaseCurrentPage,
} from "../../../redux/actions/rrtable-actions";
import PageNumberButton from "./PageNumberButton";

function PageSelector(props) {
  const {
    currentPage,
    decreaseCurrentPage,
    increaseCurrentPage,
    numberOfPages,
  } = props;

  function previousButton() {
    decreaseCurrentPage(currentPage);
  }

  function nextButton() {
    increaseCurrentPage(currentPage);
  }

  return (
    <>
      <button
        onClick={previousButton}
        disabled={currentPage === 0 ? true : false}
      >
        Previous
      </button>

      <PageNumberButton />

      <button
        onClick={nextButton}
        disabled={currentPage === numberOfPages - 1 ? true : false}
      >
        Next
      </button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.rrtable.currentPage,
    nbrOfLignToDisplay: state.rrtable.nbrOfLignToDisplay,
    numberOfPages: state.rrtable.numberOfPages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      increaseCurrentPage,
      decreaseCurrentPage,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PageSelector);

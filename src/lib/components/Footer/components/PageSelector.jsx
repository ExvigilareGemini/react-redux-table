import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  increaseCurrentPage,
  decreaseCurrentPage,
} from "../../../redux/actions/rrtable-actions";

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
      {numberOfPages >= 6 ? <p>bigger</p> : <p>smaller</p>}

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
    numberOfLignToDisplay: state.rrtable.numberOfLignToDisplay,
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

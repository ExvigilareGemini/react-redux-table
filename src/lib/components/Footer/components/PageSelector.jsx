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
    numberOfRows,
    decreaseCurrentPage,
    increaseCurrentPage,
    nbrOfLignToDisplay,
  } = props;

  // total number of pages
  const p = Math.ceil(numberOfRows / nbrOfLignToDisplay);

  function previousButton() {
    decreaseCurrentPage(currentPage);
  }

  function nextButton() {
    increaseCurrentPage(currentPage);
  }

  return (
    <>
      <button onClick={previousButton}>Previous</button>
      {p >= 6 ? <p>bigger</p> : <p>smaller</p>}
      <button onClick={nextButton}>Next</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    numberOfRows: state.numberOfRows,
    nbrOfLignToDisplay: state.nbrOfLignToDisplay,
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

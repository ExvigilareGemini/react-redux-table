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
  } = props;

  const x = 49; //nombre total de lignes de tableau
  const y = 10; //nombre de lignes affichée dans le tab
  const p = Math.ceil(numberOfRows / y); //nombre total de page

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
  return { currentPage: state.currentPage, numberOfRows: state.numberOfRows };
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

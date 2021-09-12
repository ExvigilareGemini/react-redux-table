import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Cells from "./Cells";
import { setCurrentPage } from "../../../redux/actions/rrtable-actions";

function Rows(props) {
  const {
    rowsContent,
    headersArray,
    numberOfLignToDisplay,
    currentPage,
    numberOfPages,
    rowsNumber,
    setCurrentPage,
  } = props;

  const actualNbrOfFirstLign = currentPage * numberOfLignToDisplay;

  if (numberOfLignToDisplay > rowsNumber - actualNbrOfFirstLign) {
    setCurrentPage(numberOfPages - 1);
  }

  const rowsToDisplay = rowsContent.slice(
    actualNbrOfFirstLign,
    actualNbrOfFirstLign + numberOfLignToDisplay
  );

  return (
    <>
      {rowsToDisplay.map((arr, index1) => {
        return (
          <tr className="rrtable-row" key={index1}>
            <Cells headersArray={headersArray} arr={arr} index1={index1} />
          </tr>
        );
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfLignToDisplay: state.rrtable.numberOfLignToDisplay,
    currentPage: state.rrtable.currentPage,
    numberOfPages: state.rrtable.numberOfPages,
    rowsNumber: state.rrtable.rowsNumber,
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

export default connect(mapStateToProps, mapDispatchToProps)(Rows);

import React from "react";
import { connect } from "react-redux";
import Cells from "./Cells";

function Rows(props) {
  const { rowsContent, headersArray, numberOfLignToDisplay, currentPage } = props;

  const actualNbrOfFirstLign = currentPage * numberOfLignToDisplay;
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
  };
};

export default connect(mapStateToProps, null)(Rows);

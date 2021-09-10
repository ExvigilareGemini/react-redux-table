import React from "react";
import { connect } from "react-redux";
import Cells from "./Cells";

function Rows(props) {
  const { rowsContent, headersArray, nbrOfLignToDisplay } = props;

  const rowsToDisplay = rowsContent.slice(0, nbrOfLignToDisplay);

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
    nbrOfLignToDisplay: state.rrtable.nbrOfLignToDisplay,
    currentPage: state.rrtable.currentPage,
  };
};

export default connect(mapStateToProps, null)(Rows);

import React from "react";
import { connect } from "react-redux";
import PageSelector from "./components/PageSelector";
import '../../style/Footer.css'

function Footer(props) {
  const {
    showEntries,
    pageSelector,
    rowsNumber,
    currentPage,
    numberOfLignToDisplay,
  } = props;

  const smallNumber = currentPage * numberOfLignToDisplay;
  const bigNumber = (currentPage + 1) * numberOfLignToDisplay;

  return (
    <>
      {showEntries && <p>Showing {smallNumber + 1} to {bigNumber > rowsNumber ? rowsNumber : bigNumber} of {rowsNumber} entries</p>}
      {pageSelector && <PageSelector />}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfLignToDisplay: state.rrtable.numberOfLignToDisplay,
    currentPage: state.rrtable.currentPage,
    rowsNumber: state.rrtable.rowsNumber,
  };
};

export default connect(mapStateToProps, null)(Footer);

import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import TableConstructor from "./components/TableConstructor/TableConstructor";
import Footer from "./components/Footer/Footer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  initiateState,
  setCurrentPage,
  increaseCurrentPage,
  decreaseCurrentPage,
  setNumberOfPages,
} from "./redux/actions/rrtable-actions";
import "./style/style.css";

function Table(props) {
  const {
    title,
    filter,
    entriesSelector,
    headersArray,
    rowsContent,
    showEntries,
    pageSelector,
    // redux states
    currentPage,
    rowsNumber,
    numberOfLignToDisplay,
    numberOfPages,
    // redux actions
    initiateState,
    setCurrentPage,
    increaseCurrentPage,
    decreaseCurrentPage,
    setNumberOfPages,
  } = props;

  useEffect(() => {
    initiateState(rowsContent.length, entriesSelector[0]);
  }, [entriesSelector, initiateState, rowsContent.length]);

  return (
    <>
      <Header
        title={title}
        filter={filter}
        entriesSelector={entriesSelector}
        // redux states
        rowsNumber={rowsNumber}
        numberOfLignToDisplay={numberOfLignToDisplay}
        // redux actions
        setNumberOfPages={setNumberOfPages}
      />
      <table className="rrtable">
        <TableConstructor
          headersArray={headersArray}
          rowsContent={rowsContent}
          // redux states
          currentPage={currentPage}
          rowsNumber={rowsNumber}
          numberOfLignToDisplay={numberOfLignToDisplay}
          numberOfPages={numberOfPages}
          // redux actions
          setCurrentPage={setCurrentPage}
        />
      </table>
      <Footer
        showEntries={showEntries}
        pageSelector={pageSelector}
        // redux states
        currentPage={currentPage}
        rowsNumber={rowsNumber}
        numberOfLignToDisplay={numberOfLignToDisplay}
        numberOfPages={numberOfPages}
        // redux actions
        setCurrentPage={setCurrentPage}
        increaseCurrentPage={increaseCurrentPage}
        decreaseCurrentPage={decreaseCurrentPage}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.rrtable.currentPage,
    rowsNumber: state.rrtable.rowsNumber,
    numberOfLignToDisplay: state.rrtable.numberOfLignToDisplay,
    numberOfPages: state.rrtable.numberOfPages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      initiateState,
      setCurrentPage,
      increaseCurrentPage,
      decreaseCurrentPage,
      setNumberOfPages,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

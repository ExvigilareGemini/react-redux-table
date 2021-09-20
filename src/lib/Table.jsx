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
  sortColumn,
  setFilterSearch,
} from "./redux/actions/rrtable-actions";
import PropTypes from 'prop-types';
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
    sortingOrder,
    actualSortedColumn,
    searchValue,
    // redux actions
    initiateState,
    setCurrentPage,
    increaseCurrentPage,
    decreaseCurrentPage,
    setNumberOfPages,
    sortColumn,
    setFilterSearch,
  } = props;

  useEffect(() => {
    initiateState(rowsContent.length, entriesSelector[0]);
  }, [entriesSelector, initiateState, rowsContent.length]);
  return (
    <>
      <div className="rrtable">
        <div className="rrtable-header">
          <Header
            title={title}
            filter={filter}
            entriesSelector={entriesSelector}
            // redux states
            rowsNumber={rowsNumber}
            numberOfLignToDisplay={numberOfLignToDisplay}
            // redux actions
            setNumberOfPages={setNumberOfPages}
            setFilterSearch={setFilterSearch}
          />
        </div>

        <table className="rrtable-table">
          <TableConstructor
            headersArray={headersArray}
            rowsContent={rowsContent}
            // redux states
            currentPage={currentPage}
            rowsNumber={rowsNumber}
            numberOfLignToDisplay={numberOfLignToDisplay}
            numberOfPages={numberOfPages}
            sortingOrder={sortingOrder}
            actualSortedColumn={actualSortedColumn}
            searchValue={searchValue}
            // redux actions
            setCurrentPage={setCurrentPage}
            sortColumn={sortColumn}
            setNumberOfPages={setNumberOfPages}
          />
        </table>
        <div className="rrtable-footer">
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
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.rrtable.currentPage,
    rowsNumber: state.rrtable.rowsNumber,
    numberOfLignToDisplay: state.rrtable.numberOfLignToDisplay,
    numberOfPages: state.rrtable.numberOfPages,
    sortingOrder: state.rrtable.sortingOrder,
    actualSortedColumn: state.rrtable.actualSortedColumn,
    searchValue: state.rrtable.searchValue,
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
      sortColumn,
      setFilterSearch,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);

Table.propTypes = {
  title: PropTypes.string,
  filter: PropTypes.bool,
  entriesSelector: PropTypes.array,
  headersArray: PropTypes.arrayOf(PropTypes.object),
  rowsContent: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  showEntries: PropTypes.bool,
  pageSelector: PropTypes.bool,
  // // redux states
  currentPage: PropTypes.number,
  rowsNumber: PropTypes.number,
  numberOfLignToDisplay: PropTypes.number,
  numberOfPages: PropTypes.number,
  sortingOrder: PropTypes.number,
  actualSortedColumn: PropTypes.string,
  searchValue: PropTypes.string,
  // // redux actions
  initiateState: PropTypes.elementType,
  setCurrentPage: PropTypes.elementType,
  increaseCurrentPage: PropTypes.elementType,
  decreaseCurrentPage: PropTypes.elementType,
  setNumberOfPages: PropTypes.elementType,
  sortColumn: PropTypes.elementType,
  setFilterSearch: PropTypes.elementType,
}
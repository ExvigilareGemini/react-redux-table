import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import TableConstructor from "./components/TableConstructor/TableConstructor";
import Footer from "./components/Footer/Footer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { initiateState } from "./redux/actions/rrtable-actions";

function Table(props) {
  const {
    title,
    filter,
    entriesSelector,
    headersArray,
    rowsContent,
    showEntries,
    pageSelector,
    initiateState,
  } = props;

  useEffect (() => {
    initiateState(rowsContent.length, entriesSelector[0])
  })

  return (
    <>
      <Header title={title} filter={filter} entriesSelector={entriesSelector} />
      <table className="rrtable">
        <TableConstructor
          headersArray={headersArray}
          rowsContent={rowsContent}
        />
      </table>
      <Footer showEntries={showEntries} pageSelector={pageSelector} />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      initiateState,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(Table);

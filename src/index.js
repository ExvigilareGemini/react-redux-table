import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Table from "./lib/Table";
import { rrtableReducer } from "./lib/redux/reducer/rrtable-reducer";
import { headersArray, rowsContent } from "./datas/mock";

const preloadedState = {
  currentPage: 1,
  numberOfRows: rowsContent.length,
  nbrOfLignToDisplay: 10,
};

const store = configureStore({
  reducer: rrtableReducer,
  preloadedState,
});

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Table
          headersArray={headersArray}
          rowsContent={rowsContent}
          title="Current Employees"
          filter={true}
          entriesSelector={true}
          showEntries={true}
          pageSelector={true}
        />
      </Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

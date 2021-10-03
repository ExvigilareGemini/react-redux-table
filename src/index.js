import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Table from "./lib/components/Table";
import rrtableReducer from "./lib/redux/reducer/rrtable-reducer";
import { headersArray, rowsContent, entriesSelector } from "./datas/mock";

const store = configureStore({
  reducer: { rrtable: rrtableReducer },
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
          entriesSelector={entriesSelector}
          showEntries={true}
          hideButtons={false}
        />
      </Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

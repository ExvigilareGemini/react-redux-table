import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Table from "./lib/components/Table";
import { rrtable } from "./lib/redux/reducer/rrtable-reducer";
import { headersArray, rowsContent, entriesSelector } from "./datas/mock";

const store = configureStore({
  reducer: { rrtable: rrtable },
});

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Table
          headersArray={[]}
          rowsContent={[]}
          title="Current Employees"
          filter={true}
          entriesSelector={[]}
          showEntries={true}
        />
      </Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import Table from "./lib/Table";
import { headersArray, rowsContent } from "./datas/mock";

const App = () => {
  return (
    <>
      <div>Hello world</div>
      <Table
        headersArray={headersArray}
        rowsContent={rowsContent}
        title="Current Employees"
        filter={true}
        entriesSelector={true}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

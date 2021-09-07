import React from "react";
import ReactDOM from "react-dom";
import Table from "./lib/Table";

const App = () => {
  return (
    <>
      <div>Hello world</div>
      <Table />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));


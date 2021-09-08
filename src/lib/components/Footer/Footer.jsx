import React from "react";
import PageSelector from "./components/PageSelector"

export default function Footer(props) {
  return (
    <>
      {props.showEntries && <p>Showing 1 to 10 of 16 entries</p>}
      {props.pageSelector && <PageSelector />}
    </>
  );
}

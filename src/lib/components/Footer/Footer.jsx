import React from "react";
import PageSelector from "./components/PageSelector";

export default function Footer(props) {
  const { showEntries, pageSelector } = props;
  return (
    <>
      {showEntries && <p>Showing 1 to 10 of 16 entries</p>}
      {pageSelector && <PageSelector />}
    </>
  );
}

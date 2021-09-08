import React from "react";

export default function Header(props) {
  return (
    <>
      {props.title && <h1 className="rrtable-title">{props.title}</h1>}
      {props.entriesSelector && (
        <label>
          Show
          <select>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label>
      )}
      {props.filter && (
        <label>
          Search
          <input type="search"></input>
        </label>
      )}
    </>
  );
}

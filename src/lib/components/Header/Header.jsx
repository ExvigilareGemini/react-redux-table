import React from "react";

export default function Header(props) {
  const {
    title,
    entriesSelector,
    filter,
    setNumberOfPages,
    rowsNumber,
    numberOfLignToDisplay,
    setFilterSearch,
  } = props;


  return (
    <>
      {title && <h1 className="rrtable-title">{title}</h1>}
      {entriesSelector && (
        <label>
          Show
          <select
            defaultValue={numberOfLignToDisplay}
            onChange={(e) => setNumberOfPages(parseInt(e.target.value), rowsNumber)}
          >
            {entriesSelector.map((el, index) => {
              return (
                <option value={el} key={el + index}>
                  {el}
                </option>
              );
            })}
          </select>
        </label>
      )}
      {filter && (
        <label>
          Search
          <input
            type="search"
            onChange={(e) => setFilterSearch(e.target.value)}
          ></input>
        </label>
      )}
    </>
  );
}

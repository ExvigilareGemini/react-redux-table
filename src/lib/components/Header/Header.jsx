import React from "react";

/**
 * Header of the table, contains the title, select and searching sections
 * @namespace Header
 * @component
 * @category Header
 * @subcategory 
 * @param {*} props 
 */
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
      {title && <h1 className="rrtable-header-title">{title}</h1>}
      <div className="rrtable-header-labelContainer">
        {entriesSelector && (
          <label className="rrtable-header-label">
            Show
            <select
              className="rrtable-header-input"
              defaultValue={numberOfLignToDisplay}
              onChange={(e) =>
                setNumberOfPages(rowsNumber, parseInt(e.target.value))
              }
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
          <label className="rrtable-header-label">
            Search
            <input
              className="rrtable-header-input"
              type="search"
              onChange={(e) => setFilterSearch(e.target.value)}
            ></input>
          </label>
        )}
      </div>
    </>
  );
}

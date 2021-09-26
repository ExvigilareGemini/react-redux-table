import React from "react";

/**
   * Render columns headers
   * @namespace TableHeaders
   * @component
   * @category Table
   * @subcategory
   * @param {Object} props
   * @requires React
*/

export default function TableHeader(props) {
  const { headersArray, sortColumn, sortingOrder, actualSortedColumn } = props;

  return (
    <thead className="rrtable-table-header">
      <tr className="rrtable-table-header-row">
        {headersArray.map((el, index) => {
          return (
            <th
              key={el.title + index}
              className="rrtable-table-header-cell"
              onClick={() =>
                sortColumn(actualSortedColumn, el.category, sortingOrder)
              }
            >
              {el.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

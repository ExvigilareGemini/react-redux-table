import React from "react";

function columnIsSorted(category, actualSortedColumn, sortingOrder) {
  if (category === actualSortedColumn) {
    return sortingOrder === -1
      ? "rrtable-table-header-cell selectedBigger"
      : "rrtable-table-header-cell selectedSmaller";
  }
  return "rrtable-table-header-cell";
}

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
              className={columnIsSorted(
                el.category,
                actualSortedColumn,
                sortingOrder
              )}
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

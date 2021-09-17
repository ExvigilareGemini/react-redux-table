import React from "react";

export default function TableHeader(props) {
  const { headersArray, sortColumn, sortingOrder, actualSortedColumn } = props;

  return (
    <thead className="rrtable-table-header">
      <tr className="rrtable-row">
        {headersArray.map((el, index) => {
          return (
            <th
              key={el.title + index}
              className="header_cell"
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

import React from "react";

export default function TableHeader(props) {
  return (
    <thead className="rrtable-table-header">
      <tr className="rrtable-row">
        {props.headersArray.map((el, index) => {
          return (
            <th key={el.title + index} className="cell">
              {el.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

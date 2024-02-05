import Data from "./Data.json";
import { useTable } from "react-table";
import React from "react";
import { useMemo } from "react";

function App() {
  const data = useMemo(() => Data, []);
  const columns = useMemo;
  () => [
    {
      Header: "ID",
      accessor: "id",
    },

    {
      Header: "DATE",
      accessor: "date",
    },

    {
      Header: "DESCRIPTION",
      accessor: "description",
    },

    {
      Header: "CATEGORY",
      accessor: "category",
    },

    {
      Header: "AMOUNT",
      accessor: "amount",
    },
  ],
    [];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

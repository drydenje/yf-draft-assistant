// import styles from "./Table.module.css";
import React from "react";
import { useTable, useSortBy } from "react-table";
interface Heading {
    header: String,
    accessor: String
}

// { Header: "Year", accessor: "yearID" },

const Table = ({ headings: Heading[], stats: StatLine[] }) => {

  const columns = React.useMemo(() => headings, []);
  const data = React.useMemo(() => stats, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <table
      {...getTableProps()}
      className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm"
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="border border-slate-300 underline"
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="hover:bg-slate-300">
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="border border-slate-300"
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

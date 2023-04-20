// import styles from "./Table.module.css";
import React from "react";
// import { useRouter } from 'next/router';
import { useTable, useSortBy } from "react-table";

// type TableData = {
//   htest: Function,
// headings: {
//   Header: string;
//   accessor: string;
// }[],
// stats?: {
//   yearID: number,
//   iG: number,
//   iAB: number,
//   iR: number,
//   iH: number,
//   i2B: number,
//   i3B: number,
//   iHR: number,
//   iRBI: number,
//   iSB: number,
//   iCS: number,
//   iBB: number,
//   iSO: number,
//   iIBB: number,
//   iHBP: number,
//   iSH: number,
//   iSF: number,
//   iGIDP: number,
// }[],
// };

const Table = ({ headings, stats, onClickHandler }) => {
  // const Table = ({ htest }) => {
  const columns = React.useMemo(() => headings, []);
  const data = React.useMemo(() => stats, []);

  // console.log("htest:", typeof htest);
  // console.log(htest());

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
            <tr
              {...row.getRowProps()}
              className="hover:bg-slate-300"
              onClick={() => onClickHandler(row)}
            >
              {/* > */}
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

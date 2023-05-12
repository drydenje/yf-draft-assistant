// import styles from "./Table.module.css";
import React from "react";
import { useTable, useSortBy } from "react-table";
import styles from './Table.module.css'

type TableData = {
  headings: {
    Header: string;
    accessor: string;
  }[],
  stats?: any;
  // {
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
  onClickHandler?: Function,
};

const Table = ({ headings, stats, onClickHandler=null }: TableData) => {
  const columns = React.useMemo(() => headings, []);
  const data = React.useMemo(() => stats, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <table
      {...getTableProps()}
      className={styles.table}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
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
              onClick={() => (onClickHandler ? onClickHandler(row) : null)}
            >
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
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

// import styles from "./Table.module.css";
import React from "react";
import { 
  createColumnHelper, 
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";
// useSortBy
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

const Table = ({ headings, stats }: TableData) => {
  const columns = React.useMemo(() => headings, []);
  const data = React.useMemo(() => stats, []);
  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  const table =
    useReactTable({ columns, data, getCoreRowModel: getCoreRowModel()});

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  data-cell={cell.getContext().column.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

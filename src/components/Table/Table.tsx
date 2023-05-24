// import styles from "./Table.module.css";
import React from "react";
import { 
  createColumnHelper, 
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";
import type { ColumnDef } from '@tanstack/react-table';
// useSortBy
import styles from './Table.module.css'

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
}

// type TableData = {
  // headings: {
  //   cell: Function,
  //   header: Function,
  //   accessorKey: String,
  // }[],
  // stats?: any;
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
// };

const Table = <T extends object>({ data, columns }: ReactTableProps<T>) => {
  // const columns = React.useMemo(() => columns, []);
  // const data = React.useMemo(() => data, []);
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

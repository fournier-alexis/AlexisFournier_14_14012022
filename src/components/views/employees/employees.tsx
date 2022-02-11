import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { columnsDatas } from "../../../assets/datas/columns";
import { Employee } from "../../../types/Employee";
import { getRangeEnd, getRangeStart } from "../../../utils/range";
import { Input } from "../../elements/input/input";
import styles from "./employees.module.css";

export const Employees: React.FunctionComponent = () => {
  const employeesState: Employee[] = useSelector(
    (state: any) => state.employees.employees
  );
  const columns = useMemo(() => columnsDatas, []);
  const employees: Employee[] = useMemo(() => employeesState, []);
  const table = useTable(
    {
      columns: columns,
      data: employees,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <main className={styles.main}>
      <h1>Current Employees</h1>
      <table {...table.getTableProps()} className={styles.table}>
        <div className={styles.search}>
          <Input
            id="search"
            type="text"
            label="search"
            value={table.state.globalFilter}
            onChange={table.setGlobalFilter}
          ></Input>
        </div>
        <thead>
          {table.headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()} className={styles.tr}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={styles.th}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : " ⏹️"}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...table.getTableBodyProps()}>
          {table.page.map((row: any) => {
            table.prepareRow(row);
            return (
              <tr {...row.getRowProps()} className={styles.tr}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()} className={styles.td}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          <div className={styles.pagination}>
            <div className={styles.pageSize}>
              <label htmlFor="pageSize">Row per pages</label>
              <select
                id="pageSize"
                value={table.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                }}
              >
                {[10, 25, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.infos}>
              <span>
                <p>
                  {getRangeStart(table.state)}-
                  {getRangeEnd(table.state, employees.length)} of{" "}
                  {employees.length}
                </p>
              </span>
            </div>
            <div className={styles.navigation}>
              <button
                onClick={() => table.gotoPage(0)}
                disabled={!table.canPreviousPage}
              >
                {"<<"}
              </button>
              <button
                onClick={() => table.previousPage()}
                disabled={!table.canPreviousPage}
              >
                {"<"}
              </button>
              <button
                onClick={() => table.nextPage()}
                disabled={!table.canNextPage}
              >
                {">"}
              </button>
              <button
                onClick={() => table.gotoPage(table.pageCount - 1)}
                disabled={!table.canNextPage}
              >
                {">>"}
              </button>
            </div>
          </div>
        </tbody>
      </table>
      <Link to="/" className={styles.back}>
        Home
      </Link>
    </main>
  );
};

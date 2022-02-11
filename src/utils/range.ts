import { TableState } from "react-table"

export const getRangeStart = (state: TableState): number => {
  return state.pageIndex * state.pageSize + 1;
}

export const getRangeEnd = (state: TableState, nbRow: number): number => {
  const end = (state.pageIndex + 1) * state.pageSize;
  
  return end > nbRow ? nbRow : end;
}
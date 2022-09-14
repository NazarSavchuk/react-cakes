import { Sort } from "./slice";


export interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: Sort;
  }
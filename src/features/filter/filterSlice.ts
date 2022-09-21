import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortPropertyEnum } from "./type";

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: '',
    currentPage: 1,
    sort: {
      name: 'popularity',
      sortProperty: SortPropertyEnum.OLDEST_DESC,
    },
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      setCategoryId(state, action: PayloadAction<string>) {
        state.categoryId = action.payload;
      },
      setSearchValue(state, action: PayloadAction<string>) {
        state.searchValue = action.payload;
      },
      setSort(state, action: PayloadAction<Sort>) {
        state.sort = action.payload;
      },
      setCurrentPage(state, action: PayloadAction<number>) {
        state.currentPage = action.payload;
      },
      setFilters(state, action: PayloadAction<FilterSliceState>) {
        if (Object.keys(action.payload).length) {
          state.currentPage = Number(action.payload.currentPage);
          state.categoryId = action.payload.categoryId;
          state.sort = action.payload.sort;
        } else {
          state.currentPage = 1;
          state.categoryId = '';
          state.sort = {
            name: 'popularity',
            sortProperty: SortPropertyEnum.OLDEST_DESC,
          };
        }
      },
    },
  });
  
  export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } =
    filterSlice.actions;
  
  export default filterSlice.reducer;
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductSliceStatus, SearchProductParams } from "./types";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";
import axios from "axios";

const initialState: ProductSliceStatus = {
  items: [],
  status: "loading",
};

export const fetchProducts = createAsyncThunk<Product[], SearchProductParams>(
  "product/fetchProductStatus",
  async (params) => {
    const { category, sort, page, search } = params;
    console.log(params, 4444);
    const {data} = await axios.get(
      `http://localhost:5000/api/products?limit=${page*4}&${category}&${sort}&title[regex]=${search}`,
      {
        params: pickBy(
          {
            page,
            category,
            search,
            sort,
          },
          identity
        ),
      }
    );
    return data.products;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
      state.items = [];
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.status = 'success';
        state.items = action.payload;
      }
    );
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "failed";
      state.items = [];
    });
  },
});

export default productSlice.reducer;

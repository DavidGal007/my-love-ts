import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../app/instance";
import { Product, ProductSliceStatus, SearchProductParams } from "./types";


const initialState: ProductSliceStatus = {
  items: [],
  status: "loading",
};

export const fetchProducts = createAsyncThunk<Product[], SearchProductParams>(
  "product/fetchProductStatus",
  async (params) => {
    const { category, sortBy, page, search } = params;
    
    const {data} = await api.get(
      `products?limit=${page*8}&${category}&${sortBy}&title[regex]=${search}`,
      // {
      //   params: pickBy(
      //     {
      //       page,
      //       category,
      //       search,
      //       sort,
      //     },
      //     identity
      //   ),
      // }
    );
    console.log(data.result);
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

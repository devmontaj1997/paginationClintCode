import { createSlice } from "@reduxjs/toolkit";
import { getCarsApiSlice } from "./paginationAPISlice.js";

const carShopSlice = createSlice({
  name: "carShopSlice",
  initialState: {
    cars: [],
    uniqcarData: null,
    totalPages: null,
    currentPage: 1,
    message: null,
    error: null,
    loader: false,
  },
  reducers: {
    setEmtyMessage: (state) => {
      state.message = null;
      state.error = null;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(getCarsApiSlice.pending, (state) => {
        state.loader = true;
      })
      .addCase(getCarsApiSlice.fulfilled, (state, action) => {
        state.loader = false;
        state.cars = action.payload.allCar
        state.currentPage = action.payload.currantPage
        state.totalPages = action.payload.totalPages
        state.message = action.payload.message;
      })
      .addCase(getCarsApiSlice.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      });
  },
});

// selector
export const paginationSelector = (state) => state.pagination;
// export actions
export const { setEmtyMessage} = carShopSlice.actions;
// export authSlice reducer
export default carShopSlice.reducer

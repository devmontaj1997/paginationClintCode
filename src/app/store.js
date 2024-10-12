import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from "../feature/pagination/paginationSlice.js"

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
  },
})
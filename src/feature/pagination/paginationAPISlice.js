// create authApiSlice

import { createAsyncThunk } from "@reduxjs/toolkit";

import API from "../../apiAxiosInstance/api";

// get all cars api slice

export const getCarsApiSlice = createAsyncThunk(
  "paginationslice/getCarsApiSlice",
  async (page) => {
    try {
      const response = await API.get(`/?page=${page}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// this is UserRegisterApiSlice
export const createUserDataApiSlice = createAsyncThunk(
  "formValidationslice/createUserDataApiSlice",
  async (data) => {
    try {
      const response = await API.post("/user_data", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// this is UniqUserApiSlice
export const uniqUserDataApiSlice = createAsyncThunk(
  "formValidationslice/uniqUserDataApiSlice",
  async (data) => {
    try {
      const response = await API.post("/uniq_user_data", data);

      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

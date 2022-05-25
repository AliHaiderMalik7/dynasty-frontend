import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "get/userData",
  async ({ pageNo, limit = 100, nationality }) => {
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?page=${pageNo}&results=${limit}&nationality=${nationality}`
      );
      return response.data.results;
    } catch (e) {
      throw new Error("I crashed!");
    }
  }
);

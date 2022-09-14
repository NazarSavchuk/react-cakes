import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
  "pizza/fetchPizzasStatus",
  async (params: Record<string, string>) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://62abb2aabd0e5d29af143603.mockapi.io/react-pizza?&page=${currentPage}&limit=4&${category}$&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { request } from "../utils/common";
import {newsItemQuery, tracksItemCollectionQuery} from "../utils/queries";

const initialState = {
  items: [],
  isLoading: false,
};

export const getTracksItems = createAsyncThunk(
  "tracksItems/getTracksItems",
  async (_, thunkAPI) => {
    try {
      const data = await request(tracksItemCollectionQuery);

      const { items } = data.tracksItemCollection;

      /*if (typeof ({items}) === "undefined") {
        console.log("Contentful вернул пустой ответ или неверную структуру");
      }*/

      return items;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const tracksItemsSlice = createSlice({
  name: "tracksItems",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getTracksItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTracksItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getTracksItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default tracksItemsSlice.reducer;

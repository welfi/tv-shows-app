import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosSearch from "services/search.services";

export const fetchData = createAsyncThunk(
  "search",
  async (search, thunkAPI) => {
    try {
      const response = await axiosSearch(search);
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  search: "",
  shows: [],
  status: "idle",
  error: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    change: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "success";
        state.shows = action.payload;
      })
      .addCase(fetchData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { change } = searchSlice.actions;

export default searchSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosShow, { axiosEpisodes } from "services/show.services";

export const fetchShow = createAsyncThunk("show", async (id, thunkAPI) => {
  try {
    const response = await axiosShow(id);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const fetchEpisodes = createAsyncThunk(
  "episode",
  async (data, thunkAPI) => {
    try {
      const response = await axiosEpisodes(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  status: "idle",
  episodesStatus: "idle",
  selected: {},
  episodes: {},
  selectedError: "",
  episodesError: "",
  season_number: 0,
};

export const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {
    changeSeason: (state, action) => {
      state.season_number = action.payload;
    },
    resetFetch: (state) => {
      state.status = "idle";
      state.episodesStatus = "idle";
      state.selected = {};
      state.episodes = {};
      state.selectedError = "";
      state.episodesError = "";
      state.season_number = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShow.fulfilled, (state, action) => {
        state.status = "success";
        state.selected = action.payload;
      })
      .addCase(fetchShow.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchShow.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.episodesStatus = "success";
        state.episodes = action.payload;
      })
      .addCase(fetchEpisodes.pending, (state) => {
        state.episodesStatus = "pending";
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.episodesStatus = "rejected";
        state.episodesError = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { changeSeason, resetFetch } = fetchSlice.actions;

export default fetchSlice.reducer;

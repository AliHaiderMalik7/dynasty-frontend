import { createSlice } from "@reduxjs/toolkit";
import { filterUser } from "../actions/settingActions";

const settingSlice = createSlice({
  name: "settings",
  initialState: {
    nationality: null,
  },
  extraReducers: (builder) => {
    builder.addCase(filterUser, (state, action) => {
      state.nationality = action.payload.nat;
    });
  },
});

export default settingSlice.reducer;

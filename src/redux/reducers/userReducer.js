import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../actions/userActions";
import { initialState } from "../initialState";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    emptyUser: (state, action) => {
      state.user = [];
      state.pageNo = 1;
    },
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },

    searchUser: (state, action) => {
      if (action?.payload?.length > 0) {
        state.searchData = action.payload;
      } else {
        state.searchData = [];
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      (state.loading = false),
        (state.user = [...state.user, ...action.payload]);
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { setFilter, emptyUser, searchUser, setPageNo, setLimit } =
  userSlice.actions;

export default userSlice.reducer;

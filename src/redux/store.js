import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import settingReducer from "./reducers/settingsReducer";
export const store = configureStore({
  reducer: {
    app: userReducer,
    settings: settingReducer,
  },
});

import { createAction } from "@reduxjs/toolkit";

export const filterUser = createAction("filterAction", (nat) => {
  return {
    payload: {
      nat,
    },
  };
});

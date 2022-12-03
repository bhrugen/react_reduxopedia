import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    //we will fill this reducer in the upcoming videos
  },
});

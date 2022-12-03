import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/actions";
const initalState = () => {
  return {
    destinations: [
      {
        name: "Hong Kong",
        days: 7,
        fact: "World's longest covered escalator",
      },
      {
        name: "Japan",
        days: 10,
        fact: "Japan is mostly mountains",
      },
      {
        name: "New Zealand",
        days: 14,
        fact: "Last country in the world to be inhabited by humans",
      },
    ],
    destinationSelected: null,
  };
};

export const destinationSlice = createSlice({
  name: "destination",
  initialState: initalState,
  reducers: {
    destinationClicked: (state, action) => {
      state.destinationSelected = action.payload;
    },
    resetDestination: (state, action) => {
      console.log(action);
      state.destinationSelected = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia, (state, action) => {
      state.destinationSelected = null;
    });
  },
});

export const { destinationClicked, resetDestination } =
  destinationSlice.actions;
export const destinationReducer = destinationSlice.reducer;

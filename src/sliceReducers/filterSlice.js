import { createSlice } from "@reduxjs/toolkit";

export const filters = {
  all: () => {
    return true;
  },
  active: (todo) => {
    return todo.isCompleted === false;
  },
  completed: (todo) => {
    return todo.isCompleted === true;
  },
};

const filter = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = filter;
export const { setFilter } = actions;
export default reducer;

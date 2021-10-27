import { createSlice } from "@reduxjs/toolkit";

const editId = createSlice({
  name: "editId",
  initialState: null,
  reducers: {
    startEdit: (state, action) => {
      console.log(action.payload, state);
      return action.payload;
    },
    endEdit: (state, action) => {
      return action.payload;
    },
  },
});

const { reducer, actions } = editId;
export const { startEdit, endEdit } = actions;
export default reducer;

import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../sliceReducers/todoSlice";
import filterSlice from "../sliceReducers/filterSlice";
import editIdSlice from "../sliceReducers/editIdSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
    filter: filterSlice,
    editId: editIdSlice,
  },
});

export default store;

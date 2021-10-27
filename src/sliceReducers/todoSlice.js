import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [
  { id: 0, name: "Do House Work", isCompleted: true },
  { id: 1, name: "Do Exercise", isCompleted: false },
  { id: 2, name: "Learn English", isCompleted: false },
];

const todos = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    addTodo: (state, action) => {
      state.unshift(action.payload);
    },
    toggleTodo: (state, action) => {
      state.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
      });
    },
    toggleAll: (state, action) => {
      state.forEach((todo) => (todo.isCompleted = action.payload));
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    clearTodoCompleted: (state, action) => {
      return state.filter((todo) => todo.isCompleted === false);
    },
    editTodo: (state, action) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name;
        }
      });
    },
    cancelTodo: (state, action) => {
      return state;
    },
  },
});

const { reducer, actions } = todos;
export const {
  addTodo,
  toggleTodo,
  toggleAll,
  removeTodo,
  clearTodoCompleted,
  editTodo,
  cancelTodo,
} = actions;
export default reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Status, TodoState } from "./types";

const initialState: TodoState = {
  list: [],
  status: Status.idle,
  error: null,
};

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(`${BASE_URL}/api/todos`);
  const parsedResponse = await response.json();
  return parsedResponse;
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = Status.loading;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = Status.succeeded;
        state.list = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = Status.failed;
        state.error = action.error.message || "Something went wrong...";
      });
  },
});

export const selectTodoSlice = (state: RootState) => state.todos;
export default todoSlice.reducer;
